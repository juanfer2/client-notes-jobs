import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from '../../../../flux/actions/auth/register.action'

/** Types */
import { RegisterType, useRegisterType } from '../../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'
import { useNotification } from '../../../../hooks/useNotification';

const initialState: RegisterType = {
  username: 'jfvilladiego3@gmail.com',
  name: 'sdf',
  password: 'asdqwe123',
  passwordConfirmation: 'asdqwe123',
}

export const useRegister = (): useRegisterType => {
  const { showNotification } = useNotification()
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const [state, setState] = useState<RegisterType>(initialState)

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
    onSubmit: (values: any) => {
      try {
        const registerUser = (user: any) => dispatch(RegisterUser(user))
        registerUser(values)
        showNotification({placement: 'bottomLeft', type: 'success', message: 'User Register!'})
        navigate(`/`);
      } catch (error) {
        showNotification({placement: 'bottomLeft', type: 'error', message: 'error'})
      }
    },
  })

  return { state, handleState, sendData, formik }
}
