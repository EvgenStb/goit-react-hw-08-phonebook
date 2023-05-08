import Notiflix from "notiflix";
// import { useState } from "react"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import {Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  StyledContact,
  StyledContactInfo,
} from './ContactItem.styled';

export const ContactItem = ({contact}) => {
const dispatch = useDispatch()

const handleDelete = (id) => {
    dispatch(deleteContact(id));
    return Notiflix.Notify.success('Contact deleted successfully')
}

    return (
      <StyledContact>
        <StyledContactInfo>
          <PersonIcon color="primary" fontSize="large" />
          <p>{contact.name}</p>
          <LocalPhoneIcon color="primary" fontSize="large" />
          <p>{contact.number}</p>
        </StyledContactInfo>
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          <DeleteIcon />
        </Button>
      </StyledContact>
    );
}