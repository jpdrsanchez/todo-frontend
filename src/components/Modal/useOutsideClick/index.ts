import React from 'react'

const useOutsideClick = (callback: () => void) => {
  const handleOutsideClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) callback()
    },
    [callback]
  )

  return { handleOutsideClick }
}

export default useOutsideClick
