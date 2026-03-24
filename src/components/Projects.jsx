import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/site";
import useInView from "../hooks/useInView";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [headerRef, headerVisible] = useInView(0.2);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{
      width: "100%", minHeight: "100vh", background: "#f5ede0",
      padding: "0% 5%", position: "relative", overflow: "hidden",
    }}>

      {/* Top divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #7c4a1e55, transparent)",
        pointerEvents: "none",
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "clamp(80px, 18vw, 200px)", fontWeight: 900,
        color: "rgba(124,74,30,0.04)", letterSpacing: "0.2em",
        pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", zIndex: 0,
      }}>PROJECTS</div>

      <div style={{
        position: "relative", zIndex: 10, width: "100%",
        padding: isMobile ? "90px 24px 60px" : "80px 80px",
      }}>

        {/* Header */}
        <div style={{ marginBottom: "52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "2px", background: "#7c4a1e", borderRadius: "2px" }} />
            <span style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              My Work
            </span>
          </div>
          <h2 style={{
            color: "#2a1200",
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(34px, 3.8vw, 52px)",
            fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 16px",
          }}>
            Things I've<br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "#7c4a1e" }}>built & shipped</span>
              <svg viewBox="0 0 200 12" style={{
                position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
              }} preserveAspectRatio="none">
                <path d="M0,8 Q25,2 50,8 Q75,14 100,8 Q125,2 150,8 Q175,14 200,8"
                  fill="none" stroke="#7c4a1e" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              </svg>
            </span>
          </h2>
          <p style={{ color: "#7a4a28", fontSize: "15px", lineHeight: 1.8, maxWidth: "480px", margin: 0 }}>
            A selection of projects that showcase my skills in frontend development, full-stack engineering, and UI design.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "24px",
        }}>
          {projects.map((project, i) => {
            const hovered = hoveredIdx === i;
            return (
              <div
                key={project.title}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  background: hovered ? "linear-gradient(145deg, #eeddd0, #e4cdb8)" : "#eeddd0",
                  border: `1.5px solid ${hovered ? "#a0522d88" : "#c8a882"}`,
                  boxShadow: hovered ? "0 12px 40px rgba(124,74,30,0.18)" : "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 0.1}s`,
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div style={{
                    position: "absolute", top: "16px", right: "16px",
                    padding: "3px 10px", borderRadius: "999px",
                    background: "linear-gradient(135deg, #7c4a1e, #a0522d)",
                    color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: "0.5px",
                  }}>Featured</div>
                )}

                {/* Glow on hover */}
                <div style={{
                  position: "absolute", top: "-40px", right: "-40px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(124,74,30,0.12) 0%, transparent 70%)",
                  opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }} />

                {/* Title */}
                <h3 style={{
                  color: "#2a1200", fontSize: "18px", fontWeight: 800,
                  margin: "0 0 10px", letterSpacing: "-0.5px",
                }}>{project.title}</h3>

                {/* Description */}
                <p style={{
                  color: "#7a4a28", fontSize: "13.5px", lineHeight: 1.75,
                  margin: "0 0 20px",
                }}>{project.description}</p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 12px", borderRadius: "999px",
                      background: hovered ? "rgba(124,74,30,0.12)" : "rgba(124,74,30,0.08)",
                      border: "1px solid #c8a882",
                      color: "#7c4a1e", fontSize: "11px", fontWeight: 600,
                      transition: "all 0.3s ease",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "7px 16px", borderRadius: "999px",
                    background: "#7c4a1e", color: "white",
                    fontSize: "12px", fontWeight: 600, textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#5c3010"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#7c4a1e"}
                  >
                    <FaGithub size={13} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "7px 16px", borderRadius: "999px",
                    background: "transparent", color: "#7c4a1e",
                    border: "1.5px solid #c8a882",
                    fontSize: "12px", fontWeight: 600, textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7c4a1e"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#c8a882"; }}
                  >
                    <FaExternalLinkAlt size={11} /> Live
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
