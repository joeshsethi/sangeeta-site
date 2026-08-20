import Rich from "./Rich.jsx";
import { pubFromUrl } from "../pub.js";

// Underlined title — publication, with an optional small dek line.
export default function Rows({ items, deks = false }) {
  return (
    <ul className="rows">
      {items.map((it) => (
        <li key={it.url + it.title}>
          <a href={it.url} target="_blank" rel="noopener noreferrer">{it.title}</a>
          <span className="m"> — {it.pub || pubFromUrl(it.url)}</span>
          {deks && it.blurb && (
            <p className="dek"><Rich text={it.blurb} /></p>
          )}
        </li>
      ))}
    </ul>
  );
}
