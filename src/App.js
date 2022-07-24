import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [buttonAdd, setButtonAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id);
    const updtTask = { ...taskToggle, remider: !taskToggle.remider };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updtTask),
    });
    const data = await res.json();

    setTasks(tasks.map((t) => (t.id === id ? { ...t, remider: data.remider } : t)));
  };

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const add = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await add.json();
    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" propShowAdd={buttonAdd} addButton={() => setButtonAdd(!buttonAdd)} />
      {buttonAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDel={onDelete} onToggle={toggleReminder} /> : "No Task Yet"}
    </div>
  );
}

export default App;
