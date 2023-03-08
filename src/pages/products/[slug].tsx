import {Fragment} from 'react'
import {Center, Container, createStyles, Image, MantineProvider, Title, Grid} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import ProductsNavbar from "../../components/Products/Navbar/ProductsNavbar";
import ProductsGrid from "../../components/Products/Grid/ProductsGrid";
import {InformationBanner} from "../../components/Products/InformationBanner/InformationBanner";
import type { NextPageWithLayout } from '../_app'
// import Home from "./Home";
// import {getCategories, getCategoryBySlug, getProducts, getProductsByCategory} from "../../utils/apollo-client";
import {ICategory} from "../../interfaces/Categories";
import {IProduct} from "../../interfaces/Products";
import {GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps} from 'next';
import { ParsedUrlQuery } from 'querystring';
import {Layout} from '../../Layout/Layout';
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { CATEGORIES_ALL } from "../../lib/graphql/categories";
import {PRODUCTS_ALL, PRODUCTS_ALL2, PRODUCTS_BY_CATEGORY} from "../../lib/graphql/products";

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface PageProps {
    data: string
}

interface ViewPortSize {
    viewPortHeight: number,
    viewPortWidth: number,
}

const useStyles = createStyles((theme, {viewPortHeight, viewPortWidth} : ViewPortSize) => ({
    wrapper: {
        minHeight: viewPortHeight - 80,
    }
}));

interface Props{
    categories: ICategory[];
    products: IProduct[];
    slug: string;
    data: any;
}


const Products: NextPageWithLayout<Props> = ({categories, products, slug, data}) => {
    const { height: viewPortHeight, width: viewPortWidth } = useViewportSize();
    const { classes } = useStyles({ viewPortHeight, viewPortWidth });

    return(
        <Fragment>
                <Container size={'lg'} className={classes.wrapper}>
                    <InformationBanner/>
                    <Grid mt={'20px'}>
                        <Grid.Col span={12} xs={3} sm={3}>
                            <ProductsNavbar categories={categories} currentSlug={slug}/>
                        </Grid.Col>
                        <Grid.Col span={12} xs={9} sm={9}>
                            <ProductsGrid data={data}/>
                        </Grid.Col>
                    </Grid>
                </Container>
        </Fragment>
    );
}

export default Products;

Products.getLayout = function getLayout(page: React.ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    );
}


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { slug } = context.query;

    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: CATEGORIES_ALL,
    })

    const { data, error, errors } = await apolloClient.query({
        // query: PRODUCTS_BY_CATEGORY, variables: { id: "1"}
        query: PRODUCTS_BY_CATEGORY,
            variables: { filters: {
                "kategoria": {"Link": {"eq": slug}},
            } },
    })

    console.log(data)
    console.log("---------------")
    console.log(apolloClient.cache.extract())
    console.log("---------------")
    console.log(error)
    console.log(errors)

    // console.log(data.produkties.data[0].attributes.Nazwa)
    // data.produkties?.data?.map((product) => (console.log(product.attributes.Zdjecie_glowne?.data?.attributes.name)));

    return addApolloState(apolloClient, {
        props: {
            slug,
            data
        },
    });

}
