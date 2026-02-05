import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ephphatha Open Door Initiative",
  description: "Opening Doors to Second Chances & Brighter Futures - Through prison reintegration and education equity, we break cycles of poverty.",
  keywords: "charity, nonprofit, prison ministry, education, reintegration, community support",
  openGraph: {
    title: "Ephphatha Open Door Initiative",
    description: "Opening Doors to Second Chances & Brighter Futures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo-wrapper">
          <Image
            src="/images/logo.jpg"
            alt="Ephphatha Logo"
            width={50}
            height={50}
            className="logo-image"
          />
          <span className="logo">Ephphatha</span>
        </a>
        <Navigation />
      </div>
    </header>
  );
}


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Ephphatha</span>
            <p>&quot;Be opened to hope. Be opened to change.&quot; Transforming lives through practical support and opportunities since 2015.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/donate">Donate</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>info@ephphatha.org</li>
              <li>(123) 456-7890</li>
              <li>123 Charity Way</li>
              <li>City, State 12345</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Stay Connected</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">→</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Ephphatha Open Door Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
