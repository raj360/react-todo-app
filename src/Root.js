import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import globalStyles from './styles/theme/globalStyles';
import ErrorBoundary from './components/ErrorBoundary';
import ToDoList from './pages/todo-list';
import Login from './pages/login';

const Root = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default Root;
