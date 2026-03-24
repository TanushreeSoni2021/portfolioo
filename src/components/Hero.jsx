import { useState, useEffect } from "react";
import { FaDownload, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFigma, SiJavascript, SiTypescript } from "react-icons/si";
import { profile, socialLinks } from "../data/site";
import profileImg from "../assets/mee.png";

const heroStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateX(-50%) translateY(0px); }
    50%       { transform: translateX(-50%) translateY(-10px); }
  }
`;

// Each orbit ring: radius, icons on it, speed & direction
const orbitRings = [
  {
    r: 110,
    duration: "8s",
    direction: "orbitCW",
    counter: "counterCW",
    icons: [
      { icon: FaHtml5,      color: "#e34f26", startAngle: 0   },
      { icon: FaCss3Alt,    color: "#1572b6", startAngle: 120 },
      { icon: SiTypescript, color: "#3178c6", startAngle: 240 },
    ],
  },
  {
    r: 200,
    duration: "14s",
    direction: "orbitCCW",
    counter: "counterCCW",
    icons: [
      { icon: SiFigma,      color: "#a259ff", startAngle: 0   },
      { icon: SiMongodb,    color: "#4db33d", startAngle: 90  },
      { icon: SiJavascript, color: "#f7df1e", startAngle: 180 },
      { icon: FaGitAlt,     color: "#f05032", startAngle: 270 },
    ],
  },
  {
    r: 300,
    duration: "20s",
    direction: "orbitCW",
    counter: "counterCW",
    icons: [
      { icon: FaReact,      color: "#61dafb", startAngle: 0   },
      { icon: SiTailwindcss,color: "#38bdf8", startAngle: 120 },
      { icon: FaNodeJs,     color: "#8cc84b", startAngle: 240 },
    ],
  },
];

export default function Hero() {
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

  // Scale down rings on smaller screens
  const ringScale = isMobile ? 0.45 : isTablet ? 0.65 : 1;

  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding :"0% 5%",
        background: "#f5ede0",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <style>{heroStyles}</style>
      {/* Background orbit circles — left side */}
      <div style={{
        position: "absolute", left: "-180px", top: "50%",
        transform: "translateY(-50%)",
        width: "600px", height: "600px", borderRadius: "50%",
        border: "1.5px solid rgba(180,80,10,0.16)",
        background: "radial-gradient(circle at 70% 30%, rgba(200,100,20,0.10) 0%, rgba(160,70,10,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: "-80px", top: "50%",
        transform: "translateY(-50%)",
        width: "400px", height: "400px", borderRadius: "50%",
        border: "1px solid rgba(200,90,15,0.14)",
        background: "radial-gradient(circle at 40% 60%, rgba(220,100,20,0.09) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        padding: isMobile ? "100px 20px 60px" : isTablet ? "80px 48px 60px" : "0% 5%",
        gap: isMobile ? "48px" : "0",
      }}>

        {/* LEFT — Text (flex: 8) */}
        <div style={{
          flex: isMobile ? "unset" : "8",
          width: isMobile ? "100%" : "auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
          paddingRight: isMobile ? "0" : isTablet ? "32px" : "60px",
        }}>

          {/* Greeting + Heading */}
          <div>
            <p style={{
              color: "#7a4a28", fontSize: isMobile ? "15px" : "18px",
              fontWeight: 500, marginBottom: "8px",
            }}>
              Hey, I am{" "}
              <span style={{ color: "#7c4a1e", fontWeight: 700 }}>{profile.name.split(" ")[0]}</span>
            </p>
            <h1 style={{
              color: "#2a1200",
              fontSize: isMobile ? "clamp(36px, 10vw, 52px)" : isTablet ? "clamp(44px, 6vw, 64px)" : "clamp(52px, 5.5vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: 0,
            }}>
              Frontend Developer
            </h1>
          </div>

          {/* Intro */}
          <p style={{
            color: "#7a4a28",
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.8,
            maxWidth: isMobile ? "100%" : "560px",
            margin: 0,
          }}>
            {profile.intro}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              background: "#7c4a1e", color: "white",
              padding: isMobile ? "10px 22px" : "12px 28px",
              borderRadius: "999px", fontWeight: 700, fontSize: "14px",
              textDecoration: "none", boxShadow: "0 0 28px rgba(124,74,30,0.35)",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5c3010")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#7c4a1e")}
            >Hire Me</a>
            <a href="/Tanushree-Soni-Resume.pdf" target="_blank" rel="noreferrer" style={{
              background: "transparent", color: "#2a1200",
              padding: isMobile ? "10px 22px" : "12px 28px",
              borderRadius: "999px", fontWeight: 600, fontSize: "14px",
              textDecoration: "none", border: "1.5px solid #c8a882",
              display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7c4a1e"; e.currentTarget.style.color = "#7c4a1e"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#c8a882"; e.currentTarget.style.color = "#2a1200"; }}
            ><FaDownload size={13} /> Resume</a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                width: "40px", height: "40px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#eeddd0", border: "1.5px solid #c8a882",
                color: "#7a4a28", textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7c4a1e"; e.currentTarget.style.color = "#7c4a1e"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#c8a882"; e.currentTarget.style.color = "#7a4a28"; }}
              ><s.icon size={16} /></a>
            ))}
          </div>

          {/* Quote card */}
          <div style={{
            padding: "16px 20px", borderRadius: "16px",
            background: "#eeddd0", border: "1.5px solid #c8a882",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            maxWidth: isMobile ? "100%" : "520px",
          }}>
            <p style={{ color: "#7a4a28", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
              "Passionate about building clean, modern web experiences that blend great design with solid engineering."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "12px" }}>
              <img src={profileImg} alt={profile.name} style={{
                width: "2px", height: "2px", borderRadius: "50%",
                objectFit: "cover", border: "2px solid #7c4a1e", flexShrink: 0,
              }} />
              <div>
                <p style={{ color: "#2a1200", fontSize: "12px", fontWeight: 700, margin: 0 }}>{profile.name}</p>
                <p style={{ color: "#7c4a1e", fontSize: "11px", fontWeight: 600, margin: 0 }}>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Rings + image (flex: 4) */}
        <div style={{
          flex: isMobile ? "unset" : "4",
          width: isMobile ? "100%" : "auto",
          position: "relative",
          alignSelf: "stretch",
          minHeight: isMobile ? "340px" : "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

          {/* Orbit rings + icons */}
          {orbitRings.map((ring) => {
            const size = ring.r * 2 * ringScale;
            const iconBox = isMobile ? 30 : 38;
            const iconSz  = isMobile ? 14 : 18;
            return (
              <div key={ring.r} style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: `${size}px`, height: `${size}px`,
                marginTop: `-${size / 2}px`, marginLeft: `-${size / 2}px`,
                borderRadius: "50%",
                border: "1.5px solid rgba(180,80,10,0.18)",
                animation: `${ring.direction} ${ring.duration} linear infinite`,
                pointerEvents: "none",
                zIndex: 2,
              }}>
                {ring.icons.map((item, j) => {
                  const rad = (item.startAngle * Math.PI) / 180;
                  // position on the circle border
                  const cx = 50 + Math.cos(rad) * 50; // % from left
                  const cy = 50 + Math.sin(rad) * 50; // % from top
                  return (
                    <div key={j} style={{
                      position: "absolute",
                      top: `${cy}%`,
                      left: `${cx}%`,
                      transform: "translate(-50%, -50%)",
                      width: `${iconBox}px`, height: `${iconBox}px`,
                      borderRadius: "50%",
                      background: "rgba(245,237,224,0.95)",
                      border: `2px solid ${item.color}66`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 0 10px ${item.color}55`,
                      animation: `${ring.counter} ${ring.duration} linear infinite`,
                    }}>
                      <item.icon size={iconSz} color={item.color} />
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* Profile image — pinned to bottom of section */}
          <img
            src={profileImg}
            alt={profile.name}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              width: isMobile ? "180px" : isTablet ? "240px" : "340px",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 0 30px rgba(124,74,30,0.25))",
            }}
          />
        </div>

      </div>
    </section>
  );
}
