import React, {useState} from "react";
import My_input from "./UI/input/My_input";
import My_button from "./UI/button/My_button";

const TaskForm = ({create}) => {
  const [task, setTask] = useState({
    meeting: "",
    start_time: "",
    end_time: "",
  });

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
        ...task, id: Date.now()
    }
    create(newTask)
    setTask({meeting: "", start_time: "", end_time: ""})
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const inputFields = document.querySelectorAll("input");
      const currentInput = e.target;
      const currentIndex = Array.from(inputFields).indexOf(currentInput);

      if (currentIndex < inputFields.length - 1) {
        const nextInput = inputFields[currentIndex + 1];
        nextInput.focus();
      } else {
        addNewTask(e);
      }
    }
  };

  return (
    <form>
      <My_input
        name="meeting"
        value={task.meeting}
        type="text"
        placeholder="Input task: "
        onChange={(e) => setTask({ ...task, meeting: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_input
        name="start_time"
        value={task.start_time}
        type="text"
        placeholder="Start time: "
        onChange={(e) => setTask({ ...task, start_time: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_input
        name="end_time"
        value={task.end_time}
        type="text"
        placeholder="End time: "
        onChange={(e) => setTask({ ...task, end_time: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_button onClick={addNewTask}>Add a new task</My_button>
    </form>
  );
};

export default TaskForm;
