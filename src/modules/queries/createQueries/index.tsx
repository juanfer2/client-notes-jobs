import React from 'react'
import { CopyBlock, dracula  } from "react-code-blocks";
import { useCreateQueries } from './useCreateQueries'
/** Material-UI */
import { Input, Button  } from 'antd';


function QueriesModule() {
  const { formik } = useCreateQueries()
  const { TextArea } = Input;

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
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Title" 
          />
          { touched.title && errors.title && <span> {errors.title} </span> }
        </div>

        <div>
          <TextArea  
          rows={2}
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Description" 
          />
          { touched.description && errors.description && <span> {errors.description} </span> }
        </div>

        <Button
          type="primary"
          htmlType="submit"
        >
          Create Query
        </Button>
      </form>
    </div>
  )
}

export default QueriesModule
