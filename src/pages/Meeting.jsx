import React, { useEffect, useMemo, useState } from "react";
import "../styles/App.scss";
import TaskFormat from "../components/TaskFormat";
import TaskList from "../components/TaskList";
import My_button from "../components/UI/button/My_button";
import My_input from "../components/UI/input/My_input";
import TaskForm from "../components/TaskForm";
import My_select from "../components/UI/select/My_select";
import MyModal from "../components/UI/modal/MyModal";
import Cinema_Schedule from "./Cinema_Schedule";

const Meeting = ({ sortedAndSearchedMovies }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const sortedTasks = useMemo(() => {
    if (selectedSort) {
      return [...tasks].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return tasks;
  }, [selectedSort, tasks]);

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks.filter((task) =>
      task.meeting.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedTasks]);

  if (Array.isArray(sortedAndSearchedTasks)) {
    console.log("Also");
  } else {
    console.log("Also no");
  }

  const createTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setModal(false);
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const removeTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const sortTasks = (sort) => {
    setSelectedSort(sort);
    if (sort.value === "start_time" || sort.value === "end_time") {
      setTasks(
        [...tasks].sort((a, b) => {
          const timeA = new Date(a[sort]);
          const timeB = new Date(b[sort]);
          return timeA - timeB;
        })
      );
    }
  };

  return (
    <div className="App">
      <My_button style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create new task
      </My_button>
      <MyModal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <div>
        <My_input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <My_select
          value={selectedSort}
          onChange={sortTasks}
          defaultValue="Sorting..."
          options={[
            { value: "meeting", name: "By alphabetic order" },
            { value: "start_time", name: "By start time" },
            { value: "end_time", name: "By end time" },
          ]}
        />
      </div>
      <TaskList remove={removeTask} tasks={sortedAndSearchedTasks} />
    </div>
  );
};

export default Meeting;
