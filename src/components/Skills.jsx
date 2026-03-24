import { useState, useEffect, useRef } from "react";
import { techStack } from "../data/site";
import useInView from "../hooks/useInView";

const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

function SkillCard({ skill, animate, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "24px",
        background: hovered
          ? `linear-gradient(160deg, #fff8f2, ${skill.color}14)`
          : "#eeddd0",
        border: `1.5px solid ${hovered ? skill.color + "66" : "#c8a882"}`,
        boxShadow: hovered
          ? `0 20px 50px ${skill.color}28, 0 4px 16px rgba(0,0,0,0.08)`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        overflow: "hidden",
        opacity: animate ? 1 : 0,
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      {/* Colored top accent bar */}
      <div style={{
        height: "4px",
        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}55)`,
        borderRadius: "24px 24px 0 0",
      }} />

      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "-20px", right: "-20px",
        width: "120px", height: "120px", borderRadius: "50%",
        background: `radial-gradient(circle, ${skill.color}22 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      <div style={{ padding: "22px 22px 20px" }}>

        {/* Icon box + level */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{
            width: "52px", height: "52px", borderRadius: "16px",
            background: hovered ? `${skill.color}20` : "rgba(124,74,30,0.08)",
            border: `1.5px solid ${hovered ? skill.color + "55" : "#c8a882"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.35s ease",
            boxShadow: hovered ? `0 0 20px ${skill.color}44` : "none",
          }}>
            <skill.icon size={26} color={hovered ? skill.color : "#7c4a1e"} />
          </div>

          {/* Big level number */}
          <div style={{ textAlign: "right" }}>
            <span style={{
              fontSize: "32px", fontWeight: 900, lineHeight: 1,
              color: hovered ? skill.color : "#c8a882",
              transition: "color 0.35s ease",
              letterSpacing: "-1px",
            }}>{skill.level}</span>
            <span style={{ fontSize: "14px", fontWeight: 700, color: hovered ? skill.color : "#c8a882", transition: "color 0.35s ease" }}>%</span>
          </div>
        </div>

        {/* Name + category */}
        <p style={{ color: "#2a1200", fontSize: "16px", fontWeight: 800, margin: "0 0 3px", letterSpacing: "-0.3px" }}>{skill.label}</p>
        <p style={{
          color: hovered ? skill.color : "#a0522d",
          fontSize: "11px", fontWeight: 700, margin: "0 0 12px",
          letterSpacing: "1.5px", textTransform: "uppercase",
          transition: "color 0.35s ease",
        }}>{skill.category}</p>

        {/* Description */}
        <p style={{
          color: "#7a4a28", fontSize: "12.5px", lineHeight: 1.7,
          margin: "0 0 16px", minHeight: "38px",
        }}>{skill.description}</p>

        {/* Progress bar */}
        <div style={{
          height: "5px", borderRadius: "999px",
          background: "rgba(124,74,30,0.10)",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%", borderRadius: "999px",
            width: animate ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, #7c4a1e, ${skill.color})`,
            boxShadow: hovered ? `0 0 10px ${skill.color}99` : "none",
            transition: "width 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: `${0.2 + index * 0.06}s`,
          }} />
        </div>

      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef(null);
  const [headerRef, headerVisible] = useInView(0.2);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
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

      {/* Watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "clamp(80px, 18vw, 200px)", fontWeight: 900,
        color: "rgba(124,74,30,0.04)", letterSpacing: "0.2em",
        pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", zIndex: 0,
      }}>SKILLS</div>

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
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "#7c4a1e" }}>with daily</span>
              <svg viewBox="0 0 200 12" style={{
                position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
              }} preserveAspectRatio="none">
                <path d="M0,8 Q25,2 50,8 Q75,14 100,8 Q125,2 150,8 Q175,14 200,8"
                  fill="none" stroke="#7c4a1e" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              </svg>
            </span>
          </h2>
          <p style={{ color: "#7a4a28", fontSize: "15px", lineHeight: 1.8, maxWidth: "480px", margin: 0 }}>
            A curated set of technologies I use to build fast, scalable, and beautiful web experiences.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{
              padding: "9px 22px", borderRadius: "999px",
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
          {filtered.map((skill, i) => (
            <SkillCard key={skill.label} skill={skill} animate={animate} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
