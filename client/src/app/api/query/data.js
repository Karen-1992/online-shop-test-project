import { gql } from "@apollo/client";

export const API = gql`
    query {
        currencies {
            label,
            symbol
        },

        categories {
            name
        },

        category {
            name,
            products {
                id,
                name,
                inStock,
                gallery,
                description,
                category,
                attributes {
                    id,
                    name,
                    type,
                    items {
                    displayValue,
                    id,
                    value
                    }
                },
                prices {
                    currency {
                        label,
                        symbol
                    }
                    amount
                },
                brand
            }
        }
    }
`

// categories {
//     name
    // products {
    //     id,
    //     name,
    //     inStock,
    //     gallery,
    //     description,
    //     category,
    //     attributes {
    //         id,
    //         name,
    //         type,
    //         items {
    //             displayValue,
    //             id,
    //             value
    //         }
    //     },
    //     prices {
    //         currency {
    //             label,
    //             symbol
    //         }
    //         amount
    //     }
    //     brand
    // }
// },