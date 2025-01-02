import React, { JSX } from "react";

export interface ProjectValues {
  name: string;
  skills: Array<string>;
  desc: string;
  githubLink?: string;
  link?: string;
  fileName?: string;
}

const Project = ({
  name,
  skills,
  desc,
  githubLink,
  link,
  fileName
}: ProjectValues): JSX.Element => {
  return (
    <article className="flex justify-center h-72 mb-8 rounded">
      {fileName && (
        <img src={require(`../../../../assets/${fileName}`)} className="w-96" />
      )}
      <div className="w-1/2 px-12 py-8 mb-8 rounded border-solid border-2 border-lime-500 row-start-1 h-full overflow-y-auto ml-8">
        <h2 className="mb-4 font-semibold">{name}</h2>
        <div>
          <div className="mb-4">
            {githubLink && <a href={githubLink}>github</a>}
            {link && <a href={link}> {`${githubLink ? " | " : ""}live`}</a>}
          </div>
          <div className="mb-4">
            <h4 className="skills-header">skills: </h4>
            {skills.map((value, index) => {
              return (
                <span key={index}>
                  {value}
                  {index !== skills.length - 1 && (
                    <span className="comma">, </span>
                  )}
                </span>
              );
            })}
          </div>
          <h4 className="desc-header">description:</h4>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Project;
