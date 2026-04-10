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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        padding: "18px 40px",
        background: "rgba(10, 10, 10, 0.94)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.18)",
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "88px",
          height: "88px",
          textDecoration: "none",
        }}
        aria-label="Home"
        title="Home"
      >
        <img
          src="/lion-logo.png"
          alt="Law Office of Luis Leon logo"
          style={{
            width: "72px",
            height: "72px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/#services" style={{ color: "#d7d2c8", textDecoration: "none" }}>
            {isSpanish ? "Áreas de Práctica" : "Practice Areas"}
          </Link>
          <Link href="/#about" style={{ color: "#d7d2c8", textDecoration: "none" }}>
            {isSpanish ? "Nuestra Firma" : "Our Firm"}
          </Link>
          <Link href="/#contact" style={{ color: "#d7d2c8", textDecoration: "none" }}>
            {isSpanish ? "Contacto" : "Contact"}
          </Link>
          <Link href="/#locations" style={{ color: "#d7d2c8", textDecoration: "none" }}>
            {isSpanish ? "Ubicaciones" : "Locations"}
          </Link>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#contact"
            style={{
              background: "#d4af37",
              color: "#111",
              textDecoration: "none",
              border: "none",
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {isSpanish ? "Solicitar Consulta" : "Request Consultation"}
          </Link>

          <button
            type="button"
            onClick={onToggleLanguage}
            style={{
              background: "transparent",
              color: "#d4af37",
              border: "1px solid #d4af37",
              padding: "11px 16px",
              borderRadius: "8px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isSpanish ? "In English" : "En Español"}
          </button>
        </div>
      </div>
    </header>
  );
}