import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button'
import { StyledForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useSelector(selectAuth);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <Button type="submit" variant="contained">
        {isLoading ? <CircularProgress /> : 'Login'}
      </Button>
    </StyledForm>
  );
};
