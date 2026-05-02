import './MythsSlides.css';

/* ===================================================
   MYTHS SECTION — Custom Slide Renderers
   Each function returns the inner content for one card.
   Theme: maroon (deep crimson dark)
   =================================================== */

export const renderMythsSlide = (renderId) => {
  switch (renderId) {

    /* ────────────────────────────────────────────
       SLIDE 1 — Overview of the Problem
       ──────────────────────────────────────────── */
    case 'myths-overview':
      return (
        <>
          <div className="my-stat-row">
            <div className="my-stat">
              <div className="my-stat-num">66</div>
              <div className="my-stat-label">textbooks analyzed by Aziz</div>
            </div>
            <div className="my-stat">
              <div className="my-stat-num">1–14</div>
              <div className="my-stat-label">grades affected</div>
            </div>
            <div className="my-stat">
              <div className="my-stat-num">1947–</div>
              <div className="my-stat-label">distortion ongoing since founding</div>
            </div>
          </div>

          <div className="my-item-list">
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Compared textbook claims directly against verifiable historical sources
              </div>
            </div>
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Found errors, distortions, and deliberate manipulation — not occasional mistakes
              </div>
            </div>
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Students forced to memorize incorrect information — and examined on it
              </div>
            </div>
          </div>

          <div className="my-info-card">
            <div className="my-info-label">Aziz&apos;s verdict</div>
            <div className="my-info-value">This was not carelessness. It was a policy.</div>
            <div className="my-info-small">
              History rewritten from the top — to serve the state, not the student.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 2 — Errors & Distorted Events
       ──────────────────────────────────────────── */
    case 'myths-errors':
      return (
        <>
          <div className="my-grid-2">
            <div className="my-myth-box">
              <div className="my-myth-label">What textbooks say</div>
              <div className="my-myth-text">
                Lahore Resolution passed 23 March 1940. Muslim League founded on
                the correct date. 1947 Partition — a simple, clean Muslim victory.
              </div>
            </div>
            <div className="my-truth-box">
              <div className="my-truth-label">What actually happened</div>
              <div className="my-truth-text">
                Resolution passed 24 March. Wrong dates throughout. Partition involved
                mass violence, displacement, and enormous human tragedy — on all sides.
              </div>
            </div>
          </div>

          <div className="my-highlight-box">
            <div className="my-hl-label">The narrative problem</div>
            <div className="my-hl-text">
              Muslim suffering in Partition is covered. The suffering of others —
              largely ignored. One-sided grief is not history. It is propaganda with footnotes.
            </div>
          </div>

          <div className="my-info-card">
            <div className="my-info-label">The pattern</div>
            <div className="my-info-value">Every error tilts in the same direction.</div>
            <div className="my-info-small">
              Not random mistakes — a consistent editorial bias running across all
              66 books, all grades, all decades.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 3 — Bias & False Glorification
       ──────────────────────────────────────────── */
    case 'myths-bias':
      return (
        <>
          <div className="my-grid-2">
            <div className="my-info-card">
              <div className="my-info-label">Muslim rulers</div>
              <div className="my-info-value">Ideal. Flawless. Divinely guided.</div>
              <div className="my-info-small">
                No failures, no atrocities, no complexity. Sanitized beyond recognition.
              </div>
            </div>
            <div className="my-info-card">
              <div className="my-info-label">Hindu community</div>
              <div className="my-info-value">Consistently portrayed negatively.</div>
              <div className="my-info-small">
                Reduced to an obstacle in Pakistan&apos;s story — not a people with
                their own history.
              </div>
            </div>
          </div>

          <div className="my-grid-2">
            <div className="my-info-card">
              <div className="my-info-label">British — inconsistent</div>
              <div className="my-info-value">Villain when convenient. Neutral when not.</div>
              <div className="my-info-small">
                Portrayed based on what serves the narrative in each chapter, not
                historical fact.
              </div>
            </div>
            <div className="my-info-card">
              <div className="my-info-label">Jinnah — mythologized</div>
              <div className="my-info-value">Infallible. Superhuman. Unquestionable.</div>
              <div className="my-info-small">
                A complex, real historical figure reduced to a statue. Blind admiration
                — not critical understanding.
              </div>
            </div>
          </div>

          <div className="my-highlight-box">
            <div className="my-hl-label">Net effect</div>
            <div className="my-hl-text">
              Students learn to worship, not to think. The textbook doesn&apos;t teach
              history — it teaches loyalty.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 4 — Omissions & Impact
       ──────────────────────────────────────────── */
    case 'myths-omissions':
      return (
        <>
          <div className="my-grid-2">
            <div className="my-info-card">
              <div className="my-info-label">What&apos;s missing</div>
              <div className="my-info-value">Non-Muslim contributions — erased.</div>
              <div className="my-info-small">
                Regional cultures, languages, and identities — Sindhi, Baloch, Bengali
                — drastically underrepresented or ignored entirely.
              </div>
            </div>
            <div className="my-info-card">
              <div className="my-info-label">Why it&apos;s deliberate</div>
              <div className="my-info-value">Omission is the quietest form of lie.</div>
              <div className="my-info-small">
                You don&apos;t have to write a falsehood. You just don&apos;t write
                the truth. The silence does the work.
              </div>
            </div>
          </div>

          <div className="my-item-list">
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Promotes a narrow, singular national identity —{' '}
                <span className="my-item-muted">at the cost of Pakistan&apos;s actual diversity</span>
              </div>
            </div>
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Replaces real understanding with memorization —{' '}
                <span className="my-item-muted">students pass exams, learn nothing real</span>
              </div>
            </div>
            <div className="my-item-row">
              <div className="my-item-dot" />
              <div className="my-item-text">
                Generations shaped by gaps —{' '}
                <span className="my-item-muted">what you never learn, you never question</span>
              </div>
            </div>
          </div>

          <div className="my-info-card">
            <div className="my-info-label">K.K. Aziz&apos;s closing warning</div>
            <div className="my-info-value">
              &ldquo;Concealing the past does not help a country grow. It only delays
              the reckoning.&rdquo;
            </div>
          </div>
        </>
      );

    default:
      return <p>Slide content not found.</p>;
  }
};
