import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import globalStyles from './styles/theme/globalStyles';
import ErrorBoundary from './components/ErrorBoundary';
import ToDoList from './pages/todo-list';
import Login from './pages/login';
import RequireAuth from './components/RequireAuth';

const Root = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <ErrorBoundary>
        <Routes>
          {/* Open route */}
          <Route path="/login" element={<Login />} />

          {/* Protected route */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<ToDoList />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default Root;
