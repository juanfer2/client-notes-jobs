import { string, object, number, SchemaOf } from 'yup'

export const validationSchema = object({
  username: string()
    .required('Este campo es requerido'),
  password: string()
    .required('Este campo es requerido')
})
