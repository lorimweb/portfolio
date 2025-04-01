import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

export const AboutTitle = styled.h2`
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: bold;
`;

export const AboutText = styled.p`
  color: #666;
  line-height: 1.8;
  text-align: justify;
  
  &.lead {
    font-size: 1.25rem;
    color: #2c3e50;
  }
`;