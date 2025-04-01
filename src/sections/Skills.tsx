'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Bootstrap', 'CSS/SASS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'] }
];

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const SkillsTitle = styled.h2`
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: bold;
`;

const SkillCard = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.75rem;
  color: #666;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Container>
        <SkillsTitle className="text-center">Skills</SkillsTitle>
        <Row>
          {skills.map((skillGroup, index) => (
            <Col key={index} md={4} className="mb-4">
              <SkillCard>
                <SkillCategory>{skillGroup.category}</SkillCategory>
                <SkillList>
                  {skillGroup.items.map((skill, idx) => (
                    <SkillItem key={idx}>
                      {skill}
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            </Col>
          ))}
        </Row>
      </Container>
    </SkillsSection>
  );
}