import React from 'react'
import styles from './dashboard.module.css'
import Summary from './summary'
import Task from './task'
import TaskDone from './task-done/task-done'



const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Summary />
      <TaskDone />
      <Task data={data} />
    </div>
  )
}

export default Dashboard

const data = [
  {
    name: "User journey of the project",
    startDate: "Jan 1, 2022",
    endDate: "Jan 31, 2022",
    progress: 60,
    hours: 80
  },
  {
    name: "Wireframing the project",
    startDate: "Feb 1, 2022",
    endDate: "Feb 28, 2022",
    progress: 60,
    hours: 80
  },
  {
    name: "User interface design",
    startDate: "March 1, 2022",
    endDate: "March 31, 2022",
    progress: 40,
    hours: 80
  }
]