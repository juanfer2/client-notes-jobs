import React from 'react';
import { useCreateQueries } from './useCreateQueries';
import { getIn } from 'formik'
/** Material-UI */
import { Input, Button  } from 'antd';
import Editor from "@monaco-editor/react";

function QueriesModule() {
  const { formik, addScript } = useCreateQueries()
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
    setValues
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

        { values.scripts && <h4>Add scripts</h4> }
        {
          values.scripts && values.scripts.map( (script: any, index: number) => <div key={index}>
            {console.log(script)}
            <div>
              <Input 
              name={`scripts[${index}][title]`}
              value={script.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Title" 
              />
              { 
                getIn(touched, `scripts[${index}][title]`) && 
                getIn(errors, `scripts[${index}][title]`) &&
                <span> {getIn(errors, `scripts[${index}][title]`)} </span> }
            </div>

            <div>
              <Input 
              name={`scripts[${index}][type]`}
              value={script.type}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="type" 
              />
              { 
                getIn(touched, `scripts[${index}][type]`) && 
                getIn(errors, `scripts[${index}][type]`) && 
                <span> {getIn(errors, `scripts[${index}][type]`)} </span> 
              }
            </div>

            <div>
            <div>
              <Editor
                height="30vh"
                defaultLanguage="javascript"
                defaultValue={script.content}
                onChange={handleChange}
                theme='vs-dark'
              />
            </div>

            <TextArea  
              rows={2}
              name={`scripts[${index}][content]`}
              value={script.content}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Content" 
              />
              { 
                getIn(touched, `scripts[${index}][content]`) && 
                getIn(errors, `scripts[${index}][content]`) && 
                <span> {getIn(errors, `scripts[${index}][content]`)} </span> 
              }
            </div>
          </div>
          )
        }

        <Button
          type="dashed"
          onClick={() => addScript()}
        >
          append Query
        </Button>

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
