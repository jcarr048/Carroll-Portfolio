import React from "react";
import image from "../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

const imageAltText = "working desk background";

const description =
  "Former public school teacher for 8+ years, who has now found a passion creating digital content through software development.";

const skillsList = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Python",
  "React.js",
  "Vue.js",
  "npm",
  "Express.js",
  "Node.js",
  "Postgres",
  "MongoDB",
];

const detailOrQuote =
  "I am an effective communicator who has experience working in dynamic environments and with diverse stakeholders. I am excited to bring my technical skills and teaching experience to a company based in the DC metro area.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
