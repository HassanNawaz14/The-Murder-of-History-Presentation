import { useCallback, useEffect } from 'react'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack/ScrollStack'
import HeroSection from './components/HeroSection/HeroSection'
import { renderDamageSlide } from './components/DamageSlides/DamageSlides'
import { renderMythsSlide } from './components/MythsSlides/MythsSlides'
import { renderTruthSlide } from './components/TruthSlides/TruthSlides'
import { renderProblemSlide } from './components/ProblemSlides/ProblemSlides'
import { renderConclusionSlide } from './components/ConclusionSlides/ConclusionSlides'
import { renderIntroSlide } from './components/IntroSlides/IntroSlides'
import EndScreen from './components/EndScreen/EndScreen'
import './App.css'

/* Renderer dispatch — maps sectionId to its render function */
const RENDERERS = {
  introduction: renderIntroSlide,
  damage: renderDamageSlide,
  myths: renderMythsSlide,
  truth: renderTruthSlide,
  problem: renderProblemSlide,
  fix: renderConclusionSlide,
}

/* CSS prefix per section (for slide-header, tag, divider classes) */
const CSS_PREFIX = {
  introduction: 'in',
  damage: 'dm',
  myths: 'my',
  truth: 'tr',
  problem: 'pr',
  fix: 'co',
}

/*
 * Presentation structure:
 * Each section has a heading card followed by placeholder content cards.
 * Presenter names are placeholders — update them as needed.
 */

