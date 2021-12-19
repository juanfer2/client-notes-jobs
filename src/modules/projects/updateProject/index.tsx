import React from 'react'
import { useUpdateProject } from "./useUpdateProject"

/** Material-UI */
import { Input, Button  } from 'antd';
import FormProject from '../formProject';
import { useDetailsProject } from '../detailsProject/useDetailsProject';


function UpdateProject() {
  const { loandingProject, error, project }: 
    { loandingProject: boolean, error: any, project: any } = useDetailsProject()
  const {title, description} = project
  const { formik } = useUpdateProject({title, description}, project.id);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit} = formik

  if (loandingProject) return <div>Loanding...</div>
  if (error) return <div>error</div>

  return (
    <div>
      <h3>Update Project</h3>
      <FormProject values={values} handleSubmit={handleSubmit} 
        handleChange={handleChange} handleBlur={handleBlur} 
        touched={touched} errors={errors} nameButton="Update project"/>
    </div>
  )
}

export default UpdateProject
