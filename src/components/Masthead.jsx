export default function Masthead({ title, em, left, right, page = false }) {
  return (
    <section className={`masthead${page ? " masthead--page" : ""}`}>
      <h1>
        {title}
        {em && (
          <>
            <br />
            <em>{em}</em>
          </>
        )}
      </h1>
      {(left || right) && (
        <div className="masthead__row">
          <span className="label">{left}</span>
          <span className="label">{right}</span>
        </div>
      )}
    </section>
  );
}
