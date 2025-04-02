'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { ExperienceSection, ExperienceTitle, ExperienceCard, CompanyName, JobTitle, Duration, Description } from './Experience.styles';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    title: 'Senior Full Stack Developer',
    duration: 'Jan 2023 - Present',
    description: (
      <>
        <p>Led development of enterprise-scale web applications using modern technologies.</p>
        <ul>
          <li>Architected and implemented microservices-based solutions using Node.js and TypeScript</li>
          <li>Developed responsive front-end applications using React and Next.js</li>
          <li>Mentored junior developers and conducted code reviews</li>
          <li>Improved application performance by 40% through optimization techniques</li>
        </ul>
      </>
    ),
  },
  {
    company: 'Digital Innovations Ltd',
    title: 'Full Stack Developer',
    duration: 'Mar 2021 - Dec 2022',
    description: (
      <>
        <p>Full-stack development focusing on e-commerce solutions.</p>
        <ul>
          <li>Built and maintained RESTful APIs using Express.js and MongoDB</li>
          <li>Implemented secure payment processing integrations</li>
          <li>Developed automated testing suites using Jest and Cypress</li>
          <li>Collaborated with UI/UX team to implement responsive designs</li>
        </ul>
      </>
    ),
  },
  {
    company: 'StartUp Tech',
    title: 'Junior Developer',
    duration: 'Jun 2019 - Feb 2021',
    description: (
      <>
        <p>Full-stack development in an agile environment.</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js</li>
          <li>Implemented responsive UI components using Bootstrap and SASS</li>
          <li>Participated in daily stand-ups and sprint planning</li>
          <li>Contributed to documentation and technical specifications</li>
        </ul>
      </>
    ),
  },
];

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <Container>
        <ExperienceTitle>Professional Experience</ExperienceTitle>
        <Row>
          <Col>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index}>
                <CompanyName>{exp.company}</CompanyName>
                <JobTitle>{exp.title}</JobTitle>
                <Duration>{exp.duration}</Duration>
                <Description>{exp.description}</Description>
              </ExperienceCard>
            ))}
          </Col>
        </Row>
      </Container>
    </ExperienceSection>
  );
}