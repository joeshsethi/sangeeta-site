import { Link } from "react-router-dom";
import { site, about, work } from "../content.jsx";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

const [first, last] = ["Sangeeta", "Singh-Kurtz"];
const selected = work.sections[0].items.slice(0, 3);

export default function About() {
  return (
    <>
      <Masthead
        title={first}
        em={last}
        left="Features · Profiles · Investigations"
        right="Formerly New York Magazine"
      />
      <section className="hero">
        <div className="hero__media">
          <img src={about.photo} alt={`${site.name}, portrait`} width="1500" height="1125" />
          <p className="hero__credit">
            Photograph by{" "}
            <a href={about.photoCredit.url} target="_blank" rel="noopener noreferrer">
              {about.photoCredit.name}
            </a>
          </p>
        </div>
        <div className="hero__bio">
          <div>
            <p className="hero__lede">
              A freelance journalist who investigates intriguing people. She was a staff writer at{" "}
              <a href="https://nymag.com/" target="_blank" rel="noopener noreferrer">New York Magazine</a>{" "}
              for five years.
            </p>
            <p className="hero__dek">She lives in Tokyo, where she recently completed her debut novel.</p>
          </div>
          <div className="hero__links">
            <a className="ul" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="ul" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
