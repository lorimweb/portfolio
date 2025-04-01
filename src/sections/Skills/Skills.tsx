'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { SkillsSection, SkillsTitle, SkillCard, SkillCategory, SkillList, SkillItem, ProgressBarContainer, ProgressBarFill, SkillName } from './Skills.styles';

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