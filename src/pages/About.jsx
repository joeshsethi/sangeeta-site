import { site, about } from "../content.js";
import Rich from "../components/Rich.jsx";
import Rows from "../components/Rows.jsx";

export default function About() {
  return (
    <>
      <section className="hero">
        <img src={about.photo} alt={`${site.name}, portrait`} />
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
        {(about.bio || []).map((p, i) => (
          <p className="lede" key={i}><Rich text={p} /></p>
        ))}
        <p className="links">
          {site.contactEmail && <a href={`mailto:${site.contactEmail}`}>Contact</a>}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
      {(about.selected || []).length > 0 && (
        <section className="sheet">
          <h2>Selected Work</h2>
          <Rows items={about.selected} />
        </section>
      )}
    </>
  );
}
