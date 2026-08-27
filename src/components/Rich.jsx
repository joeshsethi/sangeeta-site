// Tiny inline renderer: *italics*, [text](url), and *[text](url)* (italic link).
const TOKEN = /(\*\[[^\]]+\]\(https?:\/\/[^)\s]+\)\*|\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*[^*]+\*)/g;
const LINK = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/;

export default function Rich({ text = "" }) {
  const parts = String(text).split(TOKEN).filter(Boolean);
  return parts.map((p, i) => {
    const italic = p.startsWith("*") && p.endsWith("*") && p.length > 2;
    const inner = italic ? p.slice(1, -1) : p;
    const link = inner.match(LINK);
    if (link) {
      const a = (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
      return italic ? <em key={i}>{a}</em> : a;
    }
    if (italic) return <em key={i}>{inner}</em>;
    return p;
  });
}
