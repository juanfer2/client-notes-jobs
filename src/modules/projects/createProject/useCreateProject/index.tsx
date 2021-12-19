import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

import Client from '../../../../services/graphqlService/graphql.service'
import { CREATE_PROJECT } from '../../../../graphql/projects/mutations'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'
import { useNotification } from '../../../../hooks/useNotification';

export type ProjectType = {
  title: string
  description: string
}

export const useCreateProject = () => {
  const { showNotification } = useNotification()
  let navigate = useNavigate();
  const params: any = useParams();
  const projectId = parseInt(params.id)
  const initialState: ProjectType = {
    title: '',
    description: ''
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: async (values) => {
      try {
        await Client.mutate({ mutation: CREATE_PROJECT, variables: values })
        showNotification({placement: 'bottomLeft', type: 'success', message: 'Project created!'})
        navigate(`/dashboard`);
      } catch (error) {
       console.log(error) 
       showNotification({placement: 'bottomLeft', type: 'error', message: 'error'})
      }
    },
  })

  return { formik }
}
