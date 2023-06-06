import gql from "graphql-tag";

const GET_DATA_MENU = gql`
  query {
    menu(id: "dGVybToz") {
      menuItems {
        nodes {
          id
          label
          url
          uri
        }
      }
    }
  }
`;
export default GET_DATA_MENU;