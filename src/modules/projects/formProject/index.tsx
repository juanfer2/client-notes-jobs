import React from 'react'
/** Material-UI */
import { Input, Button  } from 'antd';

type FormProjectType = {
  values: any
  handleSubmit: any
  handleChange: any
  handleBlur: any
  touched: any
  errors: any
  nameButton: string
}

function FormProject(
  { values, handleSubmit, handleChange, handleBlur, touched, errors, nameButton }: FormProjectType) {
  const { TextArea } = Input;

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
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

        <Button type="primary" htmlType="submit"> { nameButton } </Button>
      </form>
    </div>
  )
}

export default FormProject
