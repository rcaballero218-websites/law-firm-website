"use client";

import Link from "next/link";

interface NavbarProps {
  isSpanish: boolean;
  onToggleLanguage: () => void;
}

export default function Navbar({
  isSpanish,
  onToggleLanguage,
}: NavbarProps) {
  return (
    <>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 18px 40px;
          background: rgba(10, 10, 10, 0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.18);
          flex-wrap: wrap;
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

        .rightSide {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .navLinks {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .navLink {
          color: #d7d2c8;
          text-decoration: none;
          white-space: nowrap;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
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
          text-align: center;
          white-space: nowrap;
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

        @media (max-width: 900px) {
          .navbar {
            padding: 16px 20px;
            gap: 16px;
          }

          .rightSide {
            gap: 16px;
          }

          .navLinks {
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: stretch;
            padding: 14px 16px;
            gap: 14px;
          }

          .logoLink {
            width: 100%;
            height: auto;
            justify-content: center;
          }

          .logoImage {
            width: 60px;
            height: 60px;
          }

          .rightSide {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
          }

          .navLinks {
            width: 100%;
            justify-content: center;
            gap: 12px 16px;
          }

          .navLink {
            font-size: 15px;
          }

          .actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }

          .consultButton,
          .languageButton {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 12px 12px;
          }

          .navLinks {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .navLink {
            font-size: 14px;
          }

          .consultButton,
          .languageButton {
            font-size: 14px;
            padding: 12px 16px;
          }
        }
      `}</style>

      <header className="navbar">
        <Link href="/" className="logoLink" aria-label="Home" title="Home">
          <img
            src="/lion-logo.png"
            alt="Law Office of Luis Leon logo"
            className="logoImage"
          />
        </Link>

        <div className="rightSide">
          <nav className="navLinks">
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

          <div className="actions">
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
          </div>
        </div>
      </header>
    </>
  );
}