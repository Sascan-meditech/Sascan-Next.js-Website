/* Home page trust strip: four key numbers.
   Fill in `value` for each number (a whole number) — entries left as null show "—" until the real figure is added.
   `suffix` is shown after the number (e.g. "+", "K+"). Numbers count up when the strip scrolls into view. */

const FOUNDED = 2015;

const STATS = [
  { value: null, suffix: "+", label: "Patients screened" },
  { value: 221, suffix: "+", label: "Hospitals connected" },
  { value: new Date().getFullYear() - FOUNDED, suffix: "+", label: `Years of R&D since ${FOUNDED}` },
  { value: null, suffix: "", label: "States reached" },
];

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Sascan in numbers">
      <div className="container">
        <ul className="trust__stats reveal">
          {STATS.map((s) => (
            <li key={s.label} className="trust__stat">
              <span className="trust__num">
                {s.value == null ? (
                  <span className="trust__todo" title="Number to be added">—</span>
                ) : (
                  <><span data-count={s.value}>{s.value.toLocaleString("en-IN")}</span>{s.suffix}</>
                )}
              </span>
              <span className="trust__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
