const About = () => {
  const likes = ["crocheting", "frieren", "wikipedia deep dives"];
  const dislikes = [
    "being stuck in the middle of the ocean",
    "isekais",
    "bread"
  ];
  const skills = [
    "javasript",
    "react",
    "redux",
    "jest",
    "react testing library",
    "typescript",
    "agile",
    "git",
    "css/scss/tailwind"
  ];
  return (
    <section className="bg-gray-950 h-full w-screen font-mono text-lime-500 pb-40">
      <div className="flex flex-col text-center mb-16">
        <h1 className="text-2xl mb-8">DYANDRA ALLEN</h1>
        <h2 className="text-xl">
          Optimistic and receptive developer with experience maintaining and
          building foundational React interfaces to support various teams.
        </h2>
      </div>
      <div className="flex justify-center">
        <article className="w-2/5 rounded border-solid border-2 border-lime-500 py-4 px-8">
          <ul>
            <p className="text-lg">LIKES:</p>
            <div className="pl-8">
              {likes.map((name) => (
                <li>{name}</li>
              ))}
            </div>
          </ul>
        </article>
        <article className="w-2/5 rounded border-solid border-2 border-lime-500 py-4 px-8">
          <ul>
            <p className="text-lg">DISLIKES:</p>
            <div className="pl-8">
              {dislikes.map((name) => (
                <li>{name}</li>
              ))}
            </div>
          </ul>
        </article>
      </div>
      <article className="w-4/5 rounded border-solid border-2 border-lime-500 py-4 px-8 m-auto">
        <ul>
          <p>CAREER</p>
          <div className="pl-8">
            <li>
              <span>WORKING AS: </span>frontend developer
            </li>
            <li>
              <span>EXPERIENCE: </span>2 years
            </li>
            <li>
              <span>SKILLS: </span>
              <div className="pl-8">
                <ul>
                  {skills.map((name) => (
                    <li>{name}</li>
                  ))}
                </ul>
              </div>
            </li>
          </div>
        </ul>
      </article>
    </section>
  );
};

export default About;
