import { site, about } from "../content.js";
import Rich from "../components/Rich.jsx";

export default function About() {
  return (
    <>
      <p className="lede">
        {site.name} is <Rich text={about.lede.replace(/^A freelance/, "a freelance")} />{" "}
        <Rich text={about.dek} />
      </p>
      <p className="social">
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        {" | "}
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <figure className="hero-photo about-photo" style={{ margin: 0 }}>
        <img src={about.photo} alt={`${site.name}, portrait`} width="1500" height="1000" />
        {about.photoCreditName && (
          <figcaption className="credit">
            Photograph by{" "}
            {about.photoCreditUrl
              ? <a href={about.photoCreditUrl} target="_blank" rel="noopener noreferrer">{about.photoCreditName}</a>
              : about.photoCreditName}
          </figcaption>
        )}
      </figure>
    </>
  );
}
