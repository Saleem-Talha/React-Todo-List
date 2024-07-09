import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import Task from './Task';

const TaskList = ({ filter }) => {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = filter 
    ? tasks.filter(task => task.category === filter) 
    : tasks;

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
