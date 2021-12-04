import { useState, useEffect } from 'react'
import Client from '../../../../services/graphqlService/graphql.service'
import { PROJECT_BY_ID } from '../../../../graphql/projects/queries'

export const useDetailsProject = () => {
  const [state, setState] = useState<any>({
    loandingProject: false,
    error: null,
    project: {}
  })

  const getProjectById = async() => {
    try {
      setState({...state, loandingProject: true, error: null, project: {} })

      const response = await Client.query({
        query: PROJECT_BY_ID,
        variables: { id: 1 }
      })

      console.log('response.data')
      console.log(response)

      setState({...state, loandingProject: false, error: null,
        project: response.data.projectById })
    } catch (error) {
      console.log(error)
      setState({...state, loandingProject: false, error: error,
        project: {} })
    }
  }

  useEffect(() => {
    getProjectById()
  }, [])
  

  return state;
}
