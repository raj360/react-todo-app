import styled from '@emotion/styled';
import React, { useState, useRef } from 'react';
import { PALETTE } from '../../styles/palette';
import { Person, Lock } from '@mui/icons-material';
import TextInput from '../../components/Intput';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Base = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: PALETTE.SLATE_700,
  margin: '0 0 20px',
});

const Input = styled('input')({
  appearance: 'none',
  background: 'inherit',
  border: `1px solid ${PALETTE.SLATE_400}`,
  borderRadius: 2,
  display: 'block',
  fontSize: 14,
  lineHeight: '24px',
  outline: 'none',
  padding: '3px 0 3px 24px',
  width: '400px',
  '&:focus, &:active': {
    border: `1px solid ${PALETTE.SKY_500}`,
    boxShadow: `0 0 1px 1px ${PALETTE.SKY_300}`,
  },
});

const Label = styled('div')({
  alignSelf: 'start',
});

const PersonIcon = styled(Person)({
  width: 20,
  height: 20,
  margin: '0 4px 0 0',
  position: 'absolute',
  paddingLeft: '2px',
});

const LockIcon = styled(Lock)({
  width: 20,
  height: 20,
  margin: '0 4px 0 0',
  position: 'absolute',
  paddingLeft: '2px',
});

const InputWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Button = styled('button')(({ disabled }) => ({
  width: '100%',
  opacity: disabled ? 1 : undefined,
  background: disabled ? PALETTE.SKY_300 : PALETTE.SKY_600,
  color: PALETTE.WHITE,
  outline: 0,
  ':hover,:focus,:active': {
    background: disabled ? PALETTE.SKY_300 : PALETTE.SKY_500,
    opacity: disabled ? 1 : undefined,
  },
  height: '28px',
  border: `1px solid ${PALETTE.SLATE_500}`,
}));

const InputError = styled('span')({
  color: PALETTE.TOMATO_500,
  fontSize: 12,
  marginTop: '4px',
  width: '400px',
  textAlign: 'center',
});

const Header = styled('h2')({});

const initialInputValues = {
  email: '',
  password: '',
};

const Auth = () => {
  const [values, setValues] = useState(initialInputValues);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { email, password } = values;

  //validate Email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return !re.test(email);
  };

  //password should not be less than 4 characters
  const validatePassword = (password) => {
    return !(password.length >= 4 && password.length <= 16);
  };

  const isFormValid = () => {
    return validateEmail(email) && validatePassword(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const emailValidation = validateEmail(email) && emailFocus;
  const passwordValidation = validatePassword(password) && passwordFocus;

  return (
    <Container>
      <Header>Rapptr Labs</Header>
      <Form>
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          onFocus={setEmailFocus}
          renderError={() => emailValidation && <InputError>Please enter a valid email</InputError>}
          renderIcon={() => <PersonIcon />}
        />
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          onFocus={setPasswordFocus}
          renderError={() =>
            passwordValidation && (
              <InputError>
                The content should be at least 4 characters and should be no more than 16 characters.
              </InputError>
            )
          }
          renderIcon={() => <LockIcon />}
        />

        <Button disabled={isFormValid()} type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Auth;

