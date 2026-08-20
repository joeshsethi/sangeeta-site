import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { site, nav } from "../content.js";

const titles = { "/": null, "/work": "Work", "/speaking": "Speaking", "/projects": "Projects", "/contact": "Contact" };

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = titles[pathname];
    document.title = page ? `${page} — ${site.name}` : `${site.name} — ${site.tagline}`;
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
        © {new Date().getFullYear()} {site.name} &nbsp;·&nbsp;{" "}
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        {" "}&nbsp;·&nbsp;{" "}
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </>
  );
}
