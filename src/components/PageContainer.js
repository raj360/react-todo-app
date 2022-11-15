import styled from '@emotion/styled';
import React from 'react';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
