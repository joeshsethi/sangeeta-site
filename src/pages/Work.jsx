import { work } from "../content.js";
import Masthead from "../components/Masthead.jsx";
import IndexList from "../components/IndexList.jsx";

export default function Work() {
  let n = 1;
  return (
    <>
      <Masthead page title="Work" left={work.mastheadLeft} right={work.mastheadRight} />
      {work.sections.map((s) => {
        const start = n;
        n += s.items.length;
        return (
          <section className="section" key={s.heading}>
            <div className="section__hd">
              <h2>{s.heading}</h2>
              <span className="label">{String(s.items.length).padStart(2, "0")} pieces</span>
            </div>
            <IndexList items={s.items} start={start} />
          </section>
        );
      })}
      <section className="section">
        <div className="section__hd">
          <h2>In Print</h2>
        </div>
        <div className="clips">
          {(work.clips || []).map((src, i) => (
            <img key={src} src={src} alt={`Published work, clipping ${i + 1}`} loading="lazy" />
          ))}
        </div>
      </section>
    </>
  );
}
