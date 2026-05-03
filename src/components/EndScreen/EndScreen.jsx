import './EndScreen.css';

export default function EndScreen() {
  return (
    <div className="end-screen">
      <div className="end-screen-content">
        <h1 className="end-title">Thank You</h1>
        <p className="end-subtitle">For your time and attention</p>

        <div className="end-divider" />

        <div className="end-grid">
          <div className="end-col">
            <h3 className="end-col-title">The Book</h3>
            <p className="end-col-text"><strong>The Murder of History</strong></p>
            <p className="end-col-text" style={{ fontSize: '1.1rem', opacity: 0.8 }}>by K.K. Aziz (1993)</p>
            <p className="end-col-desc">A sweeping critique of history textbooks used across Pakistan.</p>
          </div>
          <div className="end-col">
            <h3 className="end-col-title">Core Message</h3>
            <p className="end-col-text" style={{ fontStyle: 'italic', opacity: 0.85, fontSize: '1.25rem' }}>
              "A nation cannot grow on a foundation of lies. The textbook does not just teach the past — it shapes the future."
            </p>
          </div>
          <div className="end-col">
            <h3 className="end-col-title">Presentation By</h3>
            <p className="end-col-text"><strong>Group 05</strong></p>
            <p className="end-col-text" style={{ fontSize: '1.1rem', opacity: 0.8 }}>Pakistan Studies</p>
            <div className="end-tags">
              <span className="end-tag">Analysis</span>
              <span className="end-tag">Education</span>
              <span className="end-tag">History</span>
            </div>
          </div>
        </div>
      </div>
      <div className="end-footer">
        <p>© {new Date().getFullYear()} The Murder of History Presentation. All rights reserved.</p>
      </div>
    </div>
  );
}
