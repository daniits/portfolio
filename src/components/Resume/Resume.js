import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/daniyalKhan.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Frontend Developer (WayoutLab)"
              date="Nov 2023 - present"
              content={[
                "Spearheaded the development of responsive web applications by translating intricate Figma designs into React.js and Next.js, enhancing user experience and interface adaptability. Implemented advanced SEO strategies, significantly improving website visibility and search engine rankings.",
                "Optimized website performance, achieving faster load times and a smoother user experience, leading to a 20% increase in user engagement.",
                "Collaborated closely with UI/UX designers to ensure the technical feasibility of designs, while maintaining a keen focus on user-centered design principles.",
                "Stayed abreast of the latest industry trends and technologies, applying best practices in web development and SEO to drive continuous improvement and innovation.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer [Crickslab]"
              date="Sep 2021 - Oct 2021 (2y 2m)"
              content={[
                "Led the development and deployment of innovative cricket analytics platforms, leveraging [specific technologies] to enhance user engagement and data accuracy.",
                "Collaborated with cross-functional teams to design and implement user-friendly features, significantly improving the platform's usability and accessibility.",
                "Drove the integration of advanced data analysis tools, enabling real-time performance tracking and insights that empowered teams and players with actionable feedback.",
                "Played a key role in optimizing platform performance for speed and efficiency, ensuring a seamless experience for thousands of users worldwide.",
                "Contributed to strategic discussions on product development, offering valuable insights that shaped the direction of Crickslab's offering.",
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bs Computer Science [GCUF] "
              date="2017 - 2021"
              content={[
                `CGPA: 3.2/4 `,
                "I was complete my bachelor degree fron GCUF.",
              ]}
            />
            <Resumecontent
              title="FSC Pre-Engerning [GCRP] "
              date="2015 - 2017"
              content={[
                `CGPA: 854/1100 `,
                "I was complete my fsc degree fron goverment collage Rajan Pur.",
              ]}
            />

           
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
