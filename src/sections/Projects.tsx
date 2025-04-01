'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-3">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary me-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}