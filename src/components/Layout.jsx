import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { site, nav } from "../content.js";

const titles = { "/": "About", "/work": "Work", "/speaking": "Speaking", "/projects": "Projects", "/contact": "Contact" };

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const page = titles[pathname];
    document.title = page ? `${page} — ${site.name}` : site.name;
  }, [pathname]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar__head">
          <Link to="/" className="brand">
            <h1 className="brand__name">{site.name}</h1>
            <p className="brand__tagline">{site.tagline}</p>
          </Link>
          <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav id="site-nav" className={`nav${open ? " open" : ""}`} aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="sidebar__foot">© {new Date().getFullYear()} {site.name}</div>
      </aside>
      <main className="main">
        <div className="page">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
