import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { StyledForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleInput} />
      </label>

      <label>
        Email
        <input type="email" name="email" value={email} onChange={handleInput} />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </label>

      <Button type="submit" variant="contained">
        Register
      </Button>
    </StyledForm>
  );
};
