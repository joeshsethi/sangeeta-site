import { work } from "../content.js";
import LinkList from "../components/LinkList.jsx";

export default function Work() {
  return (
    <>
      {work.sections.map((s) => (
        <section key={s.heading}>
          <h2 className="section-heading">{s.heading}</h2>
          <LinkList items={s.items} />
        </section>
      ))}
      <div className="gallery" aria-label="Selected clips">
        {(work.clips || []).map((src, i) => (
          <img key={src} src={src} alt={`Published work ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </>
  );
}