const SECTIONS = [
  {
    id: 'introduction',
    partNumber: 1,
    title: 'The Introduction',
    subtitle: 'Who is K.K. Aziz? Why did he write this book?',
    presenter: 'Mahad Mahmood | 24L-2548',
    theme: 'theme-parchment',
    customRender: true,
    cards: [
      { render: 'intro-1' },
      { render: 'intro-1-members' },
      { render: 'intro-2' },
    ],
  },
  {
    id: 'myths',
    partNumber: 2,
    title: 'The Myths',
    subtitle: 'Specific lies & mistakes found in our textbooks.',
    presenter: 'Faizan Ul Haq | 24L-2598',
    theme: 'theme-maroon',
    customRender: true,
    cards: [
      {
        heading: 'Overview of the Problem',
        subtitle: '66 textbooks. One agenda. Zero accountability.',
        tag: { text: 'Systematic. Deliberate. Sustained.', color: 'danger' },
        render: 'myths-overview',
      },
      {
        heading: 'Errors & Distorted Events',
        subtitle: 'Wrong dates, wrong facts, wrong framing — all by design',
        tag: { text: 'Dates. Events. Narratives.', color: 'amber' },
        render: 'myths-errors',
      },
      {
        heading: 'Bias & False Glorification',
        subtitle: 'Heroes with no flaws. Villains with no humanity.',
        tag: { text: 'Who gets glorified. Who gets demonized.', color: 'purple' },
        render: 'myths-bias',
      },
      {
        heading: 'Omissions & Impact',
        subtitle: 'What is left out is as damaging as what is put in',
        tag: { text: 'Erased. Underrepresented. Forgotten.', color: 'blue' },
        render: 'myths-omissions',
      },
    ],
  },
  {
    id: 'truth',
    partNumber: 3,
    title: 'The Truth',
    subtitle: 'How the author proves these myths wrong using real history.',
    presenter: 'Ali Aamir | 24L-2558',
    theme: 'theme-sage',
    customRender: true,
    cards: [
      {
        heading: 'Truths',
        subtitle: 'Truth is always bitter — and we’ve been fed a lot of sugar',
        tag: { text: 'Framed lies. Political interests. Ideological agenda.', color: 'danger' },
        render: 'truth-hook',
      },
      {
        heading: 'Key Dates & Iqbal',
        subtitle: 'The founding myths that were never quite true',
        tag: { text: 'Dates & Founding Narrative', color: 'amber' },
        render: 'truth-dates',
      },
      {
        heading: 'Wars',
        subtitle: 'The victories that weren’t, and the failures we buried',
        tag: { text: '1965 & 1971', color: 'coral' },
        render: 'truth-wars',
      },
      {
        heading: '1857 & Beyond',
        subtitle: 'The distortions don’t stop at partition',
        tag: { text: '1857 & Other Fabrications', color: 'purple' },
        render: 'truth-1857',
      },
    ],
  },
  {
    id: 'damage',
    partNumber: 4,
    title: 'The Damage',
    subtitle: 'How these textbook lies affect students\u2019 minds and create narrow thinking.',
    presenter: 'Hafiz M. Hassan | 24L-2610',
    theme: 'theme-sepia',
    customRender: true,
    cards: [
      {
        /* Slide 1: The Hero Addiction */
        heading: 'The Hero Addiction',
        subtitle: 'Why we elect messiahs instead of building institutions',
        tag: { text: 'Catastrophic for Governance', color: 'danger' },
        render: 'hero-addiction',
      },
      {
        /* Slide 2: Allergy to Complexity */
        heading: 'Allergy to Complexity',
        subtitle: 'When your textbook erases grey areas, your mind does too',
        tag: { text: 'Intolerance for Nuance', color: 'amber' },
        render: 'allergy-complexity',
      },
      {
        /* Slide 3: Manufactured Victimhood */
        heading: 'Manufactured Victimhood',
        subtitle: 'Hum majboor hain — the national operating system',
        tag: { text: 'Identity Trap', color: 'purple' },
        render: 'manufactured-victimhood',
      },
      {
        /* Slide 4: Fake Pride, Real Crash */
        heading: 'Fake Pride, Real Crash',
        subtitle: 'Borrowed confidence that collapses under reality',
        tag: { text: 'Identity Crisis at National Scale', color: 'teal' },
        render: 'fake-pride',
      },
      {
        /* Slide 5: The Enemy Image Economy */
        heading: 'The Enemy Image Economy',
        subtitle: 'Hatred as a substitute for progress',
        tag: { text: 'Oldest trick in the authoritarian playbook', color: 'blue' },
        render: 'enemy-image',
      },
    ],
  },
  {
    id: 'problem',
    partNumber: 5,
    title: 'The Problem',
    subtitle: 'Who is to blame? Government, authors, or the system?',
    presenter: 'Aayan Ahmad | 24L-2612',
    theme: 'theme-ink',
    customRender: true,
    cards: [
      {
        heading: 'Who Is Responsible?',
        subtitle: 'Aziz’s answer is uncomfortable — it implicates everyone',
        tag: { text: 'Not one villain. A whole system.', color: 'danger' },
        render: 'problem-who',
      },
      {
        heading: 'Role of the State',
        subtitle: 'Primary responsibility — and primary power',
        tag: { text: 'The state controls the story.', color: 'coral' },
        render: 'problem-state',
      },
      {
        heading: 'Political Leaders & Nation-Building',
        subtitle: 'Good intentions. Long-term damage.',
        tag: { text: 'The road to distortion was paved with unity.', color: 'amber' },
        render: 'problem-leaders',
      },
      {
        heading: 'Authors & Academic Institutions',
        subtitle: 'The people who should have pushed back — didn’t',
        tag: { text: 'Complicity dressed as compliance.', color: 'purple' },
        render: 'problem-authors',
      },
    ],
  },
  {
    id: 'fix',
    partNumber: 6,
    title: 'The Fix & Conclusion',
    subtitle: 'How can we fix the education system?',
    presenter: 'M. Zohaib | 24L-2530',
    theme: 'theme-olive',
    customRender: true,
    cards: [
      {
        heading: 'How Do We Fix This?',
        subtitle: 'K.K. Aziz had no magic wand — but he had a clear message',
        tag: { text: 'The Real Question', color: 'teal' },
        render: 'fix-how',
      },
      {
        heading: 'Practical Solutions',
        subtitle: 'What Aziz called for — and what 2026 demands',
        tag: { text: 'Three fronts. One goal.', color: 'green' },
        render: 'fix-solutions',
      },
      {
        heading: 'Let\'s Wake Up',
        subtitle: 'Still relevant. Still urgent. Still ignored.',
        tag: { text: '2026 — Is anybody listening?', color: 'purple' },
        render: 'fix-conclusion',
      },
    ],
  },
]

