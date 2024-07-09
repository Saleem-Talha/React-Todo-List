import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex justify-between items-center p-2 border-b dark:border-gray-700">
      <div>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })} 
          className="mr-2"
        />
        <span className={`ml-2 ${task.completed ? 'line-through' : ''}`}>{task.task}</span>
        <span className="ml-4 text-gray-500">{task.category}</span>
      </div>
      <button 
        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })} 
        className="bg-blue-500 rounded-sm px-3 py-2 text-white p-1"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
