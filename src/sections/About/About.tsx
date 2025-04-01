'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { AboutSection, AboutTitle, AboutText } from './About.styles';

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <AboutTitle>About Me</AboutTitle>
            <AboutText className="lead">
              Desenvolvedor de software full-stack
            </AboutText>
            <AboutText>
              Com foco no desenvolvimento de aplicações web e mobile, utilizando tecnologias modernas como JavaScript/TypeScript, ReactJS, Angular, Vue.js e Node.js para criar soluções escaláveis e de alto desempenho. Possuo experiência em projetos que envolvem arquitetura front-end e back-end, com habilidades complementares em C# (.NET Core), Java (Spring), Python (Django) e desenvolvimento multiplataforma para dispositivos móveis usando Dart (Flutter) e React Native. Versátil e adaptável, busco integrar boas práticas de código, otimização de processos e integração de sistemas para entregar produtos robustos e alinhados às necessidades do cliente.
            </AboutText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
}