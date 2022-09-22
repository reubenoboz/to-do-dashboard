import React from "react";
import styles from "./avatar.module.css";

type AvatarT = {
  img: string;
};

const Avatar = ({ img }: AvatarT) => {
  return (
      <img className={styles.avatar} src={img} alt="Avatar" />
  );
};

export default Avatar;
