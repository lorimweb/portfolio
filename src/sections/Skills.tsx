'use client';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Bootstrap', 'CSS/SASS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <Row>
          {skills.map((skillGroup, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="h5 mb-4">{skillGroup.category}</h3>
                <ul className="list-unstyled">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}