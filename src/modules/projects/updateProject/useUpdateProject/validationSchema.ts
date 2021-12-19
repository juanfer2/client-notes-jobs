import { string, object, number, SchemaOf, array } from 'yup'

export const validationSchema = object({
  title: string().required('Este campo es requerido'),
  description: string().required('Este campo es requerido')
})
