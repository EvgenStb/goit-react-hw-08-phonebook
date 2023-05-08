import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0 auto;
  padding: 10px 10px;
  max-width: 350px;
  
  & label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & input {
    margin: 10px;
  }
  & Button {
    margin:0 auto;
    max-width: 150px;
    
  }
`;