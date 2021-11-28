import React from 'react'

/** Types */
import { RegisterType, useRegisterType } from '../../../types/modules/auth'

/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from '../../../flux/actions/auth/register.action'

/** CustomHooks */
import { useRegister } from './useRegister'

/** Material-UI */
import { Paper } from '@material-ui/core'
import FormRegister from './formRegister'

function Register() {
  const stateReducer: any = useSelector((state) => state)

  const {
    state,
    handleState,
    sendData,
    formik,
  }: {
    state: RegisterType
    handleState: Function
    sendData: Function
    formik: any
  } = useRegister()

  return (
    <div className="login">
      <Paper>
        <h2>Register</h2>
        <FormRegister formik={formik} onSubmit={sendData} />
      </Paper>
    </div>
  )
}

export default Register
