import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Inputs } from './types'
import schema from './validations'
import useAuth from 'hooks/useAuth'
import { useRouter } from 'next/router'

const useLoginForm = (callback: () => void) => {
  const auth = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = React.useCallback(
    async data => {
      await auth.login({ username: data.username, password: data.password })
      callback()
      router.push('/')
    },
    [auth, callback, router]
  )

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting
  }
}

export default useLoginForm
