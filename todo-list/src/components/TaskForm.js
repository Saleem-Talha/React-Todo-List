import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), task, category, completed: false } });
    setTask('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Task" 
        className="border p-2 mb-2 w-full dark:bg-gray-800 dark:border-gray-700"
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
        className="border p-2 mb-2 w-full dark:bg-gray-800 dark:border-gray-700"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Task</button>
    </form>
  );
};

export default TaskForm;
