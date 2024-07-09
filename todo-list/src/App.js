import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Title from './components/Title';

const App = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
     
      <TaskProvider>
        <Router>
          <div className="container mx-auto p-4">
            <Title />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </div>
  );
};

export default App;
