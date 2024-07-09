import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import CategoryFilter from '../components/CategoryFilter';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="container mx-auto p-4">
      <CategoryFilter />
      <TaskList filter={category} />
    </div>
  );
};

export default CategoryPage;
