import { JSX } from "react";
const Contact = (): JSX.Element => {
  return (
    <section className="bg-gray-950 w-screen font-mono text-lime-500 overflow-y-auto text-center pb-20">
      <ul>
        <li>
          <a href="mailto:dyandra.allen@gmail.com">email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dyandra-allen-165384156/">
            linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/queendallen">github</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
