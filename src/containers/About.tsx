'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            As a Senior JavaScript, MEAN & MERN Full Stack Developer, I bring almost 8 years of hands-on experience in web application development, with expertise in both frontend (Angular, React) and backend (Node.js, GraphQL, microservices) technologies. My strong technical foundation in JavaScript, TypeScript, and Python allows me to build scalable and high-performance applications. <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Front-end Expertise:
            </strong>{' '}
            Throughout my career, I have crafted engaging user interfaces using Angular (1–14), React, and Next.js. My experience includes state management (Redux, RxJS), UI frameworks (Angular Material, SCSS, Bootstrap), and integrating GraphQL (Apollo) into frontend applications. I have successfully translated complex requirements into pixel-perfect, responsive designs while ensuring optimal user experience and performance.{' '}
            <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Back-end Proficiency:
            </strong>{' '}
            On the backend, I have extensive experience working with Node.js, NestJS, and Express.js, building scalable APIs and microservices. My expertise in GraphQL, JWT authentication, WebSockets (Socket.io), and session management has helped create robust and secure systems. I have worked with multiple databases, including MongoDB, MySQL, PostgreSQL, and Neo4j, ensuring efficient data management.
            <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              DevOps & Cloud Infrastructure:
            </strong>{' '}
            I have a solid understanding of CI/CD pipelines using Azure, AWS, and Heroku, along with Docker, Kubernetes, and microservices architecture. My ability to automate deployments and optimize workflows has improved efficiency in various projects.
            <br />
            <br />
            <strong style={{ color: '#0ea5e9' }}>
              Other Skills & Contributions:
            </strong>{' '}
            Beyond development, I have experience in team leadership, code reviews, and mentoring junior developers. My familiarity with Agile methodologies, Jira, Git, and Jenkins allows me to work efficiently in team environments. I have also implemented unit and E2E testing (Jest, Cypress, Mocha, Chai) to ensure code reliability and maintainability.
            <br /> <br />
            With a proficient command of English and a passion for continuous learning, I am excited to take on challenging projects and contribute my expertise to cutting-edge solutions in the tech industry.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://www.phaedrasolutions.com/"
              target="_blank"
              className="text-accent"
            >
              Phaedra Solutions
            </Link>
            .
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
