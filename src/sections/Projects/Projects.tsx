'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectsSection, ProjectsTitle, ProjectCard, TechBadge } from './Projects.styles';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js and Node.js',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/vercel.svg' // placeholder image
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features',
    tech: ['React', 'Firebase', 'Material-UI'],
    image: '/vercel.svg' // placeholder image
  },
  {
    title: 'API Gateway Service',
    description: 'Microservice-based API gateway with authentication and rate limiting',
    tech: ['Express', 'Redis', 'JWT', 'Docker'],
    image: '/vercel.svg' // placeholder image
  }
];

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <ProjectsTitle>Featured Projects</ProjectsTitle>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <ProjectCard>
                <ProjectCard.Img variant="top" src={project.image} alt={project.title} />
                <ProjectCard.Body>
                  <ProjectCard.Title>{project.title}</ProjectCard.Title>
                  <ProjectCard.Text>{project.description}</ProjectCard.Text>
                  <div className="mt-3">
                    {project.tech.map((tech, idx) => (
                      <TechBadge key={idx}>
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </ProjectCard.Body>
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ProjectsSection>
  );
}