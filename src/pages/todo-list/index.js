import styled from '@emotion/styled';
import React, { useState, useMemo } from 'react';
import PageContainer from 'components/PageContainer';
import TextInput from 'components/TextInput';
import { PALETTE } from 'styles/palette';
import { Search, Delete, Edit } from '@mui/icons-material';
import iconStyles from 'styles/helpers/iconStyles';
import { useNavigate } from 'react-router-dom';
import { makeMaxWidthMediaQuery } from 'utils';
import { BREAKPOINTS } from 'styles/breakpoints';

const Header = styled('h1')({
  fontSize: 48,
  alignItems: 'center',
  padding: '20px 0 0',
  [makeMaxWidthMediaQuery(BREAKPOINTS.target)]: {
    padding: '40px 0 20px',
    fontSize: 36,
    margin: '0 auto',
  },
});

const LogoutButton = styled('button')({
  position: 'absolute',
  right: '0',
  top: '0',
  margin: '12px 12px 0',
  background: PALETTE.WHITE,
  border: `1px solid ${PALETTE.SLATE_500}`,
  boxShadow: `2px 2px 0px 0px ${PALETTE.SLATE_700}`,
  color: PALETTE.SKY_500,
  padding: '8px',
  cursor: 'pointer',
  ':hover,:focus,:active': {
    background: PALETTE.SKY_300,
    color: PALETTE.WHITE,
  },
});

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  width: '500px',
  height: '100%',
  border: `3px solid ${PALETTE.SLATE_700}`,
  borderRadius: '5px',
  [makeMaxWidthMediaQuery(BREAKPOINTS.target)]: {
    width: '375px',
  },
  overflow: 'hidden',
});

const TodoListWrapper = styled('div')({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    webkitAppearance: 'none',
    width: '1px',
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '2px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
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
  [makeMaxWidthMediaQuery(BREAKPOINTS.target)]: {
    width: '200px',
    margin: '0 auto',
  },
});

const SaveToDoInput = styled(TextInput)({
  width: '300px',
  padding: '3px 0 3px 4px',
  [makeMaxWidthMediaQuery(BREAKPOINTS)]: {
    width: '150px',
    margin: '0 auto',
  },
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

//Structure of todo, this would have been explicit if I used typescript but wanted to keep thing simple
//  id: '',
// text: '',
// isEditing:false
function Home() {
  const [todos, setTodos] = useState([]);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todoValue, setTodoValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const toggleAddTodoForm = () => {
    setShowAddTodoForm((formStatus) => !formStatus);
  };

  const validateTodo = (todo) => {
    return !(todo.length >= 1 && todo.length <= 25);
  };

  const handleSaveTodo = (action, todoId) => {
    if (action === 'adding') {
      const newTodo = {
        id: Date.now(),
        text: todoValue,
        isEditing: false,
      };

      if (validateTodo(todoValue)) {
        return;
      }
      setTodos((todos) => [newTodo, ...todos]);
      setTodoValue('');
      toggleAddTodoForm();
    } else {
      if (validateTodo(todoValue)) {
        return;
      }
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      const updatedTodos = [...todos];
      updatedTodos[todoIndex].isEditing = false;
      updatedTodos[todoIndex].text = todoValue;
      setTodos(updatedTodos);
      setTodoValue('');
    }
  };

  const handleOnChangeInput = (e) => {
    setTodoValue(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };

  const toggleEditTodoForm = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const tempTodos = [...todos];
    tempTodos[index].isEditing = !tempTodos[index].isEditing;
    setTodos(tempTodos);
  };

  const handleOnSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => todo.text.includes(searchValue));
  }, [searchValue, todos]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <PageContainer>
      <Header>My To-Do List</Header>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>

      <ContentWrapper>
        <SearchSection>
          <SearchInput renderIcon={() => <SearchIcon />} placeholder="Search" onChange={handleOnSearch} />
          <AddNewButton onClick={toggleAddTodoForm}>New</AddNewButton>
        </SearchSection>

        {showAddTodoForm && (
          <AddTodoForm>
            <SaveToDoInput placeholder="Add new todo" onChange={handleOnChangeInput} />
            <SaveButton onClick={() => handleSaveTodo('adding')}>Save</SaveButton>
          </AddTodoForm>
        )}

        <TodoListWrapper>
          {filteredTodos.map(({ id, text, isEditing }) => (
            <>
              {isEditing ? (
                <AddTodoForm key={`${id}`}>
                  <SaveToDoInput defaultValue={text} onChange={handleOnChangeInput} />
                  <SaveButton onClick={() => handleSaveTodo('editing', id)}>Save</SaveButton>
                </AddTodoForm>
              ) : (
                <TodoListItem key={`${id}`}>
                  <ToDoText>{text}</ToDoText>
                  <ActionWrapper>
                    <EditButton onClick={() => toggleEditTodoForm(id)} />
                    <DeleteButton onClick={() => handleDeleteTodo(id)} />
                  </ActionWrapper>
                </TodoListItem>
              )}
            </>
          ))}
        </TodoListWrapper>
      </ContentWrapper>
    </PageContainer>
  );
}

export default Home;
