import React, { useRef } from 'react'
import AddForm from './components/addForm'
import List from './components/list'
import ListItem from './components/listItem'
import styles from "./todolist.module.css"

export interface ITask {
  name: string,
  status: boolean
}

const TodoList = () => {
  const [task, setTask] = React.useState<ITask>({
    name: "",
    status: false
  })

  const [tasks, setTasks] = React.useState<Array<ITask>>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: { target: HTMLInputElement }) => {
    setTask({
      ...task,
      name: event.target.value
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setTasks([...tasks, task])
    setTask({
      ...task,
      name: ""
    })
    inputRef.current?.focus()
  }

  const handleCheck = (index: number) => {
    const newTasks = [...tasks]
    const newTask = { ...newTasks[index] }
    newTask.status = !newTask.status
    newTasks[index] = newTask
    setTasks([...newTasks])
  }

  return (
    <div className={styles.container}>
      <h1>To Do List</h1>
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

export default TodoList