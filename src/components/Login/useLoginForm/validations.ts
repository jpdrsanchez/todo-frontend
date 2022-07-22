import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required('Username field is required'),
  password: yup.string().required('Password field is required')
})

export default schema
