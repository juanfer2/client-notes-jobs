import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation register(
    $username: String!, 
    $name: String!, 
    $password: String!) {
    register(userInput: {
      username: $username
      name: $name
      password: $password}) {
      id
      username
      name
      token
    }
  }
`
