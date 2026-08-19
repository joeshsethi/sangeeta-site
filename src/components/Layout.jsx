import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { site, nav } from "../content.jsx";

const titles = {
  "/": null,
  "/work": "Work",
  "/speaking": "Speaking",
  "/projects": "Projects",
  "/contact": "Contact",
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = titles[pathname];
    document.title = page ? `${page} — ${site.name}` : `${site.name} — ${site.tagline}`;
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-header__brand">
          <b>{site.name}</b> · {site.tagline} · Tokyo
        </Link>
        <nav className="site-nav" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span className="label">© {new Date().getFullYear()} {site.name}</span>
        <span className="label">
          <a className="ul" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          {"   ·   "}
          <a className="ul" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </footer>
    </>
  );
}
