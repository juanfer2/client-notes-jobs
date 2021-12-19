import { useState, useEffect } from 'react'
import Client from '../../../services/graphqlService/graphql.service'
import { PROJECTS } from '../../../graphql/projects/queries'

export const useProjects = () => {
  const [state, setState] = useState<any>({
    loandingProjects: false,
    error: null,
    projects: []
  })

  const getProjects = async() => {
    try {
      setState({...state, loandingProjects: true, error: null, projects: [] })

      const response = await Client.query({
        query: PROJECTS,
      })

      setState({...state, loandingProjects: false, error: null,
        projects: response.data.projects })
    } catch (error) {
      console.log(error)
      setState({...state, loandingProjects: false, error: error,
        projects: [] })
    }
  }

  useEffect(() => {
    getProjects()
  }, [])
  

  return state;
}
