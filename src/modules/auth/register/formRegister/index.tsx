import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

/** Material-UI */
import { Input, Button } from 'antd';

function FormRegister({
  formik,
  onSubmit,
}: InferProps<typeof FormRegister.propTypes>) {
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
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Basic usage" 
          />
          { touched.name && errors.name && <span> {errors.name} </span> }
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

        <div>
          <Input 
          name="passwordConfirmation"
          type="password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Basic usage" 
          />
          { touched.passwordConfirmation && errors.passwordConfirmation && <span> {errors.passwordConfirmation} </span> }
        </div>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => onSubmit()}
        >
          Register
        </Button>
      </form>
    </div>
  )
}

FormRegister.propTypes = {
  formik: PropTypes.any.isRequired,
  onSubmit: PropTypes.any.isRequired,
}

export default FormRegister
