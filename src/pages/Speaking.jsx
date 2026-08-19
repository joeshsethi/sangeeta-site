import { speaking } from "../content.js";
import LinkList from "../components/LinkList.jsx";

export default function Speaking() {
  return (
    <>
      <h2 className="section-heading">{speaking.heading}</h2>
      {speaking.photo && (
        <div className="hero-photo">
          <img src={speaking.photo} alt={speaking.photoAlt || ""} width="1500" height="1000" />
        </div>
      )}
      <LinkList items={speaking.items} />
    </>
  );
}
