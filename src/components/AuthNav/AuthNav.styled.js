import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAuthNav = styled.div`


  & Button{
    margin-right: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
text-decoration:none;
font-size:15px;
font-weight:400;
color: #fff;

`