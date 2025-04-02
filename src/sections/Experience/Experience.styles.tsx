import styled from 'styled-components';

export const ExperienceSection = styled.section`
  padding: 5rem 0;
  background-color: #fff;
`;

export const ExperienceTitle = styled.h2`
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: bold;
  text-align: center;
`;

export const ExperienceCard = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CompanyName = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const JobTitle = styled.h4`
  color: #6c757d;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const Duration = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  color: #666;
  line-height: 1.8;

  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
`;