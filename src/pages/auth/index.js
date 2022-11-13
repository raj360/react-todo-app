import styled from '@emotion/styled';
import React from 'react';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

const Auth = () => {
  return <Container>Testing if this is working</Container>;
};

export default Auth;
