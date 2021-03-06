import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

import Client from '../../../../services/graphqlService/graphql.service'
import { CREATE_QUERY_SCRIPTS } from '../../../../graphql/query_scripts/mutations'

/* Formik */
import { useFormik, getIn } from 'formik'
import { validationSchema } from './validationSchema'
import { useNotification } from '../../../../hooks/useNotification';

export type ScriptType = {
  title: string
  type: string
  content: string
}

export type QueryScriptType = {
  title: string
  description: string
  projectId: number | null
  scripts: ScriptType[]
}

export const useCreateQueries = () => {
  const { showNotification } = useNotification()
  let navigate = useNavigate();
  const params: any = useParams();
  const projectId = parseInt(params.id)
  const initialState: QueryScriptType = {
    title: '',
    description: '',
    projectId,
    scripts: [{title: "", type: "", content: ""}]
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: async (values) => {
      try {
        await Client.mutate({
          mutation: CREATE_QUERY_SCRIPTS,
          variables: values
        })
        showNotification({placement: 'bottomLeft', type: 'success', message: 'Queries Created!'})
        navigate(`/dashboard/projects/${projectId}`);
      } catch (error) {
       console.log(error) 
       showNotification({placement: 'bottomLeft', type: 'error', message: 'error'})
      }
    },
  })

  const addScript = () => {
    const { setValues, values } = formik
    let scriptsArray: ScriptType[] = values.scripts
    scriptsArray.push({title: "", type: "", content: ""})
    setValues({...values, scripts: scriptsArray})
  }

  return { formik, addScript }
}
