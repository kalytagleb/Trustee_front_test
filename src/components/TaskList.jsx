import React from "react";
import TaskFormat from "./TaskFormat";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const TaskList = ({ tasks, remove }) => {
  if (!tasks.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        You have not scheduled any meetings
      </h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 15 }}>List of tasks</h1>
      <TransitionGroup className="task">
        {tasks.map((task, index) => (
          <CSSTransition key={task.id} timeout={500} classNames="task">
            <TaskFormat remove={remove} number={index+1} task={task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TaskList;
