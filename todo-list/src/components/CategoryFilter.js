import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  const categories = ['Work', 'Personal', 'Shopping', 'Others'];

  return (
    <div className="flex justify-around p-4 bg-gray-200 dark:bg-gray-800 mb-4">
      {categories.map(category => (
        <Link key={category} to={`/category/${category}`} className="text-blue-500 dark:text-blue-300">
          {category}
        </Link>
      ))}
      <Link to="/" className="text-blue-500 dark:text-blue-300">All</Link>
    </div>
  );
};

export default CategoryFilter;
