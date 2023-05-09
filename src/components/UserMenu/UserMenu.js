import { useDispatch} from "react-redux";
import { logout } from "redux/auth/operations";
import { useAuth } from 'hooks/useAuth/useAuth';
import Button from '@mui/material/Button';
import { StyledUserMenu } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
      <StyledUserMenu>
        <p> Welcome, {user.name} </p>
        <Button variant="contained" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </StyledUserMenu>
    );
}