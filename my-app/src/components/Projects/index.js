import React from "react";
// importing from src/projects.json
import projects from "../../projects.json";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <p className="project-title">{props.name}</p>
          </li>
          <li>
            <p className="project-description">{props.description}</p>
          </li>
          <li>
            <div className="project-icons">
              <a href={props.github}>
                <img
                  src="https://img.icons8.com/stickers/150/000000/github.png"
                  alt="github-logo"
                  id="port-icon"
                />
              </a>
              <a href={props.deployedapp}>
                <img
                  src="https://img.icons8.com/stickers/150/000000/deployment.png"
                  alt="deployment-logo"
                  id="port-icon"
                />
              </a>
            </div>
          </li>
          <li>{props.skills}</li>
        </ul>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  return (
    <>
      <div className="project">
        <h1 className="title">Full Stack Web Applications</h1>
      </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            github={project.github}
            deployedapp={project.deployedapp}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Projects;
