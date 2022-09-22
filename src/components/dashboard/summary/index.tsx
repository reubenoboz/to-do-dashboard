import React from "react";
import styles from "./summary.module.css";
import { ReactComponent as Star } from "../../../assets/img/star.svg";
import { ReactComponent as GreenGraph } from "../../../assets/img/green-graph.svg";
import { ReactComponent as YellowGraph } from "../../../assets/img/yellow-graph.svg";
import { ReactComponent as RedGraph } from "../../../assets/img/red-graph.svg";
import { ReactComponent as Task } from "../../../assets/img/task.svg";
import { ReactComponent as Project } from "../../../assets/img/project.svg";

const Summary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.summaryCard}>
        <div className={styles.upper}>
          <div className={styles.heading}>
            <div className={styles.iconContainer}>
              <Star />
            </div>
            <div>Task Completed</div>
          </div>
          <div className={styles.count}>08</div>
        </div>
        <hr className={styles.horLine} />
        <div className={styles.lower}>
          <div className={styles.graph}>
            <GreenGraph />
          </div>
          <div className={styles.description}>
            <span className={styles.greenHighlight}>10+</span> more <br /> from last week
          </div>
        </div>
      </div>

      <div className={styles.summaryCard}>
      <div className={styles.upper}>
          <div className={styles.heading}>
            <div className={styles.iconContainer}>
              <Task />
            </div>
            <div>New Task</div>
          </div>
          <div className={styles.count}>10</div>
        </div>
        <hr className={styles.horLine} />
        <div className={styles.lower}>
          <div className={styles.graph}>
            <YellowGraph />
          </div>
          <div className={styles.description}>
            <span className={styles.greenHighlight}>10+</span> more <br /> from last week
          </div>
        </div>
      </div>

      <div className={styles.summaryCard}>
      <div className={styles.upper}>
          <div className={styles.heading}>
            <div className={styles.iconContainer}>
              <Project />
            </div>
            <div>Project Done</div>
          </div>
          <div className={styles.count}>10</div>
        </div>
        <hr className={styles.horLine} />
        <div className={styles.lower}>
          <div className={styles.graph}>
            <RedGraph />
          </div>
          <div className={styles.description}>
            <span className={styles.greenHighlight}>08+</span> more <br /> from last week
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
