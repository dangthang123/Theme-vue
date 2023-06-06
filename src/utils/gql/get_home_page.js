import gql from "graphql-tag";

const GET_DATA_HOME_PAGE = gql`
query {
  page(id: "cG9zdDo5Mg==") {
    homePage {
      fieldGroupName
      innovationForHealthyLiving {
        fieldGroupName
        title
        content {
          title
          content
          fieldGroupName
        }
      }
      sectionAboutTop {
        fieldGroupName
        firstTitle
        secondTitle
        image {
          sourceUrl
        }
      }
      whyChoseUs {
        content
        image {
          sourceUrl
        }
        fieldGroupName
      }
      sectionAboutBottom {
        fieldGroupName
        title
        content
        image {
          sourceUrl
        }
      }
    }
  }
}
`;
export default GET_DATA_HOME_PAGE;