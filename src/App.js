import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, nama: "Ardhi", umur: 26 },
    { id: 2, nama: "Ole", umur: 26 },
    { id: 3, nama: "Sasongko", umur: 26 },
    { id: 4, nama: "Oles", umur: 26 },
  ]);
  return (
    <div className="container">
      <Header title="Ole" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
