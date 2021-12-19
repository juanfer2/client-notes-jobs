import { gql } from '@apollo/client'

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $description: String!
  ){
    createProject(
      ProjectInput: {
        title: $title, 
        description: $description
      }
    ){
    title
      description
    }
  }
`
export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $title: String!
    $description: String!
  ){
    updateProject(
      ID: $id
      ProjectInput: { title: $title, description: $description }
    ) {
      title
      description
    }
  }
`
