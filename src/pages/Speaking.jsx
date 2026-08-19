import { speaking } from "../content.jsx";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

export default function Speaking() {
  return (
    <>
      <Masthead page title="Speaking" left={speaking.heading} right="Panels · Podcasts · Broadcast" />
      <figure className="page-figure">
        <img src={speaking.photo} alt="Sangeeta Singh-Kurtz speaking on stage at TechBBQ 2022" width="1500" height="1000" />
      </figure>
      <section className="section">
        <div className="section__hd">
          <h2>Appearances</h2>
        </div>
        <IndexList items={speaking.items} />
      </section>
    </>
  );
}
