import React from "react";
import My_button from "./UI/button/My_button";

const TaskFormat = ({task, number, remove}) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. <p>Task: {task.meeting}</p>
        </strong>
        <div>
          <strong>Start Time: {task.start_time}</strong>
        </div>
        <div>
          <strong>End Time: {task.end_time}</strong>
        </div>
      </div>
      <div className="post__btns">
        <My_button onClick={() => remove(task)}>Delete</My_button>
      </div>
    </div>
  );
};

export default TaskFormat;
