export default function LinkList({ items }) {
  return (
    <ul className="list">
      {items.map((it) => (
        <li key={it.url + it.title}>
          <a href={it.url} target="_blank" rel="noopener noreferrer">
            {it.title}
          </a>
          {it.blurb && (
            <>
              <span className="sep">|</span>
              {it.blurb}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
