import { speaking } from "../content.js";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

export default function Speaking() {
  return (
    <>
      <Masthead page title="Speaking" left={speaking.heading} right={speaking.mastheadRight} />
      {speaking.photo && (<figure className="page-figure">
        <img src={speaking.photo} alt={speaking.photoAlt || ""} width="1500" height="1000" />
      </figure>)}
      <section className="section">
        <div className="section__hd">
          <h2>Appearances</h2>
        </div>
        <IndexList items={speaking.items} />
      </section>
    </>
  );
}
