import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

export type QueryScriptType = {
  title: string
  description: string
  projectId: number | null
}

export const useCreateQueries = () => {
  let navigate = useNavigate();
  const params: any = useParams();
  const initialState: QueryScriptType = {
    title: '',
    description: '',
    projectId: parseInt(params.id)
  }
  const [state, setState] = useState<QueryScriptType>(initialState)

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: state,
    onSubmit: async (values) => {
      console.log(values)
      // navigate(`/dashboard`);
    },
  })

  return { state, formik }
}
