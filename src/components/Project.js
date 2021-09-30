import React from 'react';

function Project(props) {
  return (
    <article className="proj" id={props.id}>
      <h4 className="name-header">{props.name}</h4>
      <div className="projInfo">
        <div class="links">
          <a href={props.github}>Github</a> | <a href={props.link}>Live</a>
        </div>
        <div class="skills">
          <h4 className="skills-header">Skills: </h4>
          {props.skills.map((value,index) => {
            return <span key={index}>{value}<span class="comma">,</span> </span>
          })}
        </div>
        <h4 className="desc-header">Description:</h4>
        <p class="desc">{props.desc}</p>
      </div>
    </article>
  );
}

export default Project;
