import gql from "graphql-tag";

const GET_DATA_ABOUT_PAGE = gql`
query {
    page(id: "cG9zdDoxMQ==") {
      about {
        abouttop {
          fieldGroupName
          image {
            sourceUrl
          }
          content
        }
        fieldGroupName
        aboutbottom {
          fieldGroupName
          title
          titlecontent
          team {
            fieldGroupName
            image {
              sourceUrl
            }
            name
            job
          }
        }
      }
    }
  }
`;
export default GET_DATA_ABOUT_PAGE;