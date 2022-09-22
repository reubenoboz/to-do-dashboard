import React, { useState } from "react";
import { ReactComponent as VerEllipses } from "../../../assets/img/vertical-ellipsis.svg";
import { Popover } from "react-tiny-popover";
import styles from './action-popover.module.css'

const ActionPopover = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Popover
        isOpen={open}
        padding={1}
        onClickOutside={() => setOpen(false)}
        positions={["bottom"]}
        content={<div className={styles.contentContainer} >
            <div>Complete</div>
            <div>Edit</div>
            <div>Delete</div>
        </div>}
      >
        <div className={styles.ellipsis} onClick={handleClick}>
          <VerEllipses />
        </div>
      </Popover>
    </div>
  );
};

export default ActionPopover;
