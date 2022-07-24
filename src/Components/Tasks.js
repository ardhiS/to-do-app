import Task from "./Task";

const Tasks = ({ tasks, onDel, onToggle }) => {
  return (
    <>
      {tasks.map((t, index) => (
        <Task key={index} task={t} onDelete={onDel} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
