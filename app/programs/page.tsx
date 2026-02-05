import Image from "next/image";
import { programs, impactStats } from "../data";

export default function ProgramsPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container page-header-content">
                    <h1>Our Programs</h1>
                    <p>Transforming lives through practical support and opportunities</p>
                </div>
            </section>

            {/* Program Details */}
            {programs.map((program, index) => (
                <section
                    key={program.id}
                    id={program.id}
                    className={`program-detail-section ${index % 2 === 1 ? "alt" : ""}`}
                >
                    <div className="container">
                        <div className={`program-detail-grid ${index % 2 === 1 ? "reverse" : ""}`}>
                            <div className="program-detail-content">
                                <span className="program-tag">{program.tagline}</span>
                                <h2>{program.name}</h2>
                                <p>{program.description}</p>
                                <ul className="program-features">
                                    {program.features.map((feature, i) => (
                                        <li key={i}>
                                            <strong>{feature.title}:</strong> {feature.desc}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/donate" className="btn btn-primary">Support This Program</a>
                            </div>
                            <div className="program-detail-image">
                                <Image
                                    src={program.image}
                                    alt={program.name}
                                    width={600}
                                    height={450}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header" style={{ color: "white" }}>
                        <span className="section-label" style={{ color: "var(--cream)" }}>Our Impact</span>
                        <h2 className="section-title">Program Results</h2>
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
                        <h2 className="cta-title">Want to Get Involved?</h2>
                        <p className="cta-desc">
                            Join our team of dedicated volunteers making a real difference in people&apos;s lives.
                        </p>
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
