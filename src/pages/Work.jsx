import { work } from "../content.js";
import Rows from "../components/Rows.jsx";

export default function Work() {
  return (
    <section className="sheet">
      {work.sections.map((s) => (
        <div key={s.heading}>
          <h3>{s.heading}</h3>
          <Rows items={s.items} deks />
        </div>
      ))}
      {(work.clips || []).length > 0 && (
        <div className="clips" aria-label="Selected clips">
          {work.clips.map((src, i) => (
            <img key={src} src={src} alt={`Published work, clipping ${i + 1}`} loading="lazy" />
          ))}
        </div>
      )}
    </section>
  );
}
