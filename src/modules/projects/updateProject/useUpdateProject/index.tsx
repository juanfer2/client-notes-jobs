import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

import Client from '../../../../services/graphqlService/graphql.service'
import { UPDATE_PROJECT } from '../../../../graphql/projects/mutations'
import { PROJECT_BY_ID } from '../../../../graphql/projects/queries'


/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'
import { useNotification } from '../../../../hooks/useNotification';
import { useDetailsProject } from '../../detailsProject/useDetailsProject';

export type ProjectType = {
  title: string
  description: string
}

export const useUpdateProject = (initialValues: ProjectType, id: any) => {
  const { showNotification } = useNotification()
  let navigate = useNavigate();
 
  const formik =  useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        await Client.mutate({ mutation: UPDATE_PROJECT, variables: {...values, id: id} })
        showNotification({placement: 'bottomLeft', type: 'success', message: 'Project Update!'})
        navigate(`/dashboard`);
      } catch (error) {
       console.log(error) 
       showNotification({placement: 'bottomLeft', type: 'error', message: 'error'})
      }
    },
  })

  return { formik }
}
