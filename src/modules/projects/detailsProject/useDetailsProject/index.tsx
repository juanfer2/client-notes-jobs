import { useState, useEffect } from 'react'
import Client from '../../../../services/graphqlService/graphql.service'
import { PROJECT_BY_ID } from '../../../../graphql/projects/queries'
import { useParams } from "react-router-dom";

export const useDetailsProject = () => {
  const params: any = useParams();
  const id = parseInt(params.id)
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
        variables: { id }
      })

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
