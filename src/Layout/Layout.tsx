import {useState, useEffect} from 'react';
import React from 'react';
import {ReactNode} from 'react';
import {MantineProvider, Container} from "@mantine/core";
import {HeaderMenuColored} from "@/components/Header/HeaderMenuColored";
import Footer from "../components/Footer/Footer";
import {MobileFooter} from "../components/Footer/MobileFooter";
import {ApolloProvider, useQuery, gql, ApolloClient, InMemoryCache} from "@apollo/client";
// import {GET_PRODUCTS} from "../utils/apollo-client";
import {LoadingScreen} from "../components/UI/LoadingScreen/LoadingScreen";
import {SideCart} from "@/components/SideCart/SideCart";
// import {Switch} from 'next/router';


const links = [
    {"link": "/", "label": "Home"},
    {"link": "/about", "label": "O nas"},
    {"link": "/map", "label": "Dojazd"},
    {"link": "/products/biurka", "label": "Produkty"},
];

type Props = {
    children: React.ReactNode
}



export const Layout = ({children} : Props) => {
    const [scrollTop, setScrollTop] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleCartClick = () => {
        setIsCartVisible(!isCartVisible)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setScrollTop(false)
            } else {
                setScrollTop(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // if (document.readyState === 'complete') {
        //     setIsLoading(false)
        // }

        if (typeof window !== 'undefined') {
            setIsLoading(false)
        }
    }, []);


    return(
        <MantineProvider
            theme={{
                primaryColor: 'blue',
                breakpoints: {
                    xs: 576,
                    sm: 768,
                    md: 992,
                    lg: 1200,
                    xl: 1400,
                },
            }}
        >
            <LoadingScreen isLoading={isLoading}>
                <HeaderMenuColored links={links} transparent={scrollTop} onClickCart={handleCartClick}/>
                <SideCart opened={isCartVisible}/>
                    {children}
                <Footer/>
                <MobileFooter/>
            </LoadingScreen>
        </MantineProvider>
    );
}