function App() {
  const handleNavigate = useCallback((sectionId) => {
    const target = document.getElementById(`section-${sectionId}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleNextCard = useCallback(() => {
    const scroller = document.querySelector('.scroll-stack-scroller')
    if (!scroller) return
    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'))
    const currentScroll = scroller.scrollTop
    
    // Find the first card whose top is below the current scroll (plus a small threshold)
    const nextCard = cards.find(c => c.offsetTop > currentScroll + 50)
    
    if (nextCard) {
      scroller.scrollTo({
        top: nextCard.offsetTop,
        behavior: 'smooth'
      })
    }
  }, [])

  const handlePrevCard = useCallback(() => {
    const scroller = document.querySelector('.scroll-stack-scroller')
    if (!scroller) return
    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'))
    const currentScroll = scroller.scrollTop
    
    // Find the last card whose top is above the current scroll (minus a small threshold)
    const prevCard = [...cards].reverse().find(c => c.offsetTop < currentScroll - 50)
    
    if (prevCard) {
      scroller.scrollTo({
        top: prevCard.offsetTop,
        behavior: 'smooth'
      })
    } else if (cards.length > 0) {
      scroller.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        handleNextCard()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevCard()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNextCard, handlePrevCard])

  // Flatten all cards (heading cards + content cards) into a single ordered list
  const allCards = []
  SECTIONS.forEach((section) => {
    // Section heading card
    allCards.push({
      type: 'heading',
      sectionId: section.id,
      partNumber: section.partNumber,
      title: section.title,
      subtitle: section.subtitle,
      presenter: section.presenter,
      theme: section.theme,
    })
    // Content cards for this section
    section.cards.forEach((card, i) => {
      allCards.push({
        type: section.customRender ? 'custom' : 'content',
        sectionId: section.id,
        partNumber: section.partNumber,
        slideNumber: i + 1,
        totalSlides: section.cards.length,
        heading: card.heading,
        body: card.body,
        theme: section.theme,
        // Custom render fields
        subtitle: card.subtitle,
        tag: card.tag,
        renderId: card.render,
      })
    })
  })

  return (
    <div className="app-wrapper">
      {/* Hero Section — Initial Screen */}
      <HeroSection onNavigate={handleNavigate} />

      {/* Presentation Area */}
      <div className="presentation-area">
        <div className="presentation-header">
          <span className="presentation-header-dot" />
          <span className="presentation-header-brand">K.K. Aziz Review</span>
          <span className="presentation-header-divider">—</span>
          <span className="presentation-header-section">The Murder of History</span>
        </div>

        {/* Global Navigation Buttons */}
        <button className="nav-btn nav-prev-btn" onClick={handlePrevCard} aria-label="Previous Slide">
          ↑
        </button>
        <button className="nav-btn nav-next-btn" onClick={handleNextCard} aria-label="Next Slide">
          ↓
        </button>

        <div className="scroll-stack-wrapper">
          <ScrollStack
            itemDistance={180}
            itemStackDistance={5}
            stackPosition="10%"
            blurAmount={1}
            baseScale={0.95}
          >
            {allCards.map((card, index) => (
              <ScrollStackItem key={`card-${index}`}>
                {card.type === 'heading' ? (
                  /* ====== SECTION HEADING CARD ====== */
                  <div
                    id={`section-${card.sectionId}`}
                    className={`card card-heading ${card.theme}`}
                  >
                    <div className="card-heading-part-label">
                      Part {card.partNumber} of {SECTIONS.length}
                    </div>
                    <h2 className="card-heading-title">{card.title}</h2>
                    <p className="card-heading-subtitle">{card.subtitle}</p>
                    <div className="card-heading-presenter">
                      <span className="card-heading-presenter-icon">🎤</span>
                      <span className="card-heading-presenter-name">
                        Presented by {card.presenter}
                      </span>
                    </div>
                    <div className="card-heading-decoration">
                      <div className="card-heading-line" />
                      <span className="card-heading-ornament">✦</span>
                      <div className="card-heading-line" />
                    </div>
                  </div>
                ) : card.type === 'custom' ? (
                  /* ====== CUSTOM RICH CARD (e.g. Damage slides) ====== */
                  <div className={`card card-custom ${card.theme}`}>
                    <div className="card-meta">
                      <span className="card-meta-part">
                        Part {card.partNumber}
                      </span>
                      <span className="card-meta-slide">
                        {card.slideNumber} / {card.totalSlides}
                      </span>
                    </div>
                    {(() => {
                      const pfx = CSS_PREFIX[card.sectionId] || 'dm';
                      const renderer = RENDERERS[card.sectionId];
                      return (
                        <>
                          {card.heading && (
                            <div className={`${pfx}-slide-header`}>
                              <h2 className={`${pfx}-slide-title`}>{card.heading}</h2>
                              {card.subtitle && (
                                <p className={`${pfx}-slide-subtitle`}>{card.subtitle}</p>
                              )}
                              <div className={`${pfx}-divider`} />
                            </div>
                          )}
                          {card.tag && (
                            <span className={`${pfx}-tag ${pfx}-tag-${card.tag.color}`}>
                              {card.tag.text}
                            </span>
                          )}
                          {renderer ? renderer(card.renderId) : null}
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  /* ====== SIMPLE CONTENT CARD ====== */
                  <div className={`card card-content ${card.theme}`}>
                    <div className="card-meta">
                      <span className="card-meta-part">
                        Part {card.partNumber}
                      </span>
                      <span className="card-meta-slide">
                        {card.slideNumber} / {card.totalSlides}
                      </span>
                    </div>
                    <h2>{card.heading}</h2>
                    <p>{card.body}</p>
                    <div className="card-ornament" />
                  </div>
                )}
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      {/* End Screen Footer */}
      <EndScreen />
    </div>
  )
}

export default App
