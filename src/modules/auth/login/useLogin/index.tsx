import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { loginUser } from '../../../../flux/actions/auth/login.action'

/** Types */
import { LoginType, useLoginType } from '../../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: LoginType = {
  username: 'juanfer',
  password: 'asdqwe123',
}

export const useLogin = (): useLoginType => {
  const dispatch = useDispatch()
  const [state, setState] = useState<LoginType>(initialState)
  let navigate = useNavigate();

  const handleState = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = () => {
    console.log(state)
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: async (values) => {
      const startLoginUser = (user: any) => dispatch(loginUser(user))
      await startLoginUser(values)
      navigate(`/dashboard`);
    },
  })

  return { state, handleState, sendData, formik }
}
