"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <nav>
            <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`nav-link ${link.href === "/donate" ? "nav-cta" : ""} ${isActive(link.href) ? "active" : ""}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                className={`mobile-toggle ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
