import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`

// const Categories = () => {
//     const { data, loading, error } = useQuery(GET_CATEGORIES);
//     useEffect(() => {
//         if (loading) {
//             console.error("loading");
//         }
//         if (error) {
//             console.error("data error");
//         }
//     }, [data]);
//     if (data) return data;
// };

// export default Categories;
