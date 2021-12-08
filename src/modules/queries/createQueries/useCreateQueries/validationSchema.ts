import { string, object, number, SchemaOf } from 'yup'

export const validationSchema = object({
  title: string()
    .required('Este campo es requerido'),
  projectId: number()
    .required('Este campo es requerido')
})
