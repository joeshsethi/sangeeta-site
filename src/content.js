// Content lives in /content/*.json (editable via Pages CMS). This module just re-exports it.
import site from "../content/site.json";
import about from "../content/about.json";
import work from "../content/work.json";
import speaking from "../content/speaking.json";
import projects from "../content/projects.json";
import contact from "../content/contact.json";

export { site, about, work, speaking, projects, contact };

export const nav = [
  { to: "/", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];
