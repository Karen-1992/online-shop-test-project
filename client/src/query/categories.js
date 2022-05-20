import { gql } from "@apollo/client";

export const CATEGORIES = gql`
query {
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
    }
}
`