import React from 'react'
import styles from "../todolist.module.css"

interface IProps {
  value: string
  onSubmit: (event: any) => void
  onChange: (event: { target: HTMLInputElement }) => void
}

enum ERROR_MESSAGE {
  NONE = "",
  EMPTY = "Empty task"
}

const AddForm = React.forwardRef((props: IProps, ref: any) => {
  const { value, onSubmit, onChange } = props

  const [errorMessage, setErrorMessage] = React.useState<string>("")

  const handleSubmit = (event: any) => {
    if (!value) {
      event.preventDefault()
      setErrorMessage(ERROR_MESSAGE.EMPTY)
      return
    }
    onSubmit(event)
    setErrorMessage(ERROR_MESSAGE.NONE)
  }

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <div className={styles.textField}>
        <label htmlFor='text-field-task'>Task Name</label>
        <input type="text" autoComplete='off' id="text-field-task" placeholder="Enter your task" ref={ref} value={value} onChange={onChange} />
        {errorMessage && <p className={styles.errorMessage}>Empty task</p>}
      </div>
      <button>ADD</button>
    </form>
  )
})

export default AddForm