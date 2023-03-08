import {gql} from "@apollo/client";

export const CATEGORIES_ALL = gql`
          {
            categories {
                data {
                    id
                    attributes {
                        Nazwa
                        Link
                    }
                }
            }
        }
`;