import './ProblemSlides.css';

/* ===================================================
   PROBLEM SECTION — Custom Slide Renderers
   Theme: ink (cool dark slate / charcoal with red accent)
   =================================================== */

export const renderProblemSlide = (renderId) => {
  switch (renderId) {

    /* ────────────────────────────────────────────
       SLIDE 1 — Who Is Responsible?
       ──────────────────────────────────────────── */
    case 'problem-who':
      return (
        <>
          <div className="pr-big-quote">
            &ldquo;No single individual is to blame. The distortion is systemic
            — and that makes it far harder to fix.&rdquo;
          </div>

          <div className="pr-grid-3">
            <div className="pr-info-card">
              <div className="pr-info-label">Actor 01</div>
              <div className="pr-info-value">The State</div>
              <div className="pr-info-small">
                Controls curriculum, approves content, decides what gets taught.
              </div>
            </div>
            <div className="pr-info-card">
              <div className="pr-info-label">Actor 02</div>
              <div className="pr-info-value">Political Leaders</div>
              <div className="pr-info-small">
                Used education as a tool for nation-building and ideological unity.
              </div>
            </div>
            <div className="pr-info-card">
              <div className="pr-info-label">Actor 03</div>
              <div className="pr-info-value">Authors &amp; Academia</div>
              <div className="pr-info-small">
                Lacked training, followed state expectations, stayed silent.
              </div>
            </div>
          </div>

          <div className="pr-highlight-box">
            <div className="pr-hl-label">Why systemic blame matters</div>
            <div className="pr-hl-text">
              When everyone is responsible, no one feels responsible. That is
              exactly how this distortion survived for decades — diffused,
              normalized, invisible.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 2 — Role of the State
       ──────────────────────────────────────────── */
    case 'problem-state':
      return (
        <>
          <div className="pr-arrow-flow">
            <div className="pr-flow-box">State sets curriculum</div>
            <div className="pr-flow-arrow">→</div>
            <div className="pr-flow-box">Approves textbooks</div>
            <div className="pr-flow-arrow">→</div>
            <div className="pr-flow-box">Pushes ideology</div>
            <div className="pr-flow-arrow">→</div>
            <div className="pr-flow-box">Distortion becomes normal</div>
          </div>

          <div className="pr-grid-2">
            <div className="pr-info-card">
              <div className="pr-info-label">The mechanism</div>
              <div className="pr-info-value">Curriculum as control.</div>
              <div className="pr-info-small">
                The government doesn&apos;t need censorship when it writes the
                textbook. Control the content — control the mind. No force required.
              </div>
            </div>
            <div className="pr-info-card">
              <div className="pr-info-label">The result</div>
              <div className="pr-info-value">Ideological agenda normalized.</div>
              <div className="pr-info-small">
                When distortion comes from the top, it stops looking like
                distortion. It just looks like education.
              </div>
            </div>
          </div>

          <div className="pr-highlight-box">
            <div className="pr-hl-label">Aziz&apos;s core argument</div>
            <div className="pr-hl-text">
              A state that controls what history is taught — and what is hidden
              — is not educating its citizens. It is managing them.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 3 — Political Leaders & Nation-Building
       ──────────────────────────────────────────── */
    case 'problem-leaders':
      return (
        <>
          <div className="pr-grid-2">
            <div className="pr-info-card">
              <div className="pr-info-label">The early logic</div>
              <div className="pr-info-value">
                Simplify history. Build unity. Create a nation.
              </div>
              <div className="pr-info-small">
                A new, fragile state needed a shared identity fast. Heroic
                narratives seemed like the practical answer in 1947.
              </div>
            </div>
            <div className="pr-info-card">
              <div className="pr-info-label">The long-term cost</div>
              <div className="pr-info-value">
                Oversimplification calcified into doctrine.
              </div>
              <div className="pr-info-small">
                What started as a short-term political tool became a permanent
                fixture — across every government, every era, every decade.
              </div>
            </div>
          </div>

          <div className="pr-item-list">
            <div className="pr-item-row">
              <div className="pr-item-dot" />
              <div className="pr-item-text">
                Leaders promoted heroic narratives —{' '}
                <span className="pr-item-muted">
                  complexity was seen as a threat to unity
                </span>
              </div>
            </div>
            <div className="pr-item-row">
              <div className="pr-item-dot" />
              <div className="pr-item-text">
                Each new government inherited the distortion —{' '}
                <span className="pr-item-muted">
                  and found it useful enough to keep
                </span>
              </div>
            </div>
            <div className="pr-item-row">
              <div className="pr-item-dot" />
              <div className="pr-item-text">
                Aziz&apos;s verdict: well-intentioned at first —{' '}
                <span className="pr-item-muted">
                  but inexcusable once the harm became clear
                </span>
              </div>
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 4 — Authors & Academic Institutions
       ──────────────────────────────────────────── */
    case 'problem-authors':
      return (
        <>
          <div className="pr-grid-2">
            <div className="pr-info-card">
              <div className="pr-info-label">The authors</div>
              <div className="pr-info-value">
                Undertrained. Or willingly compliant.
              </div>
              <div className="pr-info-small">
                Many lacked proper historical training. Others followed state
                expectations — for job security, approval, personal benefit.
              </div>
            </div>
            <div className="pr-info-card">
              <div className="pr-info-label">The institutions</div>
              <div className="pr-info-value">Silence as a strategy.</div>
              <div className="pr-info-small">
                Academia failed to uphold scholarly standards. They didn&apos;t
                actively distort — they just never objected. The silence was enough.
              </div>
            </div>
          </div>

          <div className="pr-highlight-box">
            <div className="pr-hl-label">The intellectual failure</div>
            <div className="pr-hl-text">
              Scholars who knew better said nothing. That is not neutrality — it
              is complicity. Aziz reserves his sharpest criticism for those who
              had the knowledge to resist and chose comfort instead.
            </div>
          </div>

          <div className="pr-info-card">
            <div className="pr-info-label">Net result</div>
            <div className="pr-info-value">
              Intellectual integrity collapsed — quietly, over decades, across
              every institution that should have protected it.
            </div>
          </div>
        </>
      );

    default:
      return <p>Slide content not found.</p>;
  }
};
