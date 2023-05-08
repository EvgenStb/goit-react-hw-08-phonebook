import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width:97%;
  /* border: 1px solid #fff; */
  /* border-radius: 4px; */
  /* padding: 3px 5px; */
  /* background-color: #226c8cbf; */

  & input {
    padding: 8px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 5px;
  }

  & label {
    color: black;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
`;


