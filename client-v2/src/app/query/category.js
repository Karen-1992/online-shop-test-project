import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
    query category($input: CategoryInput) {
        category(input: $input) {
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