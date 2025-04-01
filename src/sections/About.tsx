'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My focus is on creating efficient, scalable, and user-friendly solutions using cutting-edge technologies.
            </p>
            <p>
              With experience in both frontend and backend development, I bring ideas to life through clean code and 
              thoughtful architecture. I enjoy tackling complex problems and learning new technologies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}