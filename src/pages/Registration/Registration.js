import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Registration = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <div>
          <RegisterForm />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Registration;