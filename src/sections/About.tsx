'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const AboutTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: bold;
`;

const AboutText = styled.p`
  color: #666;
  line-height: 1.8;
  
  &.lead {
    font-size: 1.25rem;
    color: #2c3e50;
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <AboutTitle>About Me</AboutTitle>
            <AboutText className="lead">
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My focus is on creating efficient, scalable, and user-friendly solutions using cutting-edge technologies.
            </AboutText>
            <AboutText>
              With experience in both frontend and backend development, I bring ideas to life through clean code and 
              thoughtful architecture. I enjoy tackling complex problems and learning new technologies.
            </AboutText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
}