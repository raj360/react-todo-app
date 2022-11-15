import styled from '@emotion/styled';
import React from 'react';
import PageContainer from '../../components/PageContainer';
import TextInput from '../../components/TextInput';
import { PALETTE } from '../../styles/palette';
import { Search } from '@mui/icons-material';
import iconStyles from '../../styles/helpers/iconStyles';

const Header = styled('h1')({
  fontSize: 60,
  alignItems: 'center',
  margin: '20px 0 20px',
});

const LogoutButton = styled('button')({
  position: 'absolute',
  right: '0',
  top: '0',
  margin: '12px 12px 0',
  background: PALETTE.WHITE,
  border: `1px solid ${PALETTE.SLATE_500}`,
  boxShadow: `2px 2px 0px 0px ${PALETTE.SLATE_700}`,
  outline: 'none',
  color: PALETTE.SKY_500,
  padding: '8px',
  ':hover,:focus,:active': {
    background: PALETTE.SKY_300,
    color: PALETTE.WHITE,
  },
});

const ToDoListWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  margin: '0 0 20px',
  width: '500px',
  height: '100%',
  border: `2px solid ${PALETTE.SLATE_700}`,
  borderRadius: '5px',
});

const SearchSection = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '480px',
  height: '20%',
  justifyContent: 'space-around',
  padding: '20px 0 0',
});

const AddNewButton = styled('button')({
  background: PALETTE.SKY_600,
  border: `1px solid ${PALETTE.SLATE_500}`,
  boxShadow: `2px 2px 0px 0px ${PALETTE.SLATE_700}`,
  outline: 'none',
  color: PALETTE.WHITE,
  height: '28px',
  padding: '8px',
  ':hover,:focus,:active': {
    background: PALETTE.SKY_500,
  },
});

const SearchInput = styled(TextInput)({
  width: '360px',
  height: '28px',
  ':hover,:focus,:active': {
    border: `1px solid ${PALETTE.SKY_500}`,
  },
  margin: '4px 0 0 4px',
});

const SearchIcon = styled(Search)({
  ...iconStyles,
  margin: '4px 0 0 4px',
});

function Home() {
  return (
    <PageContainer>
      <Header>My To-Do List</Header>
      <LogoutButton>Logout</LogoutButton>

      <ToDoListWrapper>
        <SearchSection>
          <SearchInput renderIcon={() => <SearchIcon />} placeholder="Search" />
          <AddNewButton>Add New</AddNewButton>
        </SearchSection>

        {/* TODO:  Add form */}
        {/* TODO: todo listItem */}
        {/* TODO: todo list */}
      </ToDoListWrapper>
    </PageContainer>
  );
}

export default Home;
