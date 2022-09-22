import React from "react";
import {ReactComponent as Dashboard} from "../../assets/img/dashboard.svg";
import {ReactComponent as Group3} from "../../assets/img/group3.svg";
import {ReactComponent as Group4} from "../../assets/img/group4.svg";
import {ReactComponent as Settings} from "../../assets/img/settings.svg";
import {ReactComponent as Group6} from "../../assets/img/group6.svg";
import {ReactComponent as FileUpload} from "../../assets/img/file-upload.svg";
import Logo from "../../assets/img/logo.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src={Logo} alt="logo" />
        <span className={styles.logoName}>TO-DO</span>
      </div>

      <div className={styles.linkContainer}>
        <span className={`${styles.link} ${styles.active}`}><Dashboard className={styles.linkImage} /></span>
        <span className={styles.link}><Group3 className={styles.linkImage}  /></span>
        <span className={styles.link}><Group4 className={styles.linkImage}  /></span>
        <span className={styles.link}><Settings className={styles.linkImage}  /></span>
        <span className={styles.link}><Group6 className={styles.linkImage}  /></span>
        <span className={styles.link}><FileUpload className={styles.linkImage}  /></span>
      </div>
    </div>
  );
};

export default Navbar;