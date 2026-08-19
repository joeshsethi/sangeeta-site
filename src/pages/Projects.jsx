import { projects } from "../content.jsx";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

export default function Projects() {
  return (
    <>
      <Masthead page title="Projects" left={projects.heading} right="Audio · Newsletters · Features" />
      <figure className="page-figure">
        <img src={projects.photo} alt="Land of the Giants: Dating Games, podcast artwork" width="1500" height="1000" />
      </figure>
      <section className="section">
        <div className="section__hd">
          <h2>Selected Projects</h2>
        </div>
        <IndexList items={projects.items} />
      </section>
    </>
  );
}
