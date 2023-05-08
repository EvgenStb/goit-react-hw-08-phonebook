import styled from "styled-components";


export const StyledContact = styled.li`
  display: flex;
  max-width: 50%;
  justify-content: stretch;
  align-items: center;
  text-decoration: none;
  & p {
    display: flex;
    align-self: center;
    font-size: 18px;
    margin: 10px auto;
  }
  & button {
    margin-left: 15px;
    align-self: center;
  }
`;

export const StyledContactInfo = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width:100%;
  & p {
    margin-left: 5px;
  }
`;

