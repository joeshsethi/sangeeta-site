import { Link } from "react-router-dom";
import { site, about, work } from "../content.js";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";
import Rich from "../components/Rich.jsx";

function splitName(full) {
  const i = full.indexOf(" ");
  return i === -1 ? [full, ""] : [full.slice(0, i), full.slice(i + 1)];
}

export default function About() {
  const [first, rest] = splitName(site.name);
  const selected = work.sections.flatMap((s) => s.items).slice(0, about.selectedCount || 3);
  return (
    <>
      <Masthead title={first} em={rest} left={about.mastheadLeft} right={about.mastheadRight} />
      <section className="hero">
        <div className="hero__media">
          <img src={about.photo} alt={`${site.name}, portrait`} width="1500" height="1125" />
          {about.photoCreditName && (
            <p className="hero__credit">
              Photograph by{" "}
              {about.photoCreditUrl ? (
                <a href={about.photoCreditUrl} target="_blank" rel="noopener noreferrer">{about.photoCreditName}</a>
              ) : (
                about.photoCreditName
              )}
            </p>
          )}
        </div>
        <div className="hero__bio">
          <div>
            <p className="hero__lede"><Rich text={about.lede} /></p>
            {about.dek && <p className="hero__dek"><Rich text={about.dek} /></p>}
          </div>
          <div className="hero__links">
            {site.instagram && <a className="ul" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
            {site.linkedin && <a className="ul" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            <Link className="ul" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__hd">
          <h2>Selected Work</h2>
          <Link to="/work">View all →</Link>
        </div>
        <IndexList items={selected} />
      </section>
    </>
  );
}
