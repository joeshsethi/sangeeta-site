import { site, about } from "../content.jsx";

export default function About() {
  return (
    <>
      <p className="lede">
        {site.name} is a freelance journalist who investigates intriguing people. She was a
        staff writer at{" "}
        <a href="https://nymag.com/" target="_blank" rel="noopener noreferrer">
          New York Magazine
        </a>{" "}
        for five years. She lives in Tokyo, where she recently completed her debut novel.
      </p>
      <p className="social">
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        {" | "}
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <figure className="hero-photo about-photo" style={{ margin: 0 }}>
        <img src={about.photo} alt={`${site.name}, portrait`} width="1500" height="1000" />
        <figcaption className="credit">
          Photograph by{" "}
          <a href={about.photoCredit.url} target="_blank" rel="noopener noreferrer">
            {about.photoCredit.name}
          </a>
        </figcaption>
      </figure>
    </>
  );
}
