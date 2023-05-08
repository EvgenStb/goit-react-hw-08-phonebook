import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectAuth} from 'redux/auth/selectors'
import Button from '@mui/material/Button';
import { StyledLink } from "./Navigation.styled";

export const Navigation = ()=> {
    const {isLoggedIn} = useSelector(selectAuth);

    return (
      <nav>
        <Button variant="contained" >
          <StyledLink to="/">Home</StyledLink>
        </Button>

        {isLoggedIn && <NavLink to="/contacts"></NavLink>}
      </nav>
    );
}