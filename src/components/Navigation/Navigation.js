import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks/useAuth/useAuth';
import Button from '@mui/material/Button';
import { StyledLink } from "./Navigation.styled";

export const Navigation = ()=> {
    const { isLoggedIn } = useAuth();

    return (
      <nav>
        <Button variant="contained">
          <StyledLink to="/">Home</StyledLink>
        </Button>

        {isLoggedIn && <NavLink to="/contacts"></NavLink>}
      </nav>
    );
}