import { useRouter } from 'next/router';
import {IProduct} from "../../interfaces/Products"
import React from 'react';
import {
        Grid,
        Image,
        Title,
        Paper,
        Text,
        Button,
        createStyles,
        useMantineTheme,
        MantineTheme,
} from '@mantine/core';
import {useState} from 'react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: "50px",
    },

    imagesColumn: {
        margin: "0 auto",
        alignItems: 'center',
        textAlign: 'center',
    },

    description: {
        marginTop: "25px",
        marginLeft: "50px",
        textAlign: "left",
        borderBottom: `${theme.colors[theme.primaryColor][2]} 1px solid`,
        borderRadius: 0,
        paddingBottom: '10px',
    },

    primaryImageWrapper: {
        padding: "3px",
        width: '500px',
        height: '500px',
        // maxHeight: "500px",
        // maxWidth: "500px",
        // maxHeight: '500px',
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        // float: "left",
        alignItems: 'center',
        justifyContent: 'center',


        border: `${theme.colors[theme.primaryColor][2]} 1px solid`,
        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            width: 'auto',
            height: 'auto',
            minHeight: '350px',
        },
    },

    image: {
        width: "100%",
        height: "auto",
        // maxWidth: "500px",
        // maxHeight: "500px",
        objectFit: "contain",
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex',
    },

    text: {
        marginTop: '10px',
    },

    thumbnails: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        // margin: '10px',
        margin: '0 auto',
        width: "500px",
        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            width: 'auto',
            height: 'auto',
        },
    },

    thumbnail: {
        padding: '3px',
        margin: '5px',
        float: "left",
        width: "100px",
        maxWidth: "100px",
        maxHeight: "100px",
        height: "100px",
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `${theme.colors[theme.primaryColor][2]} 1px solid`,
    },

    cartButton: {
        height: '40px',
        width: '150px',
    }
}));

interface ImageSrc {
    imgLink: string;
    // alt?: string;
}

// const images: React.FC<{ product : IProduct}>  = ({product}) => {
//     if(product.images.length > 0){
//         console.log("INSDIE IMAGES")
//         product.images.map((image) => (console.log("Images "+images)));
//     }else{
//         console.log("INSIDE BREAK");
//     };
// };


export const ProductComponent: React.FC<{ product : IProduct}>  = ({product}) => {

    const { classes } = useStyles();
    const theme = useMantineTheme();
    const thumb = "/images/no-thumb.png";
    let imagesArray: string[] = [];


    if (product?.imagePrimary?.mediaItemUrl != null){
        imagesArray = [product.imagePrimary.mediaItemUrl, ...imagesArray];
    }

    if(product.images != null){
        product?.images?.map((img) => {imagesArray = [...imagesArray, img.mediaItemUrl]})
    }
    if(imagesArray.length === 0){
        imagesArray = [thumb]
    }

    const [primaryImage, setPrimaryImage] = useState(imagesArray[0])
    const handlePrimaryPhotoChange = (value: string) => {
        setPrimaryImage(value);
    }
    const thumbnails = imagesArray.map((image, index) => {
        return(
            <div className={classes.thumbnail} key={index}>
                <Image src={`${image}`} onClick={() => handlePrimaryPhotoChange(image)} className={classes.image}/>
            </div>
        )
    })

    return (
       <div>
           <Grid>
               <Grid.Col span={12} xs={6} sm={6} className={classes.imagesColumn}>
                   <div className={classes.thumbnails}>
                       <div className={classes.primaryImageWrapper} >
                           <Image src={primaryImage} alt={product?.imagePrimary?.altText} className={classes.image}></Image>
                       </div>
                   </div>
                       <div className={classes.thumbnails}>
                           {/*{images}*/}
                           {thumbnails}
                       </div>
               </Grid.Col>
               <Grid.Col span={12} xs={6} sm={6}>
                   <Paper ml={"50px"} className={classes.description}>
                       <Title color={theme.colors[theme.primaryColor][6]}>{product.title}</Title>
                       <Title color={theme.colors[theme.primaryColor][3]}>{product.price} z??</Title>
                       <Text className={classes.text}>Kategoria: {product.categoryId}</Text>
                       <Text className={classes.text}>Dost??pno????: dost??pny</Text>
                       <Text className={classes.text}>Marka: dost??pny</Text>
                   </Paper>
                       <Button className={classes.cartButton}>Dodaj do koszyka</Button>
               </Grid.Col>
           </Grid>
       </div>
    );
}