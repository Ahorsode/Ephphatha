import React from "react";
import Image from "next/image";
import { teamMembers, values, impactStats } from "../data";

export default function AboutPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container page-header-content">
                    <h1>About Ephphatha</h1>
                    <p>Our story, vision, and the people behind the mission</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Our Story</h2>
                            <p>
                                The Ephphatha Open Door Initiative was founded in 2015 with a simple but powerful mission: to open doors of opportunity for those society has overlooked.
                            </p>
                            <p>
                                What began as a small prison outreach program has grown into a multifaceted organization serving both formerly incarcerated individuals and underserved children.
                            </p>
                            <p>
                                The word &quot;Ephphatha&quot; (meaning &quot;Be opened&quot;) comes from Mark 7:34 in the Bible, where Jesus heals a deaf man. This inspires our work—opening doors that have been closed by poverty, incarceration, and lack of opportunity.
                            </p>
                        </div>
                        <div className="about-image">
                            <Image
                                src="/images/about-story.jpg"
                                alt="Our Story"
                                width={600}
                                height={450}
                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section" style={{ background: "linear-gradient(135deg, #F0F4FF 0%, white 100%)" }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">What We Believe</span>
                        <h2 className="section-title">Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section" style={{ background: "white" }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Leadership</span>
                        <h2 className="section-title">Meet the Team</h2>
                        <p className="section-desc">
                            Dedicated individuals committed to transforming lives and communities.
                        </p>
                    </div>
                    <div className="marquee-container">
                        <div className="marquee-content" style={{ "--animation-duration": "25s" } as React.CSSProperties}>
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="marquee-item" style={{ display: "flex", gap: "var(--space-lg)" }}>
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="team-card" style={{ minWidth: "280px" }}>
                                            <div className="team-avatar">{member.avatar}</div>
                                            <h3>{member.name}</h3>
                                            <p className="team-role">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header" style={{ color: "white" }}>
                        <span className="section-label" style={{ color: "var(--cream)" }}>Our Impact</span>
                        <h2 className="section-title">The Numbers Tell Our Story</h2>
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
        </main>
    );
}
