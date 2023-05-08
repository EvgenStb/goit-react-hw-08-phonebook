import Button from '@mui/material/Button';
import {StyledAuthNav, StyledLink} from 'components/AuthNav/AuthNav.styled'

export const AuthNav =()=> {
    return (
      <StyledAuthNav>
        <Button variant="contained" >
          <StyledLink to="/register">Register</StyledLink>
        </Button>
        <Button variant="contained" >
          <StyledLink to="/login">Log In</StyledLink>
        </Button>
      </StyledAuthNav>
    );
}