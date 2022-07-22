import React from 'react'
import toast from 'react-hot-toast'
import * as S from './styles'

interface AddItemProps {
  onSubmit: (title: string) => Promise<void>
}

const AddItem = (props: AddItemProps) => {
  const [value, setValue] = React.useState('')

  return (
    <S.Item>
      <S.CheckItem />
      <S.InputItem
        onSubmit={e => {
          e.preventDefault()
          if (value.length < 2)
            toast.error('The title must be at least 2 characters long')
          else props.onSubmit(value)
        }}
      >
        <input
          type="text"
          placeholder="Add new item..."
          value={value}
          onChange={({ target }) => {
            setValue(target.value)
          }}
        />
      </S.InputItem>
    </S.Item>
  )
}
export default AddItem
