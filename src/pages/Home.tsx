import {Fragment} from 'react'
import {Center, Container, createStyles, Image, MantineProvider, Title} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import ProductsOffer from "../components/Main/ProductsOffer/ProductsOffer";
import InitialMain from "../components/Main/InitialMain/InitialMain";
import {ContactUsForm} from "../components/Main/ContactForm/ContactUsForm";
import type { NextPageWithLayout } from './_app'
import {gql, useQuery, TypedDocumentNode} from "@apollo/client";
import {IProduct} from '../interfaces/Products';
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { CATEGORIES_ALL } from "../lib/graphql/categories";
import { PRODUCTS_ALL } from "../lib/graphql/products";
import {client, Layout} from "../Layout/Layout";

interface ViewPortSize {
    viewPortHeight: number,
    viewPortWidth: number,
}

interface ProductsData {
    products: IProduct[];
}
const useStyles = createStyles((theme, {viewPortHeight, viewPortWidth} : ViewPortSize) => (
    {

}));

interface NavbarCategoryItem {
    categories: string;
}



const Home: NextPageWithLayout = () => {
    const { height: viewPortHeight, width: viewPortWidth } = useViewportSize();
    const { classes } = useStyles({ viewPortHeight, viewPortWidth });

    const { loading: loadingCategories, error: errorCategories, data: dataCategories, fetchMore: fetchCategories, networkStatus: networkCategories } = useQuery(CATEGORIES_ALL);
    const { loading: loadingProducts, error: errorProducts, data: dataProducts, fetchMore: fetchProducts, networkStatus: networkProducts } = useQuery(PRODUCTS_ALL);
    console.log("Test")
    console.log(dataCategories)
    console.log(dataProducts)
    // const { loading, error, data } = useQuery(GET_PRODUCTS, {
    //     fetchPolicy: 'network-only',
    // });
    // console.log("-------------LAYOUT")
    // console.log(data)
    // console.log("-------------LAYOUT")
    // const jsxCategories = categories.map((category) => {
    //     return {category};
    // })

    // const { loading, error, produkty } = useQuery(GET_PRODUCTS);
    // console.log("ProviderT"+produkty);
    // console.log("ProviderT"+error);
    // console.log("ProviderTERROR"+error);
    // console.log("ProviderT"+loading);


    return(
        <Fragment>
                <InitialMain/>
                <ProductsOffer/>
                <ContactUsForm/>
        </Fragment>
    );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    );
}



// export const GetServerSideProps<UserProfilePageProps> = async (context) => {
//     const apolloClient = await createServerApolloClient({ context });
//
//     await apolloClient.query({
//         query: USER_PROFILE,
//         variables: {
//             username,
//         },
//     });
//
//     const apolloCache = apolloClient.cache.extract();
//
//     return {
//         props: {
//             apolloCache,
//         },
//     };
// };



export const getServerSideProps = async () => {
    const apolloClient = initializeApollo()

    const { data } =await apolloClient.query({
        query: CATEGORIES_ALL,
    })

    console.log("HOMIE")
    console.log(data.categories.data)
    // data.categories.data.map((category) => console.log(category.attributes.Nazwa))
    await apolloClient.query({
        query: PRODUCTS_ALL,
    })

    return addApolloState(apolloClient, {
        props: {},
    });
}


// export async function getStaticProps() {
//     // const products = await getProductsNew()
//     // console.log(products)
//     // const categories = await getCategoriesQuery();
//     // console.log(data)
//     console.log("test static props")
//     // console.log(categories)
//     // console.log(categories[0].attributes.Nazwa)
//     return {
//         props: {
//             // categories,
//         },
//         revalidate: 10, // In seconds
//     };
// }
//

