import React from 'react'

/** Types */
import { LoginType } from '../../../types/modules/auth'

/** CustomHooks */
import { useLogin } from './useLogin'

/** Material-UI */
import { Input, Button } from 'antd';

function Login() {
  const {
    state,
    handleState,
    sendData,
    formik,
  }: {
    state: LoginType
    handleState: Function
    sendData: Function
    formik: any
  } = useLogin()

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik

  return (
    <div >
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div>
          <Input 
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Basic usage" 
          />
          { touched.username && errors.username && <span> {errors.username} </span> }
        </div>

        <div>
          <Input 
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Basic usage" 
          />
          { touched.password && errors.password && <span> {errors.password} </span> }
        </div>

        <Button
          type="primary"
          htmlType="submit"
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Login
