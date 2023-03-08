import {SingleProductCard} from "./SingleProductCard";
import {SearchBar} from "./SearchBar/SearchBar";
import {
    Grid,
} from '@mantine/core';
import {IProduct} from "../../../interfaces/Products";
import {useQuery} from "@apollo/client";
import {PRODUCTS_ALL, PRODUCTS_ALL2, PRODUCTS_BY_CATEGORY} from "../../../lib/graphql/products";
import {ICategory} from "../../../interfaces/Categories";

interface Props{
    categories?: ICategory[];
    products?: IProduct[];
    slug?: string;
    data: any;
}

const ProductsGrid = ({data}: Props) => {

    // const otherImages = product?.attributes?.Zdjecia?.data?.map((img) => {
    //     return{
    //         mediaItemUrl: process.env.STRAPI_UPLOAD_FOLDER+img.attributes.url
    //     }
    // })

    return(
        <Grid style={{marginBottom: "30px"}}>
            <Grid.Col span={12}><SearchBar/></Grid.Col>
            {data?.produkties?.data?.map((product: { attributes: { Nazwa: string, Cena: number, Link: string, Zdjecie_glowne?: { data?: { attributes?: { url: string } } } } }) => (
                <Grid.Col span={12} xs={6} md={4} key={product.attributes.Link}>
                    <SingleProductCard key={product.attributes.Link}
                                       product={{
                                           title: product.attributes.Nazwa,
                                           price: product.attributes.Cena ,
                                           slug: product.attributes.Link,
                                           imagePrimary: {
                                               mediaItemUrl: `${process.env.STRAPI_UPLOAD_FOLDER}${product?.attributes?.Zdjecie_glowne?.data?.attributes?.url || "/uploads/no-thumb.png"}`
                                           },
                                           images: product.attributes.Zdjecia,
                                        }}/>
                </Grid.Col>
            ))}
        </Grid>
    );
}

export default ProductsGrid;