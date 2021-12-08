import { gql } from '@apollo/client'

export const CREATE_QUERY_SCRIPTS = gql`
  mutation createQuery(
    $title: String, 
    $description: String, 
    $projectId: ID!
    $scripts: [ScriptInput]
  ) {
    createQueryScript(QueryScript: {
      title: $title
      description: $description
      projectId: $projectId
      scripts: $scripts
    }) {
      id
      title
      description
    }
  }
`
