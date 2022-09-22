import React from "react";
import styles from "./header.module.css";
import MagnifyingLens from "../../assets/img/maginifyingLens.svg";
import Bell from "../../assets/img/bell.svg";
import CaretDown from "../../assets/img/caretDown.svg";
import Avatar from "../avatar";
import Image from '../../assets/img/placeholder.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          placeholder="Search anything..."
        />
        <img className={styles.searchIcon} src={MagnifyingLens} alt="" />
      </div>
      <div className={styles.moreOptions}>
        <div  className={styles.notificationContainer}>
        <img className={styles.notification} src={Bell} alt="" />
        <span className={styles.badge}>3</span>
        </div>
        <span className={styles.avatar}>
          {" "}
          <Avatar img={Image} />
        </span>
        <img className={styles.caretDown} src={CaretDown} alt="" />
      </div>
    </div>
  );
};

export default Header;
