import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BasicModal from 'components/Modal/Modal';

import ContactList from "components/ContactList/ContactList";
import Filter from 'components/Filter/Filter'
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading,selectError } from "redux/contacts/selectors";
import { selectToken } from "redux/auth/selectors";
import { ContactsContainer } from "./Contact.styled";


const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    useEffect(() => {
        if (token) {
            dispatch(fetchContacts());
        }
    }, [dispatch, token])

    return (
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
          <ContactsContainer>
            <h1>Contacts</h1>
            <BasicModal />
            <Filter />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ContactList />
          </ContactsContainer>
      </HelmetProvider>
    );
}
export default Contacts