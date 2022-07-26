import React, { useReducer, useRef } from 'react'
import AddForm from './components/addForm'
import List from './components/list'
import ListItem from './components/listItem'
import reducer, { initialState } from './reducer'
import { changeTask, checkTask, submitTask } from './reducer/actions'
import styles from "./todolist.module.css"

export interface ITask {
  name: string,
  status: boolean
}

const TodoListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { task, tasks } = state

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: { target: HTMLInputElement }) => {
    dispatch(changeTask(event.target.value))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    dispatch(submitTask(state.task.name))
    dispatch(changeTask(''))
    inputRef.current?.focus()
  }

  const handleCheck = (index: number) => {
    dispatch(checkTask(index))
  }

  return (
    <div className={styles.container}>
      <h1>To Do List Reducer</h1>
      <div className={styles.table}>
        <AddForm ref={inputRef} value={task.name} onChange={handleChange} onSubmit={handleSubmit} />
        <List>
          <>
            {tasks.map((task, index) => {
              return (
                <ListItem key={index} task={task} index={index} onCheck={handleCheck} />
              )
            })}</>
        </List>
      </div>
    </div>
  )
}

export default TodoListReducer