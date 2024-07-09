import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import CategoryFilter from '../components/CategoryFilter';


const HomePage = () => {
  return (
    <>
    
    <div className="container mx-auto p-4">
    
        <CategoryFilter />
        <TaskForm />
        <TaskList />
      </div>
    </>
   
  );
};

export default HomePage;
