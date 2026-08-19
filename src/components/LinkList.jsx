import Rich from "./Rich.jsx";

// Squarespace-style list: "Title | blurb" (Speaking uses the outlet as the blurb).
export default function LinkList({ items }) {
  return (
    <ul className="list">
      {items.map((it) => {
        const tail = it.blurb || it.pub;
        const title = it.blurb && it.pub ? `${it.title}, ${it.pub}` : it.title;
        return (
          <li key={it.url + it.title}>
            <a href={it.url} target="_blank" rel="noopener noreferrer">{title}</a>
            {tail && (<><span className="sep">|</span><Rich text={tail} /></>)}
          </li>
        );
      })}
    </ul>
  );
}
