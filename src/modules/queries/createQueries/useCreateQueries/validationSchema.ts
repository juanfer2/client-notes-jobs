import { string, object, number, SchemaOf, array } from 'yup'

export const validationSchema = object({
  title: string()
    .required('Este campo es requerido'),
  projectId: number()
    .required('Este campo es requerido'),
    scripts: array()
    .of(
      object().shape({
        title: string().required('Este campo es requerido'),
        content: string().required('Este campo es requerido')
      })
    )
    // .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
    // .min(3, 'Minimum of 3 friends'),
})
