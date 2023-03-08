import {gql} from "@apollo/client";

export const PRODUCTS_ALL = gql`
query GetProducts{
    produkties{
    data {
        attributes {
            Nazwa
            Opis
            Link
            Cena
            Zdjecie_glowne {
                data {
                    attributes {
                        url
                        name
                    }
                }
            }
            Zdjecia {
                data {
                    attributes {
                        name
                    }
                }
            }
            kategoria {
                data {
                    attributes {
                        Nazwa
                        Link
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
}
}`;

export const PRODUCTS_BY_CATEGORY = gql`
query GetProductsByCategory($filters: ProduktyFiltersInput){
    produkties(filters: $filters){
    data {
        attributes {
            Nazwa
            Opis
            Link
            Cena
            Zdjecie_glowne {
                data {
                    attributes {
                        url
                        name
                        formats
                    }
                }
            }
            Zdjecia {
                data {
                    attributes {
                        url
                        name
                        formats
                    }
                }
            }
            kategoria {
                data {
                    attributes {
                        Nazwa
                        Link
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
}
}`;


export const PRODUCTS_ALL2 = gql`
query Produkty($Link: ID!){
  Produkty(Link: $Link) {
        Link
        Cena
  }
}`

export const PRODUCT_BY_SLUG = gql`
query GetProductsByCategory($slug: String){
    produkties(filters: {Link: {eq: $slug}}){
        data {
            attributes {
                Nazwa
                Opis
                Link
                Cena
                Zdjecie_glowne {
                    data {
                        attributes {
                            url
                            name
                        }
                    }
                }
                Zdjecia {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                kategoria {
                    data {
                        attributes {
                            Nazwa
                            Link
                        }
                    }
                }
                createdAt
                updatedAt
            }
        }
    }
}
`;


// (filters: {kategoria: {Link: {eq: "krzeslo-1"}}})