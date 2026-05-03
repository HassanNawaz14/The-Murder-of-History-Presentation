import './DamageSlides.css';

/* ===================================================
   DAMAGE SECTION — Custom Slide Renderers
   Each function returns the inner content for one card.
   =================================================== */

export const renderDamageSlide = (renderId) => {
  switch (renderId) {

    /* ────────────────────────────────────────────
       SLIDE 1 — The Hero Addiction
       ──────────────────────────────────────────── */
    case 'hero-addiction':
      return (
        <>
          <div className="dm-arrow-flow">
            <div className="dm-flow-box">One superhuman founder</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">Hero = solution to everything</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">Craving a savior in every crisis</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">No institutions. Just waiting.</div>
          </div>

          <div className="dm-grid-2">
            <div className="dm-highlight-box">
              <div className="dm-hl-label">Case study — 1953</div>
              <div className="dm-hl-text">
                The new generation learns not to vote for a political leader for their nation,
                They just wait for a messiah to come and fix everything.
              </div>
            </div>
            <div className="dm-highlight-box">
              <div className="dm-hl-label">The pattern today</div>
              <div className="dm-hl-text">
                Every decade, a new &ldquo;leader&rdquo; promises to fix everything.
                We believe him. Textbook taught us to. Institutions remain unbuilt.
              </div>
            </div>
          </div>

          <div className="dm-info-card">
            <div className="dm-info-label">Critical thinking — folded in</div>
            <div className="dm-info-value">
              A brain fed unchallengeable facts loses the habit of doubt.
              We don&apos;t just believe the hero — we&apos;ve forgotten how to question him.
            </div>
          </div>
        </>
      );


    /* ────────────────────────────────────────────
       SLIDE 3 — Manufactured Victimhood
       ──────────────────────────────────────────── */
    case 'manufactured-victimhood':
      return (
        <>
          <div className="dm-highlight-box dm-highlight-wide">
            <div className="dm-hl-label">The Psychological Trap</div>
            <div className="dm-hl-text">
              When your identity is built on being wronged — you become structurally
              incapable of self-accountability. Victimhood and self-reflection cannot coexist.
            </div>
          </div>

          <div className="dm-grid-2">
            <div className="dm-info-card">
              <div className="dm-info-label">The Petty Slogans</div>
              <div className="dm-info-value">The "HUM MAJBOOR HAIN" Syndrome</div>
              <div className="dm-info-small">
                Out Books are always opting Pkaistan as the Victim, as the wronged nation, as the oppressed one.
                They state that w are always surrounded by enemies
              </div>
            </div>
            <div className="dm-info-card">
              <div className="dm-info-label">Net result</div>
              <div className="dm-info-value">&ldquo;Why did they do this to us?&rdquo;</div>
              <div className="dm-info-small">
                A nation conditioned to ask this — every single time — instead of
                asking what we did, what we agreed to, what we concealed from ourselves.
              </div>
            </div>
          </div>

          <div className="dm-info-card">
            <div className="dm-info-label">The formula</div>
            <div className="dm-info-value">
              Hide the inconvenient truth → frame the outcome as external
              aggression → repeat for 70 years → get a nation that cannot self-reflect.
            </div>
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 4 — Fake Pride, Real Crash
       ──────────────────────────────────────────── */
    case 'fake-pride':
      return (
        <>
          <div className="dm-arrow-flow">
            <div className="dm-flow-box">Glorified fictional history</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">Student enters real world</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">Narrative doesn&apos;t match</div>
            <div className="dm-flow-arrow">→</div>
            <div className="dm-flow-box">Identity collapse</div>
          </div>

          <div className="dm-grid-2">
            <div className="dm-info-card">
              <div className="dm-info-label">Cas Study 1965</div>
              <div className="dm-info-value">The "Morally Won Battle"</div>
              <div className="dm-info-small">
                We stated that this war was a big win, while in reality, it was just a "stalemate".
                This in turn became an example of the collapse of fake pride!
              </div>
            </div>
            <div className="dm-info-card">
              <div className="dm-info-label">Global stage</div>
              <div className="dm-info-value">The conference moment</div>
              <div className="dm-info-small">
                The &ldquo;great national narrative&rdquo; lands to blank stares
                internationally. Or worse: quiet laughter. That&apos;s not
                embarrassment. That&apos;s an identity crisis.
              </div>
            </div>
          </div>

          <div className="dm-big-quote">
            &ldquo;Pride built on fiction is not pride. It&apos;s a debt that
            reality will collect — with interest.&rdquo;
          </div>
        </>
      );

    /* ────────────────────────────────────────────
       SLIDE 5 — The Enemy Image Economy
       ──────────────────────────────────────────── */
    case 'enemy-image':
      return (
        <>
          <div className="dm-stat-row">
            <div className="dm-stat">
              <div className="dm-stat-num">India</div>
              <div className="dm-stat-label">Permanent villain #1</div>
            </div>
            <div className="dm-stat">
              <div className="dm-stat-num">Hindus</div>
              <div className="dm-stat-label">Permanent villain #2</div>
            </div>
            <div className="dm-stat">
              <div className="dm-stat-num">The West</div>
              <div className="dm-stat-label">Permanent villain #3</div>
            </div>
          </div>

          <div className="dm-highlight-box dm-highlight-wide">
            <div className="dm-hl-label">Case study — 1968–69</div>
            <div className="dm-hl-text">
              Bengali mass movement for rights: Yahya Khan&apos;s regime labeled
              them &ldquo;Indian agents.&rdquo; An entire people&apos;s legitimate
              grievance — dismissed with one label. No debate, no accountability.
              Textbook kept this framing. The enemy was created before the war
              even started.
            </div>
          </div>

          <div className="dm-info-card">
            <div className="dm-info-label">The relief valve function</div>
            <div className="dm-info-value">
              A permanent external enemy means internal questions never get asked.
            </div>
            <div className="dm-info-small">
              &ldquo;Why aren&apos;t we developing?&rdquo; → India ki wajah se.
              &ldquo;Why is the economy failing?&rdquo; → foreign conspiracy.
              The enemy isn&apos;t just in the textbook — it&apos;s doing active
              governance work.
            </div>
          </div>
        </>
      );

    default:
      return <p>Slide content not found.</p>;
  }
};
