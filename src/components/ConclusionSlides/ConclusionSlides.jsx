import './ConclusionSlides.css';

/* ===================================================
   FIX & CONCLUSION SECTION — Custom Slide Renderers
   Theme: olive (warm dark olive / mossy earth)
   =================================================== */

export const renderConclusionSlide = (renderId) => {
  switch (renderId) {

    /* ────────────────────────────────────────────
       SLIDE 1 — How Do We Fix This?
       ──────────────────────────────────────────── */
    case 'fix-how':
      return (
        <>
          <div className="co-big-quote">
            &ldquo;We cannot build a strong Pakistan on fake history.&rdquo;
          </div>

          <div className="co-arrow-flow">
            <div className="co-flow-box">Fake history taught</div>
            <div className="co-flow-arrow">→</div>
            <div className="co-flow-box">Narrow minds shaped</div>
            <div className="co-flow-arrow">→</div>
            <div className="co-flow-box">Weak institutions built</div>
            <div className="co-flow-arrow">→</div>
            <div className="co-flow-box">Nation fails to grow</div>
          </div>

          <div className="co-grid-2">
            <div className="co-info-card">
              <div className="co-info-label">What Aziz didn&apos;t do</div>
              <div className="co-info-value">
                Give a five-point government plan.
              </div>
              <div className="co-info-small">
                He wrote for posterity — not for the rulers who would ignore him
                anyway.
              </div>
            </div>
            <div className="co-info-card">
              <div className="co-info-label">What Aziz did do</div>
              <div className="co-info-value">
                Prove the problem exists — rigorously.
              </div>
              <div className="co-info-small">
                66 textbooks. Grades 1–14. Every distortion documented. The
                evidence is undeniable.
              </div>
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 2 — Practical Solutions
       ──────────────────────────────────────────── */
    case 'fix-solutions':
      return (
        <>
          <div className="co-highlight-box">
            <div className="co-fix-item">
              <div className="co-fix-num">01</div>
              <div className="co-fix-body">
                <div className="co-fix-title">
                  Honest textbooks — written by historians, not bureaucrats
                </div>
                <div className="co-fix-desc">
                  Real academics, not government officers trying to please
                  whoever is in power that year.
                </div>
              </div>
            </div>
            <div className="co-fix-item">
              <div className="co-fix-num">02</div>
              <div className="co-fix-body">
                <div className="co-fix-title">
                  Academic freedom — the right to question without fear
                </div>
                <div className="co-fix-desc">
                  Students and teachers who can debate, challenge, and disagree
                  openly — in classrooms, not just in WhatsApp groups at midnight.
                </div>
              </div>
            </div>
            <div className="co-fix-item">
              <div className="co-fix-num">03</div>
              <div className="co-fix-body">
                <div className="co-fix-title">
                  Go beyond the textbook — AI, global authors, multiple sources
                </div>
                <div className="co-fix-desc">
                  In 2026, the tools exist. One prompt contradicts a decade of
                  wrong dates. Use them.
                </div>
              </div>
            </div>
          </div>

          <div className="co-info-card">
            <div className="co-info-label">Still happening in 2026</div>
            <div className="co-info-value">
              Students memorizing wrong dates and one-sided stories — not out of
              belief, but out of fear.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 3 — Let's Wake Up (Conclusion)
       ──────────────────────────────────────────── */
    case 'fix-conclusion':
      return (
        <>
          <div className="co-highlight-box">
            <div className="co-concl-item">
              <div className="co-concl-dot" />
              <div className="co-concl-text">
                This book was written in 1985. In 2026, we are still having the
                same conversation.
              </div>
            </div>
            <div className="co-concl-item">
              <div className="co-concl-dot" />
              <div className="co-concl-text">
                Wrong history produces narrow students — those who can only see
                &ldquo;us versus them,&rdquo; never the full picture.
              </div>
            </div>
            <div className="co-concl-item">
              <div className="co-concl-dot" />
              <div className="co-concl-text">
                Real love for Pakistan means the courage to accept both the proud
                and the painful truths of our past.
              </div>
            </div>
            <div className="co-concl-item">
              <div className="co-concl-dot" />
              <div className="co-concl-text">
                Stop blind memorizing. Start thinking, questioning, and reading
                from many sources.
              </div>
            </div>
          </div>

          <div className="co-final-quote">
            &ldquo;A nation built on myths and lies can never become truly
            great.&rdquo;
          </div>
        </>
      );

    default:
      return <p>Slide content not found.</p>;
  }
};
