import React, { ReactNode } from 'react'
import styles from "../todolist.module.css"

interface IProps {
  children: React.ReactElement
}

const List = (props: IProps) => {
  const { children } = props
  return <div className={styles.listWrapper}>
    {children}
  </div>
}

export default List