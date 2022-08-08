import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} tugas={task} />
      ))}
    </>
  );
};

export default Tasks;
