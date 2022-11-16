import styled from '@emotion/styled';
import React from 'react';
import PageContainer from '../../components/PageContainer';
import TextInput from '../../components/TextInput';
import { PALETTE } from '../../styles/palette';
import { Search, Delete, Edit } from '@mui/icons-material';
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
  width: '500px',
  height: '100%',
  border: `2px solid ${PALETTE.SLATE_700}`,
  borderRadius: '5px',
});

const SearchSection = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '20px 20px 0',
  borderBottom: `2px solid ${PALETTE.SLATE_700}`,
});

const AddNewButton = styled('button')({
  background: PALETTE.SKY_500,
  border: `1px solid ${PALETTE.SLATE_500}`,
  boxShadow: `2px 2px 0px 0px ${PALETTE.SLATE_700}`,
  outline: 'none',
  cursor: 'pointer',
  color: PALETTE.WHITE,
  height: '28px',
  padding: '8px',
  ':hover': {
    background: PALETTE.SKY_300,
  },
});

const SaveButton = styled(AddNewButton)({
  background: PALETTE.SLATE_700,
  ':hover': {
    background: PALETTE.SLATE_500,
  },
});

const SearchInput = styled(TextInput)({
  width: '360px',
  ':hover,:focus,:active': {
    border: `1px solid ${PALETTE.SKY_500}`,
  },
  borderRadius: '10px',
});

const SaveToDoInput = styled(TextInput)({
  width: '300px',
  padding: '3px 0 3px 4px',
});

const SearchIcon = styled(Search)({
  ...iconStyles,
  margin: '2px 0 0 2px',
});

const AddTodoForm = SearchSection.withComponent('div');

const TodoListItem = styled(SearchSection)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '20px 20px 20px',
});

const ActionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '64px',
});

const actionIconStyles = {
  width: 24,
  height: 24,
  margin: 0,
  cursor: 'pointer',
  position: 'relative',
};

const EditButton = styled(Edit)({
  ...actionIconStyles,
  ':hover': {
    color: PALETTE.SKY_500,
  },
});

const DeleteButton = styled(Delete)({
  ...actionIconStyles,
  ':hover': {
    color: PALETTE.TOMATO_500,
  },
});

const ToDoText = styled('p')({
  fontSize: '20px',
});

function Home() {
  return (
    <PageContainer>
      <Header>My To-Do List</Header>
      <LogoutButton>Logout</LogoutButton>

      <ToDoListWrapper>
        <SearchSection>
          <SearchInput renderIcon={() => <SearchIcon />} placeholder="Search" />
          <AddNewButton>New</AddNewButton>
        </SearchSection>

        <AddTodoForm>
          <SaveToDoInput placeholder="Add new todo" />
          <SaveButton>Save</SaveButton>
        </AddTodoForm>

        <TodoListItem>
          <ToDoText>Todo 1</ToDoText>

          <ActionWrapper>
            <EditButton />
            <DeleteButton />
          </ActionWrapper>
        </TodoListItem>
      </ToDoListWrapper>
    </PageContainer>
  );
}

export default Home;
