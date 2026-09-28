import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { site, nav } from "../content.js";

const ORIGIN = "https://www.sangeeta-s-kurtz.com";

// Per-page title and search-result description.
const meta = {
  "/": {
    title: null,
    description:
      "Sangeeta Singh-Kurtz is a fiction writer and freelance journalist. She was a staff writer at New York Magazine for five years and lives in Tokyo, where she recently completed her debut novel.",
  },
  "/work": {
    title: "Work",
    description:
      "Selected features, investigations, and profiles by Sangeeta Singh-Kurtz, published in New York Magazine, The Cut, and Vulture.",
  },
  "/speaking": { title: "Speaking", description: "Talks, podcasts, and broadcast appearances by Sangeeta Singh-Kurtz." },
  "/projects": { title: "Projects", description: "Podcasts, newsletters, and media projects by Sangeeta Singh-Kurtz." },
  "/contact": { title: "Contact", description: "Get in touch with Sangeeta Singh-Kurtz." },
};

function setTag(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const m = meta[pathname] || meta["/"];
    document.title = m.title ? `${m.title} — ${site.name}` : `${site.name} — ${site.tagline}`;

    // Each page points at itself, so Google doesn't treat them as duplicates.
    const url = ORIGIN + (pathname === "/" ? "/" : pathname);
    setTag('link[rel="canonical"]', "href", url);
    setTag('meta[property="og:url"]', "content", url);
    setTag('meta[name="description"]', "content", m.description);
    setTag('meta[property="og:description"]', "content", m.description);
    setTag('meta[name="twitter:description"]', "content", m.description);
  }, [pathname]);

  return (
    <>
      <nav className="site-nav" aria-label="Main">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
