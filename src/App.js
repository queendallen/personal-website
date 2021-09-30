import './App.css';
import React, {useState} from 'react';
import FilterButton from './components/FilterButton';
import Project from './components/Project';
import resume from './extra/Allen_Resume.pdf';

const FILTER_MAP = {
  All: () => true,
  Personal: projects => projects.projType !== "work",
  Work: projects => projects.projType === "work"
}
//Object.keys returns an array of a given object's own enumerable property names, 
//iterated in the same order that a normal loop would
//FILTER_NAMES is [All, 'Personal', 'Work']
const FILTER_NAMES = Object.keys(FILTER_MAP); 

function App(props) {
  const projects = props.projects;
  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const projList = projects
    .filter(FILTER_MAP[filter])
    .map(projects => (
      <Project 
        id={projects.id}
        name={projects.name}
        skills={projects.skills}
        desc={projects.desc}
        github={projects.githubLink}
        link={projects.link}
        projType={projects.projType}
      />
    )
  );

  
  return (
    <div className="App">
      <nav className="navigation" id="navigation">
        <a href="#landing">Home</a>
        <a href="#projects">Projects</a>
        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="landing" id="landing">
        <header className="landing-header">
          <p class="floating">Hi! I'm Dyandra Allen.<br />I'm an aspiring web developer</p>
        </header>
      </section>

      <section className="projects" id="projects">
        <header className="projects-header">
          <p>Projects</p>
        </header>
        <div className="filters" id="filters">
          {filterList}
        </div>
        <div className="projectList" id="projectList">
          {projList}
        </div>
      </section>

      <section className="contact" id="contact">
        <header className="contact-header">
          <p>Contact</p>
        </header>
        <ul class="contactList">
          <li>
            Email:
            <a href="mailto:dyandra.allen@gmail.com">dyandra.allen@gmail.com</a>
            <a href="mailto:dallen9@binghamton.edu">dallen9@binghamton.edu</a>
          </li>
          <li><a href="https://www.linkedin.com/in/dyandra-allen-165384156/">LinkedIn: Dyandra Allen</a></li>
          <li><a href="https://github.com/queendallen">Github: queendallen</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
