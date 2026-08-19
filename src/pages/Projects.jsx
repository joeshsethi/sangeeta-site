import { projects } from "../content.js";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

export default function Projects() {
  return (
    <>
      <Masthead page title="Projects" left={projects.heading} right={projects.mastheadRight} />
      {projects.photo && (<figure className="page-figure">
        <img src={projects.photo} alt={projects.photoAlt || ""} width="1500" height="1000" />
      </figure>)}
      <section className="section">
        <div className="section__hd">
          <h2>Selected Projects</h2>
        </div>
        <IndexList items={projects.items} />
      </section>
    </>
  );
}
