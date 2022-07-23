import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Inputs, validation } from './validation'

const useLocalForm = () => {
  const form = useForm<Inputs>({ resolver: yupResolver(validation) })

  const onSubmit: SubmitHandler<Inputs> = () => {
    toast.success('Form sent successfully')
    form.reset()
  }

  return { ...form, onSubmit }
}

export default useLocalForm
