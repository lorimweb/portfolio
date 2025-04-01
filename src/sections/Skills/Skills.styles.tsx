import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

export const SkillsTitle = styled.h2`
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: bold;
`;

export const SkillCard = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SkillCategory = styled.h3`
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

export const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  border-radius: 4px;
  background-color: #2c3e50;
  width: ${props => props.width}%;
  transition: width 0.6s ease;
`;

export const SkillName = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;