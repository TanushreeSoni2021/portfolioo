import { useState, useEffect, useRef } from "react";
import { techStack } from "../data/site";

const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

function SkillCard({ skill, animate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "24px 20px 20px",
        borderRadius: "20px",
        background: hovered
          ? `linear-gradient(145deg, #eeddd0, ${skill.color}18)`
          : "#eeddd0",
        border: `1.5px solid ${hovered ? skill.color + "88" : "#c8a882"}`,
        boxShadow: hovered
          ? `0 12px 40px ${skill.color}33, 0 0 0 1px ${skill.color}22`
          : "0 4px 16px rgba(0,0,0,0.05)",
        transition: "all 0.35s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Glow blob on hover */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: `radial-gradient(circle, ${skill.color}33 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
      }} />

      {/* Icon + label row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "12px",
          background: hovered ? `${skill.color}22` : "rgba(124,74,30,0.08)",
          border: `1.5px solid ${hovered ? skill.color + "55" : "#c8a882"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.35s ease",
          boxShadow: hovered ? `0 0 14px ${skill.color}44` : "none",
        }}>
          <skill.icon size={22} color={hovered ? skill.color : "#7c4a1e"} style={{ transition: "color 0.3s" }} />
        </div>
        <div>
          <p style={{ color: "#2a1200", fontSize: "15px", fontWeight: 700, margin: 0 }}>{skill.label}</p>
          <p style={{ color: "#7c4a1e", fontSize: "11px", fontWeight: 600, margin: 0 }}>{skill.category}</p>
        </div>
        {/* Level badge */}
        <div style={{
          marginLeft: "auto",
          padding: "3px 10px", borderRadius: "999px",
          background: hovered ? skill.color : "rgba(124,74,30,0.10)",
          border: `1px solid ${hovered ? skill.color : "#c8a882"}`,
          transition: "all 0.35s ease",
        }}>
          <span style={{ color: hovered ? "white" : "#7c4a1e", fontSize: "11px", fontWeight: 700 }}>
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Description */}
      <p style={{
        color: "#7a4a28", fontSize: "12.5px", lineHeight: 1.7,
        margin: "0 0 14px", minHeight: "36px",
      }}>{skill.description}</p>

      {/* Animated progress bar */}
      <div style={{
        height: "6px", borderRadius: "999px",
        background: "rgba(180,80,10,0.12)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: "999px",
          width: animate ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, #7c4a1e, ${skill.color})`,
          boxShadow: `0 0 8px ${skill.color}88`,
          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.1s",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // Trigger progress bar animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeTab === "All"
    ? techStack
    : techStack.filter((s) => s.category === activeTab);

  return (
    <section id="skills" ref={sectionRef} style={{
      width: "100%", minHeight: "100vh", background: "#f5ede0",
      position: "relative", overflow: "hidden", padding: "0% 5%",
    }}>

      {/* Top divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #7c4a1e55, transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: isMobile ? "90px 24px 60px" : "80px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "2px", background: "#7c4a1e", borderRadius: "2px" }} />
            <span style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              My Skills
            </span>
          </div>
          <h2 style={{
            color: "#2a1200",
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(34px, 3.8vw, 52px)",
            fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 16px",
          }}>
            Tools I work<br />
            <span style={{ color: "#7c4a1e" }}>with daily</span>
          </h2>
          <p style={{ color: "#7a4a28", fontSize: "15px", lineHeight: 1.8, maxWidth: "480px", margin: 0 }}>
            A curated set of technologies I use to build fast, scalable, and beautiful web experiences.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{
              padding: "8px 20px", borderRadius: "999px",
              fontSize: "13px", fontWeight: 600, cursor: "pointer",
              border: "1.5px solid",
              borderColor: activeTab === cat ? "#7c4a1e" : "#c8a882",
              background: activeTab === cat
                ? "linear-gradient(135deg, #7c4a1e, #a0522d)"
                : "#eeddd0",
              color: activeTab === cat ? "white" : "#7a4a28",
              boxShadow: activeTab === cat ? "0 4px 16px rgba(124,74,30,0.35)" : "none",
              transition: "all 0.25s ease",
            }}>{cat}</button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: "20px",
        }}>
          {filtered.map((skill) => (
            <SkillCard key={skill.label} skill={skill} animate={animate} />
          ))}
        </div>

      </div>
    </section>
  );
}
