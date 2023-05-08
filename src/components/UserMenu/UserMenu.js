import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectAuth } from "redux/auth/selectors";
import Button from '@mui/material/Button';
import { StyledUserMenu } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} =useSelector(selectAuth)

    return (
      <StyledUserMenu>
        <p> Welcome, {user.name}        </p>
        <Button variant="contained" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </StyledUserMenu>
    );
}