import * as yup from 'yup'

export const validation = yup.object({
  name: yup.string(),
  email: yup
    .string()
    .email('The email field is required')
    .required('The email field cannot be empty'),
  telephone: yup.string().required('The telephone field cannot be empty'),
  message: yup.string().required('The message field cannot be empty')
})

export interface Inputs extends yup.InferType<typeof validation> {}
