import { useState } from "react";
import { site, contact } from "../content.js";
import Masthead from "../components/Masthead.jsx";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured: open the visitor's mail client instead.
    if (!site.formEndpoint) {
      const subject = encodeURIComponent(data.get("subject") || "");
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("firstName")} ${data.get("lastName")} (${data.get("email")})`
      );
      window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus({ state: "sent", msg: "Thank you — your message has been sent." });
    } catch {
      setStatus({ state: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <>
      <Masthead page title="Contact" left={contact.mastheadLeft} right={contact.mastheadRight} />
      <section className="contact">
        <div className="contact__aside">
          <p>{contact.intro}</p>
          <span className="label">
            Elsewhere ·{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>{" "}
            ·{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form__row">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" autoComplete="given-name" required />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" autoComplete="family-name" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button className="btn" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>
          {status.msg && (
            <p className={`form__status${status.state === "error" ? " error" : ""}`} role="status">
              {status.msg}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
