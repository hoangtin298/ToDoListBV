import React from 'react'
import { ITask } from '../todolist'
import styles from "../todolist.module.css"

interface IProps {
  task: ITask,
  onCheck: (index: number) => void
  index: number
}

const ListItem = (props: IProps) => {
  const { task, index, onCheck } = props
  return (
    <div className={styles.listItem} onClick={() => onCheck(index)}>
      <input type="checkbox" checked={task.status} readOnly />
      <label className={`${task.status ? styles.done : ""}`}>{task.name}</label>
    </div>
  )
}

export default ListItem