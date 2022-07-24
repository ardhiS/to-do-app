import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remider, setRemider] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add Task");
      return;
    }

    onAdd({ text, day, remider });
    setText("");
    setDay("");
    setRemider(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day And Time</label>
        <input type="text" placeholder="Add Task" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={remider} placeholder="Add Task" value={remider} onChange={(e) => setRemider(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
