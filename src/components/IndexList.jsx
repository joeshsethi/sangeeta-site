import { pubFromUrl } from "../pub.js";

export default function IndexList({ items, start = 1 }) {
  return (
    <ol className="index">
      {items.map((it, i) => (
        <li key={it.url + it.title}>
          <a className="index__item" href={it.url} target="_blank" rel="noopener noreferrer">
            <span className="index__n">{String(start + i).padStart(2, "0")}</span>
            <div>
              <h3 className="index__title">{it.title}</h3>
              {it.blurb && <p className="index__dek">{it.blurb}</p>}
            </div>
            <span className="index__pub">{it.pub || pubFromUrl(it.url)}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
