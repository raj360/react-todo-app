import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/core';
import globalStyles from './styles/theme/globalStyles';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/home';
import Auth from './pages/auth';

const Root = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default Root;
