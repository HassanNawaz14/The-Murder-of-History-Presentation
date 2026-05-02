import { useState, useEffect } from 'react';
import murder_of_historyImg from '../../assets/murder_of_history.jpg';
import './HeroSection.css';

const HeroSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  useEffect(() => {
    // Staggered entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const dockItems = [
    { id: 'introduction', label: 'Intro' },
    { id: 'myths', label: 'Myths' },
    { id: 'truth', label: 'Truth' },
    { id: 'damage', label: 'Damage' },
    { id: 'problem', label: 'Problem' },
    { id: 'fix', label: 'Fix' },
  ];

  const handleDockClick = (id) => {
    setActiveTab(id);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <section className={`hero-section ${isVisible ? 'hero-visible' : ''}`}>
      {/* Subtle background texture */}
      <div className="hero-bg-texture" />

      {/* Header */}
      <header className="hero-header">
        <div className="hero-header-left">
          <span className="hero-recording-dot" />
          <span className="hero-brand">K.K. Aziz Review</span>
        </div>
        <div className="hero-header-right">
          <span className="hero-tagline">Critique. Analyze. Uncover.</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-content-left">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-icon">📚</span>
            <span className="hero-badge-text">ARCHIVAL ANALYSIS</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            The <em className="hero-title-emphasis">Murder</em>
            <br />
            of History.
          </h1>

          {/* Description */}
          <p className="hero-description">
            A critical presentation dissecting Khursheed Kamal Aziz&apos;s seminal
            work. Exposing the systematic fabrications, omissions, and state-sponsored
            myths woven into Pakistan&apos;s official textbooks.
          </p>

          {/* Author */}
          <div className="hero-author">
            <div className="hero-author-avatar">
              <span className="hero-author-avatar-icon">✍️</span>
            </div>
            <div className="hero-author-info">
              <span className="hero-author-label">Author</span>
              <span className="hero-author-name">K.K. Aziz (1993)</span>
            </div>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-card">
            <div className="hero-card-image-wrapper">
              <img
                src={murder_of_historyImg}
                alt="Vintage murder_of_history with quill feathers"
                className="hero-card-image"
              />
            </div>
            <p className="hero-card-quote">
              &ldquo;To teach history is to shape the future. To distort it is to destroy the mind.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Dock */}
      <nav className="hero-dock">
        <div className="hero-dock-container">
          {dockItems.map((item) => (
            <button
              key={item.id}
              className={`hero-dock-item ${activeTab === item.id ? 'hero-dock-item-active' : ''}`}
              onClick={() => handleDockClick(item.id)}
              aria-label={`Navigate to ${item.label}`}
            >
              <span className="hero-dock-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
