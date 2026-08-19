// Tiny inline renderer: *italics* and [text](url). Enough for blurbs and the bio.
const TOKEN = /(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*[^*]+\*)/g;

export default function Rich({ text = "" }) {
  const parts = String(text).split(TOKEN).filter(Boolean);
  return parts.map((p, i) => {
    const link = p.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    }
    if (p.startsWith("*") && p.endsWith("*") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
    return p;
  });
}
