import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderArea>
      <h1 style={{ margin: 0 }}>Hello React Router</h1>
      <NavArea>
        <li>
          <HeaderLink exact activeClassName="current" to="/">
            Home
          </HeaderLink>
        </li>
        <li>
          <HeaderLink activeClassName="current" to="/about">
            About
          </HeaderLink>
        </li>
        <li>
          <HeaderLink activeClassName="current" to="/contact">
            Contact
          </HeaderLink>
        </li>

        <li>
          <HeaderLink activeClassName="current" to="/posts">
            post
          </HeaderLink>
        </li>

        <li>
          <HeaderLink to="/ccscscscsd">notound</HeaderLink>
        </li>
      </NavArea>
    </HeaderArea>
  );
};

const HeaderArea = styled.header`
  background-color: #54aaf5;
  text-align: center;
`;
const NavArea = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: #b8deff;
`

const HeaderLink = styled(NavLink)`
  padding: 8px;
  display: inline-block;
  text-decoration: none;
  width: min-content;
`;
