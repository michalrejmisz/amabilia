import {NextPageWithLayout} from "../_app";
import {useViewportSize} from "@mantine/hooks";
import {Fragment} from "react";
import {Container, createStyles, Grid} from "@mantine/core";
import {Layout} from "../../Layout/Layout";
import {ICategory} from "../../interfaces/Categories";
import {IProduct} from "../../interfaces/Products";
import {ProductComponent}  from '../../components/Product/ProductComponent';
import {GetServerSideProps} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { initializeApollo, addApolloState } from "@/lib/apolloClient";
import {useRouter} from "next/router";
import {useContext, createContext} from 'react';
import {PRODUCT_BY_SLUG} from "@/lib/graphql/products";

interface ViewPortSize {
    viewPortHeight: number,
    viewPortWidth: number,
}

interface IParams extends ParsedUrlQuery {
    slug: string
}


const useStyles = createStyles((theme, {viewPortHeight, viewPortWidth} : ViewPortSize) => ({
    wrapper: {
        minHeight: viewPortHeight - 80,
    }
}));


const Product: NextPageWithLayout<{ category : ICategory, product : IProduct}> = ({category, product}) =>{
    // const product = useContext(Context) as IProduct;

    const { height: viewPortHeight, width: viewPortWidth } = useViewportSize();
    const { classes } = useStyles({ viewPortHeight, viewPortWidth });

    let otherImages = null
    otherImages = product?.attributes?.Zdjecia?.data?.map((img) => {
        return{
            mediaItemUrl: process.env.STRAPI_UPLOAD_FOLDER+img.attributes.url
        }
    })

    return(
        <Fragment>
            <Container size={'lg'} mt={"50px"} className={classes.wrapper} >
                <ProductComponent product={
                    {
                        title: product?.attributes?.Nazwa,
                        price: product?.attributes?.Cena ,
                        slug: product?.attributes?.Link,
                        imagePrimary: {
                            mediaItemUrl: `${process.env.STRAPI_UPLOAD_FOLDER}${product?.attributes?.Zdjecie_glowne?.data?.attributes?.url || "/uploads/no-thumb.png"}`
                        },

                        images: [
                            ...otherImages
                        ],

                    }
                }/>
            </Container>
        </Fragment>
    );
}

export default Product;

Product.getLayout = function getLayout(page: React.ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
    const { slug } = context.params as IParams
    const apolloClient = initializeApollo()

    const { data, error, errors } = await apolloClient.query({
        // query: PRODUCTS_BY_CATEGORY, variables: { id: "1"}
        query: PRODUCT_BY_SLUG,
        variables: { slug: slug },
    })

    const product = data.produkties.data[0]
    console.log(JSON.stringify(product))
    // const images = product?.attributes?.Zdjecia?.data?.map((img) => {mediaItemUrl: process.env.STRAPI_UPLOAD_FOLDER+img.attributes.url})
    const images = product?.attributes?.Zdjecia?.data?.map((img) => {
        return{
            mediaItemUrl: process.env.STRAPI_UPLOAD_FOLDER+img.attributes.url
        }
    })
    console.log("----Single START----")
    console.log(JSON.stringify(product))
    // console.log(JSON.stringify(product.attributes.Zdjecia.data[0].attributes))
    console.log("----Single KONIEC----")


    return addApolloState(apolloClient, {
        props: {
            slug,
            product: data.produkties.data[0],
        },
    });
}
