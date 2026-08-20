import { Link } from "react-router-dom";
import { site, about, work } from "../content.js";
import Rich from "../components/Rich.jsx";
import Rows from "../components/Rows.jsx";

export default function About() {
  const selected = work.sections.flatMap((s) => s.items).slice(0, about.selectedCount || 3);
  return (
    <>
      <section className="hero">
        <img src={about.photo} alt={`${site.name}, portrait`} width="1500" height="1031" />
        <h1>{site.name}</h1>
      </section>
      {about.photoCreditName && (
        <p className="hero-credit">
          Photograph by{" "}
          {about.photoCreditUrl
            ? <a href={about.photoCreditUrl} target="_blank" rel="noopener noreferrer">{about.photoCreditName}</a>
            : about.photoCreditName}
        </p>
      )}
      <section className="sheet">
        <h2>About</h2>
        <p className="lede">
          {site.name} is <Rich text={about.lede.replace(/^A freelance/, "a freelance")} />
        </p>
        {about.dek && <p className="lede"><Rich text={about.dek} /></p>}
        <p className="links">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/contact">Contact</Link>
        </p>
      </section>
      <section className="sheet">
        <h2>Selected Work</h2>
        <Rows items={selected} />
        <Link className="view-all" to="/work">View all work →</Link>
      </section>
    </>
  );
}
