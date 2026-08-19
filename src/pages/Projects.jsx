import { projects } from "../content.jsx";
import LinkList from "../components/LinkList.jsx";

export default function Projects() {
  return (
    <>
      <h2 className="section-heading">{projects.heading}</h2>
      <div className="hero-photo">
        <img src={projects.photo} alt="Land of the Giants: Dating Games, podcast artwork" width="1500" height="1000" />
      </div>
      <LinkList items={projects.items} />
    </>
  );
}
