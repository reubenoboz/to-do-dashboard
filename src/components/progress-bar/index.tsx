import React from 'react'
import styles from "./progress.module.css"

type ProgressT = {
    status: number
}

const ProgressBar = ({status}: ProgressT) => {
  return (
    <div className={styles.progressContainer}>
        <div>{`${status}% complete`}</div>
        <div className={styles.progress}>
            <div className={styles.progressBar} style={{width: `${status}%`}}></div>
        </div>
    </div>
  )
}

export default ProgressBar