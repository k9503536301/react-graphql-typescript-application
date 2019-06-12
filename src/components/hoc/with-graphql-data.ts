import { graphql } from "react-apollo/index";
import gql from "graphql-tag";

import { InputProps } from '../../types';


const repoQuery = gql`
    query ($name: String!){
      search (query: $name, first:10, type: USER) {
         edges {
            node {
              ... on User {
                login
                name
                location
                bio
                avatarUrl
                id
                url
              }
            }
         }
      }
}
`;

export const withGraphQLData = graphql<InputProps, Response>(
    repoQuery,
    {
        options: ({location}) => ({
            variables: {
                name: `location:"${location}"`
            }
        })
    }
);

