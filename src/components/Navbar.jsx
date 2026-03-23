import { useState } from "react";
import { navLinks, profile } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 50, padding: "18px 48px", background:"#f5ede0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

        {/* Logo */}
        <span style={{ color: "#2a1200", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", minWidth: "120px" }}>
          {profile.name.split(" ")[0]}<span style={{ color: "#7c4a1e" }}>.</span>
        </span>

        {/* Desktop Nav pill */}
        <div className="hidden md:flex" style={{
          alignItems: "center", gap: "4px",
          background: "#eeddd0", border: "1.5px solid #c8a882",
          borderRadius: "999px", padding: "6px 10px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{
              color: "#7a4a28", padding: "6px 18px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.target.style.color = "#7c4a1e"; e.target.style.background = "#e8d5c4"; }}
              onMouseLeave={(e) => { e.target.style.color = "#7a4a28"; e.target.style.background = "transparent"; }}
            >{link.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="/Tanushree-Soni-Resume.pdf" target="_blank" rel="noreferrer" className="hidden md:flex" style={{
          background: "#7c4a1e", color: "white",
          padding: "8px 20px", borderRadius: "999px",
          fontSize: "13px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 0 20px rgba(124,74,30,0.35)",
          minWidth: "120px", justifyContent: "center", transition: "background 0.2s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#5c3010")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#7c4a1e")}
        >⬇ Download CV</a>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: "#2a1200", background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}
          onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          marginTop: "10px", background: "#eeddd0",
          border: "1.5px solid #c8a882", borderRadius: "16px",
          padding: "12px", display: "flex", flexDirection: "column", gap: "4px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{
              color: "#7a4a28", padding: "8px 16px", borderRadius: "10px",
              fontSize: "14px", fontWeight: 500, textDecoration: "none",
            }}>{link.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
