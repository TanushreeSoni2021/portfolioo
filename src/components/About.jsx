import { useState, useEffect } from "react";
import { profile, stats } from "../data/site";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handle = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <section id="about" style={{
      width: "100%", minHeight: "100vh", background: "#f5ede0",
      padding: "0% 5%", position: "relative", overflow: "hidden",
    }}>

      {/* Top divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #7c4a1e55, transparent)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 10, width: "100%", minHeight: "100vh",
        display: "flex", flexDirection: isMobile ? "column" : "row",
        alignItems: "stretch",
        padding: isMobile ? "90px 24px 60px" : isTablet ? "80px 48px" : "80px 80px",
        gap: isMobile ? "52px" : "60px",
      }}>

        {/* ── LEFT — About ── */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          gap: "28px", justifyContent: "center",
        }}>

          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "2px", background: "#7c4a1e", borderRadius: "2px" }} />
            <span style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            color: "#2a1200",
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(34px, 3.8vw, 52px)",
            fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", margin: 0,
          }}>
            I build things for<br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "#7c4a1e" }}>the web</span>
              <svg viewBox="0 0 200 12" style={{
                position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
              }} preserveAspectRatio="none">
                <path d="M0,8 Q25,2 50,8 Q75,14 100,8 Q125,2 150,8 Q175,14 200,8"
                  fill="none" stroke="#7c4a1e" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              </svg>
            </span>
            {" "}& love<br />what I do
          </h2>

          {/* Bio */}
          <p style={{
            color: "#7a4a28", fontSize: isMobile ? "14px" : "15.5px",
            lineHeight: 1.9, margin: 0,
          }}>
            {profile.intro}
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                flex: "1", minWidth: "100px",
                padding: "18px 16px 14px",
                borderRadius: "20px",
                background: i === 1 ? "linear-gradient(135deg, #7c4a1e, #a0522d)" : "#eeddd0",
                border: i === 1 ? "none" : "1.5px solid #c8a882",
                boxShadow: i === 1 ? "0 8px 28px rgba(124,74,30,0.35)" : "0 4px 16px rgba(0,0,0,0.05)",
                position: "relative", overflow: "hidden",
              }}>
                {i === 1 && (
                  <div style={{
                    position: "absolute", top: "-20px", right: "-20px",
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.10)",
                  }} />
                )}
                <p style={{
                  fontSize: "28px", fontWeight: 900, margin: 0, lineHeight: 1,
                  color: i === 1 ? "white" : "#7c4a1e",
                }}>{s.value}</p>
                <p style={{
                  fontSize: "11px", marginTop: "6px", lineHeight: 1.4, fontWeight: 500,
                  color: i === 1 ? "rgba(255,255,255,0.85)" : "#7a4a28",
                }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote block */}
          <div style={{
            padding: "20px 24px", borderRadius: "16px",
            background: "#eeddd0", border: "1.5px solid #c8a882",
            borderLeft: "4px solid #7c4a1e",
            position: "relative",
          }}>
            <span style={{
              position: "absolute", top: "-14px", left: "20px",
              fontSize: "48px", lineHeight: 1, color: "#7c4a1e", opacity: 0.22,
              fontFamily: "Georgia, serif",
            }}>"</span>
            <p style={{ color: "#7a4a28", fontSize: "13.5px", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              {profile.focusSummary}
            </p>
          </div>

        </div>

        {/* Divider */}
        {!isMobile && (
          <div style={{
            width: "1px", alignSelf: "stretch",
            background: "linear-gradient(180deg, transparent, #c8a88288, transparent)",
            flexShrink: 0,
          }} />
        )}

        {/* ── RIGHT — Education ── */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          gap: "28px", justifyContent: "center",
        }}>

          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "2px", background: "#7c4a1e", borderRadius: "2px" }} />
            <span style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              Education
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            color: "#2a1200",
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(34px, 3.8vw, 52px)",
            fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", margin: 0,
          }}>
            Academic<br />
            <span style={{ color: "#7c4a1e" }}>Journey</span>
          </h2>

          <p style={{ color: "#7a4a28", fontSize: isMobile ? "14px" : "15.5px", lineHeight: 1.9, margin: 0 }}>
            Building a strong foundation in computer science through formal education and continuous learning.
          </p>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: "32px" }}>

            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "7px", top: 0, bottom: 0,
              width: "2px", background: "linear-gradient(180deg, #7c4a1e, #c8a882aa)",
              borderRadius: "2px",
            }} />

            {/* BCA */}
            <div style={{ position: "relative", marginBottom: "28px" }}>
              {/* Dot on line */}
              <div style={{
                position: "absolute", left: "-31px", top: "0px",
                width: "16px", height: "16px", borderRadius: "50%",
                background: "#7c4a1e", border: "3px solid #f5ede0",
                boxShadow: "0 0 0 2px #7c4a1e", zIndex: 1,
              }} />
              <div style={{
                padding: "20px 22px", borderRadius: "18px",
                background: "#eeddd0", border: "1.5px solid #c8a882",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    padding: "4px 14px", borderRadius: "999px",
                    background: "linear-gradient(135deg, #7c4a1e, #a0522d)",
                    color: "white", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px",
                  }}>✓ Completed</span>
                  <span style={{ color: "#a0522d", fontSize: "12px", fontWeight: 600 }}>2021 – 2024</span>
                </div>
                <p style={{ color: "#2a1200", fontSize: "16px", fontWeight: 800, margin: "0 0 2px", lineHeight: 1.3 }}>
                  Bachelor of Computer Applications
                </p>
                <p style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, margin: "0 0 10px", letterSpacing: "1px", textTransform: "uppercase" }}>BCA</p>
                <p style={{ color: "#7a4a28", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Completed with focus on programming fundamentals, web development, and software engineering principles.
                </p>
              </div>
            </div>

            {/* MCA */}
            <div style={{ position: "relative" }}>
              {/* Dot on line */}
              <div style={{
                position: "absolute", left: "-24px", top: "10px",
                width: "16px", height: "16px", borderRadius: "50%",
                background: "#f5ede0", border: "3px solid #7c4a1e",
                boxShadow: "0 0 0 3px rgba(124,74,30,0.2)",
                animation: "pulse 2s ease-in-out infinite", zIndex: 1,
              }} />
              <div style={{
                padding: "20px 22px", borderRadius: "18px",
                background: "linear-gradient(145deg, #eeddd0, #e4cdb8)",
                border: "1.5px solid #a0522d66",
                boxShadow: "0 6px 28px rgba(124,74,30,0.18)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    padding: "4px 14px", borderRadius: "999px",
                    background: "rgba(124,74,30,0.10)", border: "1.5px solid #7c4a1e",
                    color: "#7c4a1e", fontSize: "11px", fontWeight: 700,
                    display: "flex", alignItems: "center", gap: "6px",
                  }}>
                    <span style={{
                      width: "7px", height: "7px", borderRadius: "50%",
                      background: "#7c4a1e", display: "inline-block",
                      animation: "pulse 1.4s ease-in-out infinite",
                    }} />
                    In Progress
                  </span>
                  <span style={{ color: "#a0522d", fontSize: "12px", fontWeight: 600 }}>2024 – Present</span>
                </div>
                <p style={{ color: "#2a1200", fontSize: "16px", fontWeight: 800, margin: "0 0 2px", lineHeight: 1.3 }}>
                  Master of Computer Applications
                </p>
                <p style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, margin: "0 0 10px", letterSpacing: "1px", textTransform: "uppercase" }}>MCA</p>
                <p style={{ color: "#7a4a28", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                  Currently pursuing with specialization in advanced software development, cloud computing, and modern web technologies.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
