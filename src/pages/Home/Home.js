import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/auth/selectors";
import Button from '@mui/material/Button';
import { HomeStyled } from "pages/Home.styled";

const Home = () => {
    const {isLoggedIn} = useSelector(selectAuth)
    const navigate = useNavigate();

    return (
      <HomeStyled>
        <div>
          <h1>Phonebook</h1>
          <p>Your contacts are always at hand</p>
          <p> To use register or login</p>
        </div>
        {!isLoggedIn && (
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate('/login');
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate('/register');
              }}
            >
              Register
            </Button>
          </div>
        )}
      </HomeStyled>
    );
}

export default Home;