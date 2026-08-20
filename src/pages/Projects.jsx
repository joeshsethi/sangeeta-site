import { projects } from "../content.js";
import Rows from "../components/Rows.jsx";

export default function Projects() {
  return (
    <section className="sheet">
      <h2>Projects</h2>
      {projects.photo && (
        <figure className="page-figure" style={{ marginLeft: 0, marginRight: 0 }}>
          <img src={projects.photo} alt={projects.photoAlt || ""} width="1500" height="1000" />
        </figure>
      )}
      <h3>{projects.heading}</h3>
      <Rows items={projects.items} deks />
    </section>
  );
}
