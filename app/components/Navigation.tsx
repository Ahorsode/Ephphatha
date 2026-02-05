"use client";

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

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <nav>
            <ul className="nav-list">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`nav-link ${link.href === "/donate" ? "nav-cta" : ""} ${isActive(link.href) ? "active" : ""}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
