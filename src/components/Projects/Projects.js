import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import vzPlan from "../../Assets/Projects/vzPlan.png";
import TKD from "../../Assets/Projects/youngMooTkd.png";
import nopalDas from "../../Assets/Projects/nopalDas.png";
import fitnessAPP from "../../Assets/Projects/fitnessAPP.png";
import socialMedia from "../../Assets/Projects/socialMedia.jpeg";
import builderBell from "../../Assets/Projects/builderBell.png";
import matchCenteral from "../../Assets/Projects/matchCenteral.png";
import overlay from "../../Assets/Projects/overlay.jpeg";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nopalDas}
              isBlog={false}
              title="Nopal Das"
              description="Begin with a brief introduction to Nopal DS, emphasizing the need it fulfills in the market. Explain the
              core objective: to provide a comprehensive and intuitive online platform for users to explore and order
              from a diverse menu of food services, enhanced with location-based delivery options for added
              convenience."
              // link="https://github.com/MohitSojitra/taskify"
              liveLink="https://nopalds.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={builderBell}
              isBlog={false}
              title="Builder Bell"
              description="Start with an introduction to BuilderBell, emphasizing its goal to streamline construction project 
              management through digitalization. Highlight the project's ambition to enhance efficiency, collaboration, 
              and oversight across construction project lifecycles. "
              // link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://www.builderbel.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vzPlan}
              isBlog={false}
              title="VZ Plan"
              description="Begin with an overview of the VZ Plan Builder, emphasizing its aim to revolutionize the traditional process of business plan creation. Highlight the platform's ability to generate comprehensive business plans in less than 10 minutes, catering to entrepreneurs and new ventures."
              // link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://dev.swyftplan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TKD}
              isBlog={false}
              title="YoungMoo TKD"
              description="The YoungMoo TKD Web Application is an all-inclusive digital platform intended for a Taekwondo training center. This project includes a wide range of features aimed at improving the experience of both students and instructors. Built with HTML, CSS, and JavaScript, the app offers a user-friendly interface and seamless navigation, ensuring that users can easily access various functionalities."
              // link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://youngmootkd.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessAPP}
              isBlog={false}
              title="Fitness App"
              description="To create an integrated fitness app that enhances the training experience by connecting athletes and coaches in a dynamic gym setting, offering personalized exercise sessions, group training options, and comprehensive management features for administrators."
              // link="https://github.com/MohitSojitra/Artistee"
              // liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Crickslab CMS Features"
              description="Provide an overview of your involvement in developing various CMS portal systems, emphasizing the goal to enhance content management capabilities, user interaction, and content sharing. Highlight the breadth of your experience across different projects, focusing on user creation, moment creation, and post creation functionalities."
              // link="https://github.com/MohitSojitra/Artistee"
              // liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Social Media Automation"
              description="Begin with an overview of the tool, emphasizing its purpose to automate the creation of engaging social media posts. Highlight how it leverages AI to generate content and tags, and offers customizable templates for a personalized touch, catering to a wide range of social media needs."
              // link="https://github.com/MohitSojitra/Artistee"
              // liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchCenteral}
              isBlog={false}
              title="Match Centeral"
              description="Introduce Match Central Kuwait as part of the CricketLab service suite, a project dedicated to cricket enthusiasts and players in Kuwait. Highlight the goal of providing a dynamic platform for real-time cricket match updates, detailed scorecards, and engaging content."
              // link="https://github.com/MohitSojitra/Artistee"
              // liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={overlay}
              isBlog={false}
              title="Cricket Match Overlays System "
              description="Start with an overview of the project, emphasizing its objective to elevate the cricket viewing experience for the Pakistan Super League (PSL) by providing dynamic, real-time overlays displaying match details, scores, and statistics."
              // link="https://github.com/MohitSojitra/Artistee"
              // liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
