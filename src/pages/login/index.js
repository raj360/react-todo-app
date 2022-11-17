import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Person, Lock } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { PALETTE } from 'styles/palette';
import TextInput from 'components/TextInput';
import PageContainer from 'components/PageContainer';
import iconStyles from 'styles/helpers/iconStyles';
import { useNavigate } from 'react-router-dom';
import { makeMaxWidthMediaQuery } from 'utils';
import { BREAKPOINTS } from 'styles/breakpoints';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Button = styled('button')(({ disabled }) => ({
  width: '100%',
  opacity: disabled ? 1 : undefined,
  background: disabled ? PALETTE.SKY_300 : PALETTE.SKY_600,
  color: PALETTE.WHITE,
  cursor: 'pointer',
  ':hover': {
    background: disabled ? PALETTE.SKY_300 : PALETTE.SKY_500,
    opacity: disabled ? 1 : undefined,
  },
  height: '28px',
  border: disabled ? `1px solid ${PALETTE.SKY_300}` : `1px solid ${PALETTE.SKY_600}`,
  boxShadow: disabled ? `2px 2px 0px 0px ${PALETTE.SLATE_500}` : `2px 2px 0px 0px ${PALETTE.SLATE_700}`,
}));

const InputError = styled('span')({
  color: PALETTE.TOMATO_500,
  fontSize: 12,
  marginTop: '4px',
  width: '400px',
  textAlign: 'center',
  [makeMaxWidthMediaQuery(BREAKPOINTS.target)]: {
    width: '280px',
    margin: '0 auto',
  },
});

const Input = styled(TextInput)({
  [makeMaxWidthMediaQuery(BREAKPOINTS.target)]: {
    width: '280px',
  },
});

const PersonIcon = styled(Person)(iconStyles);

const LockIcon = styled(Lock)(iconStyles);

const Header = styled('h1')({
  margin: '0 0 30px',
});

const initialInputValues = {
  email: '',
  password: '',
};

const testData = {
  user_id: 16,
  user_email: 'test@rapptrlabs.com',
  user_username: 'testuser',
};

const Login = () => {
  const [values, setValues] = useState(initialInputValues);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigation = useNavigate();
  const [response, setResponse] = useState({
    error: false,
    message: '',
  });

  const [waiting, setWaiting] = useState(false);

  const { email, password } = values;

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return !re.test(email);
  };

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

  const onSubmit = async (e) => {
    e.preventDefault();
    setWaiting(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ email, password }),
    };

    // For testing purpose, for a successful login, use the following credentials:
    // test@rapptrlabs.com as the email and Test123 as the password
    if (testData.user_email === email && password === 'Test123') {
      localStorage.setItem('user', JSON.stringify(testData));
      navigation('/');
      toast.success('Login successful');
      return;
    }

    try {
      // currently CORs is enabled on the server side so all requestes from localhost:3000 are blocked by CORS policy
      const response = await fetch('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', requestOptions);
      const data = await response.json();
      setResponse({
        error: false,
        message: 'Login successful',
      });

      if (data?.user_token) {
        localStorage.setItem('user', JSON.stringify(data));
        navigation.push('/');
        toast.success('Login successful');
      }

      setWaiting(false);
    } catch (error) {
      setResponse({
        error: true,
        message: 'The server could not be reached. Please try again later',
      });
      setWaiting(false);
      toast.error('Login Failed');
    }
  };

  return (
    <PageContainer>
      <Header>Rapptr Labs</Header>
      <Form onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="user@rapptrlabs.com."
          value={email}
          onChange={handleInputChange}
          onFocus={setEmailFocus}
          hasError={emailValidation}
          renderError={() => emailValidation && <InputError>Not a valid email</InputError>}
          renderIcon={() => <PersonIcon />}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Must be atlease 4 characters."
          value={password}
          onChange={handleInputChange}
          onFocus={setPasswordFocus}
          hasError={passwordValidation}
          renderError={() =>
            passwordValidation && (
              <InputError>
                The content should be at least 4 characters and should be no more than 16 characters.
              </InputError>
            )
          }
          renderIcon={() => <LockIcon />}
        />

        <Button disabled={isFormValid() || waiting} type="submit">
          Login
        </Button>
        {response.error && <InputError>{response.message}</InputError>}
      </Form>
    </PageContainer>
  );
};

export default Login;
