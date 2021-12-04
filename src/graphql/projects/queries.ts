import { gql } from '@apollo/client'

export const PROJECTS = gql`
  query{
    projects{
      id
      title
      description
      queryScripts{
        id
        title
        scripts{
          id
          title
          content
        }
      }
    }
  }
`

export const PROJECT_BY_ID = gql`
query projectById($id: Int!) {
	projectById(ID: $id) {
		id
		title
		description
		queryScripts {
			id
			title
			scripts {
				id
				title
				content
			}
		}
	}
}

`

