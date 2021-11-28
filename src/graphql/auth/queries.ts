import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  query login(
    $username: String!
    $password: String!
  ){
    login(loginInput: {
      username: $username,
      password: $password
    }){
      id
      username
      name
      token
    }
  }
`
