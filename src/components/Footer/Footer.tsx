'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #212529;
  color: rgba(255, 255, 255, 0.85);
  padding: 2rem 0;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.85) !important;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white !important;
  }
`;

const Copyright = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <Copyright>© {currentYear} Clenilson Lopes. All rights reserved.</Copyright>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="mx-2">
                <SocialLink href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </SocialLink>
              </li>
              <li className="mx-2">
                <SocialLink href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </SocialLink>
              </li>
              <li className="mx-2">
                <SocialLink href="mailto:your-email@example.com">
                  Email
                </SocialLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}