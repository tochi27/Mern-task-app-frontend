import React from "react";
import { FaEdit, FaCheckDouble, FaRegTrashAlt, FaTimes } from "react-icons/fa";


const Task = ({ task, index, deleteTask, getSingleTask, setToComplete, setToIncomplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" onClick={() => setToComplete(task)}/>
        <FaTimes color="red" onClick={() => setToIncomplete(task)}/>
        <FaEdit color="purple" onClick={() => getSingleTask(task)}/>
        <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
