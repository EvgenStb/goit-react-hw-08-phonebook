import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login =() => {
    return (
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <div>
            <LoginForm />
          </div>
        </div>
      </HelmetProvider>
    );
}

export default Login