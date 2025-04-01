'use client';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { StyledBrand, StyledNavbar, StyledNavLink } from './Navbar.styles';

export default function MainNav() {
  return (
    <StyledNavbar expand="lg" className="fixed-top">
      <Container>
        <StyledBrand href="#home">Clenilson Lopes</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavLink href="#home">Home</StyledNavLink>
            <StyledNavLink href="#about">About</StyledNavLink>
            <StyledNavLink href="#skills">Skills</StyledNavLink>
            <StyledNavLink href="#projects">Projects</StyledNavLink>
            <StyledNavLink href="#contact">Contact</StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}