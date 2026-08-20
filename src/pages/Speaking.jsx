import { speaking } from "../content.js";
import Rows from "../components/Rows.jsx";

export default function Speaking() {
  return (
    <section className="sheet">
      <h2>Speaking</h2>
      {speaking.photo && (
        <figure className="page-figure" style={{ marginLeft: 0, marginRight: 0 }}>
          <img src={speaking.photo} alt={speaking.photoAlt || ""} width="1500" height="1000" />
        </figure>
      )}
      <h3>{speaking.heading}</h3>
      <Rows items={speaking.items} />
    </section>
  );
}
