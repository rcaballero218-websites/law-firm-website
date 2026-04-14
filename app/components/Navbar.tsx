"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  isSpanish: boolean;
  onToggleLanguage: () => void;
}

export default function Navbar({
  isSpanish,
  onToggleLanguage,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 18px 40px;
          background: rgba(10, 10, 10, 0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.18);
        }

        .logoLink {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          height: 88px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logoImage {
          width: 72px;
          height: 72px;
          object-fit: contain;
          display: block;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .navLink {
          color: #d7d2c8;
          text-decoration: none;
          white-space: nowrap;
          font-weight: 500;
        }

        .navLink:hover {
          color: #d4af37;
        }

        .rightSide {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .consultButton {
          background: #d4af37;
          color: #111;
          text-decoration: none;
          border: none;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
        }

        .consultButton:hover {
          opacity: 0.92;
        }

        .languageButton {
          background: transparent;
          color: #d4af37;
          border: 1px solid #d4af37;
          padding: 11px 16px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        .languageButton:hover {
          background: rgba(212, 175, 55, 0.08);
        }

        .hamburgerButton {
          display: none;
          background: transparent;
          border: 1px solid #d4af37;
          border-radius: 8px;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
        }

        .hamburgerLines {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        }

        .hamburgerLines span {
          display: block;
          width: 20px;
          height: 2px;
          background: #d4af37;
          border-radius: 999px;
        }

        .mobileMenu {
          display: none;
        }

        @media (max-width: 900px) {
          .navbar {
            padding: 16px 20px;
          }

          .desktopNav,
          .consultButton {
            display: none;
          }

          .hamburgerButton {
            display: inline-flex;
          }
        }

        @media (max-width: 640px) {
          .navbar {
            padding: 14px 14px;
          }

          .logoLink {
            width: 64px;
            height: 64px;
          }

          .logoImage {
            width: 54px;
            height: 54px;
          }

          .rightSide {
            gap: 10px;
          }

          .languageButton {
            padding: 10px 12px;
            font-size: 14px;
          }
        }

        .mobileMenuOpen {
          display: none;
        }

        @media (max-width: 900px) {
          .mobileMenuOpen {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(212, 175, 55, 0.18);
            padding: 12px 16px 18px;
          }

          .mobileMenuLinks {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .mobileMenuLink {
            color: #d7d2c8;
            text-decoration: none;
            font-weight: 600;
            padding: 12px 10px;
            border: 1px solid rgba(212, 175, 55, 0.16);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
          }

          .mobileMenuLink:hover {
            color: #d4af37;
            border-color: rgba(212, 175, 55, 0.4);
          }

          .mobileConsultButton {
            margin-top: 12px;
            display: block;
            width: 100%;
            background: #d4af37;
            color: #111;
            text-decoration: none;
            font-weight: 700;
            text-align: center;
            padding: 13px 16px;
            border-radius: 8px;
          }
        }
      `}</style>

      <header className="navbar">
        <Link href="/" className="logoLink" aria-label="Home" title="Home" onClick={closeMenu}>
          <img
            src="/lion-logo.png"
            alt="Law Office of Luis Leon logo"
            className="logoImage"
          />
        </Link>

        <nav className="desktopNav">
          <Link href="/#services" className="navLink">
            {isSpanish ? "Áreas de Práctica" : "Practice Areas"}
          </Link>
          <Link href="/#about" className="navLink">
            {isSpanish ? "Nuestra Firma" : "Our Firm"}
          </Link>
          <Link href="/#contact" className="navLink">
            {isSpanish ? "Contacto" : "Contact"}
          </Link>
          <Link href="/#locations" className="navLink">
            {isSpanish ? "Ubicaciones" : "Locations"}
          </Link>
        </nav>

        <div className="rightSide">
          <Link href="/#contact" className="consultButton">
            {isSpanish ? "Solicitar Consulta" : "Request Consultation"}
          </Link>

          <button
            type="button"
            onClick={onToggleLanguage}
            className="languageButton"
          >
            {isSpanish ? "In English" : "En Español"}
          </button>

          <button
            type="button"
            className="hamburgerButton"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="hamburgerLines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="mobileMenuOpen">
            <div className="mobileMenuLinks">
              <Link href="/#services" className="mobileMenuLink" onClick={closeMenu}>
                {isSpanish ? "Áreas de Práctica" : "Practice Areas"}
              </Link>
              <Link href="/#about" className="mobileMenuLink" onClick={closeMenu}>
                {isSpanish ? "Nuestra Firma" : "Our Firm"}
              </Link>
              <Link href="/#contact" className="mobileMenuLink" onClick={closeMenu}>
                {isSpanish ? "Contacto" : "Contact"}
              </Link>
              <Link href="/#locations" className="mobileMenuLink" onClick={closeMenu}>
                {isSpanish ? "Ubicaciones" : "Locations"}
              </Link>
            </div>

            <Link href="/#contact" className="mobileConsultButton" onClick={closeMenu}>
              {isSpanish ? "Solicitar Consulta" : "Request Consultation"}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}