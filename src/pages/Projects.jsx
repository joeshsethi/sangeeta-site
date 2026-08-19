import { projects } from "../content.js";
import LinkList from "../components/LinkList.jsx";

export default function Projects() {
  return (
    <>
      <h2 className="section-heading">{projects.heading}</h2>
      {projects.photo && (
        <div className="hero-photo">
          <img src={projects.photo} alt={projects.photoAlt || ""} width="1500" height="1000" />
        </div>
      )}
      <LinkList items={projects.items} />
    </>
  );
}
