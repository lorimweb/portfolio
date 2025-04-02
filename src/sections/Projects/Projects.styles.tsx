import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';

export const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: #fff;
`;

export const ProjectsTitle = styled.h2`
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: bold;
  text-align: center;
`;

export const ProjectCard = styled(BootstrapCard)`
  transition: transform 0.3s ease-in-out;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const TechBadge = styled.span`
  background-color: #6c757d;
  color: white;
  padding: 0.35em 0.65em;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  display: inline-block;
  font-size: 0.875em;
`;