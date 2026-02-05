import { donationImpacts, impactStats } from "../data";

export default function DonatePage() {
    const oneTimeAmounts = ["$25", "$50", "$100", "$250"];
    const monthlyAmounts = ["$10", "$25", "$50", "$100"];

    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container page-header-content">
                    <h1>Support Our Mission</h1>
                    <p>Your generosity opens doors to transformation</p>
                </div>
            </section>

            {/* Donation Forms Section */}
            <section className="section donate-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Give Today</span>
                        <h2 className="section-title">Ways to Give</h2>
                        <p className="section-desc">
                            Every donation, no matter the size, helps us continue our vital work.
                        </p>
                    </div>

                    <div className="donate-grid">
                        {/* One-Time Donation */}
                        <div className="donate-card">
                            <h3>One-Time Gift</h3>
                            <p>Make an immediate impact with a single donation</p>
                            <form>
                                <div className="form-group">
                                    <label>Amount (USD)</label>
                                    <div className="amount-options">
                                        {oneTimeAmounts.map((amount) => (
                                            <button key={amount} type="button" className="amount-btn">
                                                {amount}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Other amount"
                                        className="form-input"
                                        style={{ marginTop: "0.5rem" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Designation</label>
                                    <select className="form-select">
                                        <option value="general">Where most needed</option>
                                        <option value="prison">Prison Ministry</option>
                                        <option value="education">Education Equity</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                                    Donate Now
                                </button>
                            </form>
                        </div>

                        {/* Monthly Donation */}
                        <div className="donate-card">
                            <h3>Monthly Support</h3>
                            <p>Sustain our work with recurring giving</p>
                            <form>
                                <div className="form-group">
                                    <label>Monthly Amount (USD)</label>
                                    <div className="amount-options">
                                        {monthlyAmounts.map((amount) => (
                                            <button key={amount} type="button" className="amount-btn">
                                                {amount}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Other amount"
                                        className="form-input"
                                        style={{ marginTop: "0.5rem" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Designation</label>
                                    <select className="form-select">
                                        <option value="general">Where most needed</option>
                                        <option value="prison">Prison Ministry</option>
                                        <option value="education">Education Equity</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                                    Become a Monthly Donor
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Other Ways to Give */}
                    <div className="other-ways">
                        <h3>Other Ways to Give</h3>
                        <div className="other-grid">
                            <div className="other-card">
                                <h4>Check or Money Order</h4>
                                <p>
                                    Mail to:<br />
                                    Ephphatha Open Door Initiative<br />
                                    123 Charity Way<br />
                                    City, State 12345
                                </p>
                            </div>
                            <div className="other-card">
                                <h4>Stock Donations</h4>
                                <p>Contact us at donations@ephphatha.org for brokerage information</p>
                            </div>
                            <div className="other-card">
                                <h4>Corporate Matching</h4>
                                <p>Many employers will match your donation—check with your HR department</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="section" style={{ background: "linear-gradient(135deg, hsl(45, 30%, 97%) 0%, white 100%)" }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Your Impact</span>
                        <h2 className="section-title">Your Gift Makes a Difference</h2>
                    </div>
                    <div className="impact-grid">
                        {donationImpacts.map((item, index) => (
                            <div key={index} className="impact-card">
                                <div className="impact-amount">{item.amount}</div>
                                <p className="impact-desc">{item.impact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header" style={{ color: "white" }}>
                        <span className="section-label" style={{ color: "var(--secondary)" }}>Our Impact</span>
                        <h2 className="section-title">Together We&apos;ve Achieved</h2>
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
