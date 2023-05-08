import {useSelector } from "react-redux";
import {ContactItem} from 'components/ContactItem/ContactItem'
import { selectSortedContacts } from 'redux/contacts/selectors';
import {StyledList} from 'components/ContactList/ContactList.styled'

function ContactList () {
    const filtered = useSelector(selectSortedContacts);

    return (
        <StyledList>
            
            {filtered.map(contact => {
                return(
                    <ContactItem key={contact.id} contact = {contact}/>
                ) 
            })}
        </StyledList>
    )
}

export default ContactList