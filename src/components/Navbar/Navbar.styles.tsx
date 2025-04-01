import { Nav, Navbar } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: #343a40;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(Nav.Link)`
  color: rgba(255, 255, 255, 0.85) !important;
  transition: color 0.3s ease;

  &:hover {
    color: white !important;
  }
`;

export const StyledBrand = styled(Navbar.Brand)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;