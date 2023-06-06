import gql from "graphql-tag";

const GET_DATA_PRODUCT = gql`
 query  {
  products {
    nodes {
      id
      name
      slug
      onSale
      ... on SimpleProduct {
        id
        name
        databaseId
        price
        onSale
        regularPrice
        salePrice
        description(format: RAW)
        shortDescription(format: RAW)
        reviewCount
        featuredImage {
          node {
            sourceUrl
          }
        }
        reviews {
          averageRating
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
      }
    }
  }
}
`;
export default GET_DATA_PRODUCT;