import React from 'react'

const useVisibility = (initialState = false) => {
  const [visible, setVisile] = React.useState(initialState)

  const show = React.useCallback(() => {
    setVisile(true)
  }, [])

  const hide = React.useCallback(() => {
    setVisile(false)
  }, [])

  const toggle = React.useCallback(() => {
    setVisile(prev => !prev)
  }, [])

  return {
    visible,
    show,
    hide,
    toggle
  }
}

export default useVisibility
