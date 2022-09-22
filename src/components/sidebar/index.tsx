import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { ReactComponent as Task } from "../../assets/img/task.svg";
import { ReactComponent as Dashboard } from "../../assets/img/dashboard.svg";
import Avatar from "../avatar";
import { ReactComponent as HorEllipse } from "../../assets/img/horizontal-ellipsis.svg";
import Picker from "emoji-picker-react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Inputs = {
  title: string;
  startDate: string;
  endDate: string;
  hours: number;
};

const schema = yup.object().shape({
  title: yup.string().required('Title  is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string().required('End date is a required field'),
  hours: yup.string().required('Hours is a required field')
})

const Sidebar = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({resolver: yupResolver(schema),});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const values = watch()

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h3>Today’s Schedule</h3>
        <div className={styles.iconContainer}>
          <Dashboard className={styles.icons} />
          <Task className={styles.icons} />
        </div>
      </div>

      {/* New Task  */}
      <div>
        <h3 className={styles.newTaskHeading}>
          <span>New Task</span>
          <span>
            <HorEllipse />
          </span>
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInput}>
            <label>Task Title</label>
            <input
              {...register("title", { required: true })}
              placeholder="Create New"
            />
            {errors.title && (
              <span className={styles.error}>{errors.title.message}</span>
            )}
            <div style={{ marginTop: "1rem" }}>
              <Picker
                disableSearchBar
                disableSkinTonePicker
                {...register("title")}
                onEmojiClick={(event: any, emojiObject: any) =>
                  setValue("title", values.title + emojiObject.emoji)
                }
              />
            </div>
          </div>

          <hr className={styles.horLine} />

          <div className={styles.formInput}>
            <label>Time to Complete</label>
            <input
              {...register("startDate", { required: true })}
              type="text"
              className={styles.startDate}
              placeholder="Start Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            {errors.startDate && (
              <span className={styles.error}>{errors.startDate.message}</span>
            )}
            <input
              {...register("endDate", { required: true })}
              type="text"
              placeholder="End Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            {errors.endDate && (
              <span className={styles.error}>{errors.endDate.message}</span>
            )}
          </div>

          <hr className={styles.horLine} />

          <div className={styles.formInput}>
            <label>Hours Budgeted</label>
            <input
              {...register("hours", { required: true })}
              placeholder="Enter Hours"
              type="number"
            />
            {errors.hours && (
              <span className={styles.error}>{errors.hours.message}</span>
            )}
          </div>

          <div className={styles.submitContainer}>
            <button
              disabled={!isDirty && !isValid}
              type="submit"
              className={styles.submitBtn}
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <hr className={styles.horLine} />
      {/* Messages */}

      <div className={styles.messages}>
        <h3 className={styles.messageHeading}>Messages</h3>

        {messages.map((message, index) => (
          <div className={styles.messageBody} key={index}>
            <div className={styles.messageAvatar}>
              <Avatar img={message.image} />
            </div>
            <div className={styles.message}>
              <div className={styles.messageName}>{message.name}</div>
              <div className={styles.messageText}>{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const messages = [
  {
    name: "Chris Webber",
    message: "Hi Michael! How are you?",
    image:
      "https://www.nicepng.com/png/detail/810-8105444_male-placeholder.png",
  },
  {
    name: "Kelvin Durant",
    message: "Do you need that design?",
    image:
      "https://www.nicepng.com/png/detail/810-8105444_male-placeholder.png",
  },
];
