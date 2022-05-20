import { gql } from "@apollo/client";

export const API = gql`
    query {
        currencies {
            label,
            symbol
        },

        categories {
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
                }
                brand
            }
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
        },

        

    }
`


// product(id:"jacket-canada-goosee") {
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
        //             value,
        //             id
        //         }
        //     },
        //     prices {
        //         currency {
        //             label,
        //             symbol
        //         },
        //         amount
        //     },
        //     brand
        // }