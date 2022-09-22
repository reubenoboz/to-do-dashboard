import React from 'react'
import styles from './dashboard.module.css'
import {ReactComponent as VerEllipses} from '../../assets/img/vertical-ellipsis.svg'
import ProgressBar from '../progress-bar'
import ActionPopover from './action-popover'

type TaskT = {
    name: string;
    startDate: string;
    endDate: string;
    hours: number;
    progress: number
}

type DataT = {
    data: Array<TaskT>
}

const Task = ({data}: DataT) => {
  return (
    <div className={styles.tableContainer}>
        <div className={styles.tableHeading}>
          <h2>Task</h2>
          <div></div>
        </div>
        <table>
          <thead>
            <tr>
            <th>Name Of Task</th>
            <th>Start date</th>
            <th>End Date</th>
            <th>Hours</th>
            <th colSpan={2}>Progress</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.hours}</td>
                <td colSpan={2}><ProgressBar status={row.progress} /></td>
                <td><ActionPopover /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Task