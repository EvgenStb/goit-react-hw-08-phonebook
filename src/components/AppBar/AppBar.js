import { useSelector } from "react-redux";
import {selectAuth} from 'redux/auth/selectors';
import {UserMenu} from 'components/UserMenu/UserMenu'
import {AuthNav} from 'components/AuthNav/AuthNav'
import { Navigation } from "components/Navigation/Navigation";
import { StyledHeader } from "./AppBar.styled";



export const AppBar = () => {
    const {isLoggedIn} = useSelector(selectAuth);

    return (
        <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}