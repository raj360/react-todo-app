import styled from '@emotion/styled';
import React from 'react';

const TodoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

function Home() {
  return <TodoContainer>Testing if Home is working properly </TodoContainer>;
}

export default Home;
