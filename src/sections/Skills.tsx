'use client';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const skills = [
  { 
    category: 'Frontend', 
    items: [
      { name: 'React', percentage: 90 },
      { name: 'Next.js', percentage: 85 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'Bootstrap', percentage: 80 },
      { name: 'CSS/SASS', percentage: 85 }
    ]
  },
  { 
    category: 'Backend', 
    items: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express', percentage: 80 },
      { name: 'Python', percentage: 75 },
      { name: 'SQL', percentage: 80 },
      { name: 'MongoDB', percentage: 75 }
    ]
  },
  { 
    category: 'Tools', 
    items: [
      { name: 'Git', percentage: 90 },
      { name: 'Docker', percentage: 80 },
      { name: 'AWS', percentage: 75 },
      { name: 'Jest', percentage: 80 },
      { name: 'CI/CD', percentage: 85 }
    ]
  }
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
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  border-radius: 4px;
  background-color: #2c3e50;
  width: ${props => props.width}%;
  transition: width 0.6s ease;
`;

const SkillName = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
                      <SkillName>
                        {skill.name}
                        <span>{skill.percentage}%</span>
                      </SkillName>
                      <ProgressBarContainer>
                        <ProgressBarFill width={skill.percentage} />
                      </ProgressBarContainer>
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