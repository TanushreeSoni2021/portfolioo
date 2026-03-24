import { profile, navLinks, socialLinks } from "../data/site";

const style = `
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes floatDot {
    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.18; }
    33%       { transform: translateY(-22px) translateX(12px); opacity: 0.32; }
    66%       { transform: translateY(10px) translateX(-10px); opacity: 0.22; }
  }
  @keyframes driftLine {
    0%   { transform: translateX(-100%) rotate(-15deg); opacity: 0; }
    20%  { opacity: 0.12; }
    80%  { opacity: 0.12; }
    100% { transform: translateX(200%) rotate(-15deg); opacity: 0; }
  }
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

export default function Footer() {
  return (
    <>
      <style>{style}</style>
      <footer style={{
        width: "100%", position: "relative", overflow: "hidden",
        padding: "48px 5% 32px",
        background: "linear-gradient(135deg, #5c3010, #7c4a1e, #a0522d, #6b3a18, #5c3010)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 10s ease infinite",
      }}>

        {/* Shimmer top border */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, #a0522d, #c8a882, #7c4a1e, #f5ede0, #a0522d, transparent)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
        }} />

        {/* Floating dots */}
        {[{top:"20%",left:"8%",size:18,delay:"0s"},{top:"60%",left:"18%",size:12,delay:"1.2s"},{top:"35%",left:"75%",size:22,delay:"0.6s"},{top:"70%",left:"88%",size:14,delay:"2s"},{top:"15%",left:"50%",size:10,delay:"1.8s"},{top:"80%",left:"55%",size:16,delay:"0.3s"}].map((d,i) => (
          <div key={i} style={{
            position:"absolute", top:d.top, left:d.left,
            width:d.size, height:d.size, borderRadius:"50%",
            background:"rgba(245,220,180,0.65)", pointerEvents:"none",
            animation:`floatDot ${3.5+i*0.4}s ease-in-out ${d.delay} infinite`,
          }} />
        ))}

        {/* Drifting lines */}
        {[{top:"25%",delay:"0s",dur:"7s"},{top:"55%",delay:"2.5s",dur:"9s"},{top:"75%",delay:"5s",dur:"8s"}].map((l,i) => (
          <div key={i} style={{
            position:"absolute", top:l.top, left:0,
            width:"180px", height:"1px",
            background:"linear-gradient(90deg, transparent, #c8a882, transparent)",
            pointerEvents:"none",
            animation:`driftLine ${l.dur} linear ${l.delay} infinite`,
          }} />
        ))}

        {/* Rotating ring */}
        <div style={{
          position:"absolute", bottom:"-60px", right:"-60px",
          width:"220px", height:"220px", borderRadius:"50%",
          border:"1px solid rgba(200,168,130,0.15)",
          pointerEvents:"none",
          animation:"rotateSlow 18s linear infinite",
        }}>
          <div style={{
            position:"absolute", top:"-4px", left:"50%",
            width:"8px", height:"8px", borderRadius:"50%",
            background:"#c8a882", transform:"translateX(-50%)", opacity:0.5,
          }} />
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-start",
          gap: "32px", marginBottom: "40px",
          position: "relative", zIndex: 1,
        }}>

          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "280px" }}>
            <span style={{ color: "#f5ede0", fontSize: "24px", fontWeight: 800, letterSpacing: "-0.5px" }}>
              {profile.name.split(" ")[0]}<span style={{ color: "#c8a882" }}>.</span>
            </span>
            <p style={{ color: "rgba(245,237,224,0.65)", fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>
              {profile.focusSummary}
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(245,237,224,0.08)", border: "1.5px solid rgba(200,168,130,0.3)",
                  color: "rgba(245,237,224,0.6)", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8a882"; e.currentTarget.style.color = "#f5ede0"; e.currentTarget.style.background = "rgba(245,237,224,0.15)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,168,130,0.3)"; e.currentTarget.style.color = "rgba(245,237,224,0.6)"; e.currentTarget.style.background = "rgba(245,237,224,0.08)"; }}
                ><s.icon size={14} /></a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ color: "#c8a882", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
              Navigation
            </p>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: "rgba(245,237,224,0.6)", fontSize: "13.5px", fontWeight: 500,
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => e.target.style.color = "#f5ede0"}
                onMouseLeave={(e) => e.target.style.color = "rgba(245,237,224,0.6)"}
              >{link.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#c8a882", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
              Hire Me
            </p>
            <p style={{ color: "rgba(245,237,224,0.6)", fontSize: "13.5px", lineHeight: 1.7, margin: 0, maxWidth: "200px" }}>
              Open to freelance and full-time opportunities.
            </p>
            <a href="#contact" style={{
              padding: "9px 22px", borderRadius: "999px",
              background: "linear-gradient(135deg, #c8a882, #a0522d)",
              color: "#2a1200", fontSize: "13px", fontWeight: 700,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 4px 20px rgba(200,168,130,0.25)",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >Get In Touch</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(200,168,130,0.2)", paddingTop: "20px",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: "8px",
          position: "relative", zIndex: 1,
        }}>
          <p style={{ color: "rgba(245,237,224,0.4)", fontSize: "12.5px", margin: 0 }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p style={{ color: "rgba(245,237,224,0.4)", fontSize: "12.5px", margin: 0 }}>
            Built with React & Vite
          </p>
        </div>

      </footer>
    </>
  );
}
