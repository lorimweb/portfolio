'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {currentYear} Clenilson Lopes. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="mx-2">
                <a href="https://github.com/your-github" className="text-light" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="mx-2">
                <a href="https://linkedin.com/in/your-linkedin" className="text-light" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="mx-2">
                <a href="mailto:your.email@example.com" className="text-light">
                  Email
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}