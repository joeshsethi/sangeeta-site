import { speaking } from "../content.jsx";
import LinkList from "../components/LinkList.jsx";

export default function Speaking() {
  return (
    <>
      <h2 className="section-heading">{speaking.heading}</h2>
      <div className="hero-photo">
        <img src={speaking.photo} alt="Sangeeta Singh-Kurtz speaking on stage at TechBBQ 2022" width="1500" height="1000" />
      </div>
      <LinkList items={speaking.items} />
    </>
  );
}
