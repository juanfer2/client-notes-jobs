import React from 'react'
import { useCreateProject } from "./useCreateProject"

/** Material-UI */
import { Input, Button  } from 'antd';
import FormProject from '../formProject';

function CreateProject() {
  const { formik } = useCreateProject()

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik

  return (
    <div>
      <h3>Create Project</h3>
      <FormProject values={values} handleSubmit={handleSubmit} 
        handleChange={handleChange} handleBlur={handleBlur} 
        touched={touched} errors={errors} nameButton="Create project"/>
    </div>
  )
}

export default CreateProject
