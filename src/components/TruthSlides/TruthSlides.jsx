import './TruthSlides.css';

/* ===================================================
   TRUTH SECTION — Custom Slide Renderers
   Theme: sage (earthy olive/green tones)
   =================================================== */

export const renderTruthSlide = (renderId) => {
  switch (renderId) {

    /* ────────────────────────────────────────────
       SLIDE 1 — Truths (Hook)
       ──────────────────────────────────────────── */
    case 'truth-hook':
      return (
        <>
          <div className="tr-big-quote">
            &ldquo;We&apos;ve been told many lies — and we memorized them for exams.&rdquo;
          </div>

          <div className="tr-q-grid">
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Did Pakistan really win in 1965?
            </div>
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Did the army only fall into conspiracy in 1971?
            </div>
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Was independence on 14 August?
            </div>
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Was the Resolution passed on 23 March?
            </div>
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Did Iqbal really dream of Pakistan?
            </div>
            <div className="tr-q-item">
              <span className="tr-q-mark">?</span>
              Was 1857 really a War of Independence?
            </div>
          </div>

          <div className="tr-info-card">
            <div className="tr-info-label">What K.K. Aziz found</div>
            <div className="tr-info-value">
              66 textbooks. Grades 1 to 14. All distorted for political ends.
            </div>
            <div className="tr-info-small">
              Not accidental errors — a deliberate, sustained, state-sponsored
              rewriting of reality.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 2 — Key Dates & Iqbal
       ──────────────────────────────────────────── */
    case 'truth-dates':
      return (
        <>
          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — Lahore Resolution</div>
              <div className="tr-myth-text">
                Passed on 23 March 1940. Demanded Pakistan as one unified state.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — Lahore Resolution</div>
              <div className="tr-truth-text">
                Actually passed on 24 March. Demanded &ldquo;independent states&rdquo;
                — plural. Word &ldquo;Pakistan&rdquo; never appeared.
              </div>
            </div>
          </div>

          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — Independence Day</div>
              <div className="tr-myth-text">
                Pakistan became independent on 14 August 1947.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — Independence Day</div>
              <div className="tr-truth-text">
                Legally independent on 15 August 1947. The 14th is a political
                choice, not a legal fact.
              </div>
            </div>
          </div>

          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — Iqbal 1930</div>
              <div className="tr-myth-text">
                Iqbal envisioned and demanded a separate independent Pakistan.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — Iqbal 1930</div>
              <div className="tr-truth-text">
                Proposed one autonomous Muslim province within an Indian federation.
                Never demanded full separation. Never used the word
                &ldquo;Pakistan.&rdquo;
              </div>
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 3 — Wars
       ──────────────────────────────────────────── */
    case 'truth-wars':
      return (
        <>
          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — 1965</div>
              <div className="tr-myth-text">
                Pakistan won a glorious victory against India.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — 1965</div>
              <div className="tr-truth-text">
                Ended in a stalemate. Tashkent Agreement followed — Ayub Khan
                returned all captured positions quietly.
              </div>
            </div>
          </div>

          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — 1971</div>
              <div className="tr-myth-text">
                Our brave army fell only to a Hindu-India conspiracy.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — 1971</div>
              <div className="tr-truth-text">
                Internal political failures and suppressed Bengali grievances
                played an equally decisive role. Indian intervention came after,
                not instead of, our own failures.
              </div>
            </div>
          </div>

          <div className="tr-highlight-box">
            <div className="tr-hl-label">The pattern</div>
            <div className="tr-hl-text">
              Every military failure is reframed as external conspiracy. Every
              political failure is erased. The textbook is not a history — it is
              a cover story.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 4 — 1857 & Beyond
       ──────────────────────────────────────────── */
    case 'truth-1857':
      return (
        <>
          <div className="tr-myth-truth-row">
            <div className="tr-myth-box">
              <div className="tr-myth-label">Myth — 1857</div>
              <div className="tr-myth-text">
                A national War of Independence, mainly led by Muslims.
              </div>
            </div>
            <div className="tr-truth-box">
              <div className="tr-truth-label">Truth — 1857</div>
              <div className="tr-truth-text">
                A sepoy mutiny that became a limited uprising in a few areas —
                mainly Delhi and UP. Not national. Not a war of independence.
              </div>
            </div>
          </div>

          <div className="tr-grid-2">
            <div className="tr-info-card">
              <div className="tr-info-label">Maududi — the rewrite</div>
              <div className="tr-info-value">
                Strongly opposed Pakistan&apos;s creation
              </div>
              <div className="tr-info-small">
                Shown in textbooks as one of its ideological founders. The irony
                is total.
              </div>
            </div>
            <div className="tr-info-card">
              <div className="tr-info-label">Congress — the rewrite</div>
              <div className="tr-info-value">Founded as a secular party</div>
              <div className="tr-info-small">
                Had many Muslim leaders. Textbooks present it as a purely Hindu
                organization.
              </div>
            </div>
          </div>

          <div className="tr-info-card">
            <div className="tr-info-label">And the rest</div>
            <div className="tr-info-value">
              Wrong qualifications, wrong dates, wrong events — and post-1947
              history rewritten to glorify every ruler and hide every failure.
            </div>
          </div>
        </>
      );

    default:
      return <p>Slide content not found.</p>;
  }
};
