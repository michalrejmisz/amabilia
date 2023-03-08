import {NextPageWithLayout} from "./_app";
import {useViewportSize} from "@mantine/hooks";
import {Fragment} from "react";
import {Container, createStyles, Grid} from "@mantine/core";
import {Layout} from "../Layout/Layout";
import {CheckoutStepper} from "../components/Checkout/CheckoutStepper"
import { ParsedUrlQuery } from 'querystring';
import { initializeApollo, addApolloState } from "@/lib/apolloClient";
import {useRouter} from "next/router";
import {useContext, createContext} from 'react';
import {PRODUCT_BY_SLUG} from "@/lib/graphql/products";
import {ICategory} from "../interfaces/Categories";
import {IProduct} from "../interfaces/Products";
// import {ProductComponent}  from '../../components/Product/ProductComponent';
import {GetServerSideProps} from 'next';

interface IParams extends ParsedUrlQuery {
    slug: string
}


const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 80px)",
        [theme.fn.smallerThan('sm')]: {
            minHeight: 'calc(100vh - 80px - 64px)',
        },
    },
}));


const checkout: NextPageWithLayout = () => {
    const { classes } = useStyles();
    // const product = useContext(Context) as IProduct;

    return(
        <Fragment>
            <Container size={'xl'} className={classes.wrapper}>
                <CheckoutStepper/>
            </Container>
        </Fragment>
    );
}

export default checkout;

checkout.getLayout = function getLayout(page: React.ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    );
}


