import './IntroSlides.css';
import kkAzizImg from '../../assets/k.k.Aziz.jpg';

export const renderIntroSlide = (renderId) => {
  switch (renderId) {
    case 'intro-1':
      return (
        <div className="in-intro-container">
          <div className="s1-top">
            <div>
              <div className="s1-book-sub">Book Presentation</div>
              <div className="s1-book-title">The Murder<br />of History</div>
              <div className="s1-author">K.K. Aziz</div>
              <div className="s1-year">Khursheed Kamal Aziz &nbsp;·&nbsp; 1993</div>
            </div>
            <div className="s1-avatar">
              <img src={kkAzizImg} alt="K.K. Aziz" className="s1-avatar-image" />
              <div className="s1-avatar-label">K.K. Aziz<br />1927–2009</div>
            </div>
          </div>
          <div className="s1-bio">
            <p>
              <strong>K.K. Aziz (1927–2009)</strong> was a Pakistani historian, scholar, and professor who spent decades studying South Asian history. He taught at universities across Pakistan and Europe, and authored over 30 books on history, politics, and education. He is best known for his unflinching criticism of how Pakistan's education system distorts historical facts for ideological purposes.
            </p>
          </div>
        </div>
      );
    case 'intro-1-members':
      return (
        <div className="in-intro-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <div className="s1-bottom">
            <div style={{ minWidth: 0 }}>
              <div className="s1-bottom-label" style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '0.2em', marginBottom: '2.5rem' }}>Group Members</div>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">01</span>
                    <span className="member-id">24L-2548</span>
                  </div>
                  <h3 className="member-name">Mahad Mahmood</h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Introduction: Who is K.K. Aziz? Why did he write this book?</p>
                </div>
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">02</span>
                    <span className="member-id">24L-2598</span>
                  </div>
                  <h3 className="member-name">Faizan Ul Haq</h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Myths: Specific lies & mistakes in our textbooks</p>
                </div>
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">03</span>
                    <span className="member-id">24L-2558</span>
                  </div>
                  <h3 className="member-name">Ali Aamir</h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Truth: How the author proves these myths wrong</p>
                </div>
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">04</span>
                    <span className="member-id">24L-2610</span>
                  </div>
                  <h3 className="member-name">Hafiz M. Hassan <span className="in-tag-inline in-tag-you" style={{marginLeft: '8px', verticalAlign: 'middle'}}>You</span></h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Damage: How textbook lies affect students' minds</p>
                </div>
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">05</span>
                    <span className="member-id">24L-2612</span>
                  </div>
                  <h3 className="member-name">Aayan Ahmad</h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Problem: Who is to blame? (Govt / Authors)</p>
                </div>
                <div className="member-card">
                  <div className="member-card-header">
                    <span className="member-num">06</span>
                    <span className="member-id">24L-2530</span>
                  </div>
                  <h3 className="member-name">M. Zohaib</h3>
                  <div className="member-divider"></div>
                  <p className="member-part">The Fix & Conclusion: How to fix the education system?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'intro-2':
      return (
        <div className="in-intro-container">
          <div className="s2-grid">
            <div className="s2-left">
              <div>
                <p className="s2-slide-num">Point 01 — The Introduction</p>
                <h1 className="s2-title">What This Book Is About</h1>
                <p className="s2-sub">Two core ideas that run through every chapter</p>
                <div className="s2-divider"></div>
              </div>
              <div className="in-intro-point">
                <div className="in-intro-point-label">Core Argument 01</div>
                <div className="in-intro-point-title">History has been systematically murdered</div>
                <div className="in-intro-point-text">Aziz analyzed 66 Pakistani textbooks across grades 1 to 14 and found deliberate distortion — wrong dates, fabricated narratives, erased communities, and glorified myths — embedded into every level of the education system. This was not accidental. It was policy.</div>
              </div>
              <div className="in-intro-point" style={{ marginTop: '1.5rem' }}>
                <div className="in-intro-point-label">Core Argument 02</div>
                <div className="in-intro-point-title">A nation cannot grow on a foundation of lies</div>
                <div className="in-intro-point-text">The damage is not just historical — it is psychological, civic, and generational. Students raised on distorted history develop distorted identities. They cannot question, cannot self-reflect, and cannot hold power accountable. The textbook does not just teach the past — it shapes the future.</div>
              </div>
            </div>
            <div className="s2-right">
              <div className="in-gpt-logo">
                <svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg"><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.525-3.499 10.079 10.079 0 0 0-10.42 4.958 9.964 9.964 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.525 3.499 10.079 10.079 0 0 0 10.42-4.958 9.966 9.966 0 0 0 6.664-4.834 10.079 10.079 0 0 0-1.24-11.817zm-17.088 23.77a7.471 7.471 0 0 1-4.802-1.727c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.486 7.251zM4.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM3.297 13.62A7.469 7.469 0 0 1 7.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L5.047 23.56a7.504 7.504 0 0 1-1.75-9.94zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l9.048 5.228a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.71zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.499v4.997l-4.331 2.5-4.331-2.5V18z" /></svg>
              </div>
              <div className="in-gpt-name">ChatGPT / Any LLM</div>
              <div className="in-gpt-word">Emotion-less</div>
              <div className="in-gpt-desc">Does not care about your national pride. It will contradict your textbook — with sources — in seconds.</div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
