import React from "react";
import image from "../images/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg";

const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "ReVinyl",
    description:
      "Gives users the opportunity to view records available for buying or trading, as well as allowing them to add records to a wishlist for purchase at a later time",
    url: "https://revinyl-frontend.herokuapp.com/",
  },
  {
    title: "TailGreat",
    description:
      "Allows users the to host a tailgate or join an existing tailgate. Hosts have a separate login from users and have different functionality from users as well.",
    url: "https://dashboard.heroku.com/apps/tailgreat-app",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", paddingLeft: "1em" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
