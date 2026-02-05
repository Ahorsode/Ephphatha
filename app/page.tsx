import Image from "next/image";
import { impactStats, programs, missionPoints } from "./data";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Opening Doors Since 2015</span>
          <h1 className="hero-title">
            Opening Doors to Second Chances & Brighter Futures
          </h1>
          <p className="hero-subtitle">
            Through prison reintegration and education equity, we break cycles of poverty—one life, one classroom at a time.
          </p>
          <div className="hero-buttons">
            <a href="/donate" className="btn btn-primary">Support Our Mission</a>
            <a href="/programs" className="btn btn-secondary">Learn How We Help</a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">What &quot;Ephphatha&quot; Means</h2>
            <p className="section-desc">
              &quot;Ephphatha&quot; (Be opened) is our call to action. We open doors that have been closed by poverty, incarceration, and lack of opportunity.
            </p>
          </div>
          <div className="mission-grid">
            {missionPoints.map((point, index) => (
              <div key={index} className="mission-card">
                <div className="mission-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-desc">
              Transforming lives through practical support, mentorship, and education.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image">
                  <Image
                    src={program.image}
                    alt={program.name}
                    width={600}
                    height={375}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="program-content">
                  <span className="program-tag">{program.tagline}</span>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                  <a href={`/programs#${program.id}`} className="program-link">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-header" style={{ color: "white" }}>
            <span className="section-label" style={{ color: "var(--cream)" }}>Our Impact</span>
            <h2 className="section-title">Making a Difference</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{impactStats.livesChanged.toLocaleString()}+</div>
              <div className="stat-label">Lives Changed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{impactStats.successRate}%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{impactStats.schoolsSupported}</div>
              <div className="stat-label">Schools Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{impactStats.volunteers}+</div>
              <div className="stat-label">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-desc">
              Your support opens doors to transformation. Join us in breaking cycles of poverty and creating brighter futures.
            </p>
            <div className="hero-buttons">
              <a href="/donate" className="btn btn-primary">Donate Now</a>
              <a href="/contact" className="btn btn-outline">Get Involved</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
