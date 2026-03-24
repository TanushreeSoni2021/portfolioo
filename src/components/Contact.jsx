import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { profile, contactInfo, socialLinks } from "../data/site";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [headerRef, headerVisible] = useInView(0.2);
  const [leftRef, leftVisible] = useInView(0.15);

  useEffect(() => {
    const handle = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xkoqdgvg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      alert("Failed to send. Please try again.");
    }
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    background: "#eeddd0", border: `1.5px solid ${focused === field ? "#7c4a1e" : "#c8a882"}`,
    color: "#2a1200", fontSize: "14px", outline: "none",
    transition: "border-color 0.2s ease", boxSizing: "border-box",
    fontFamily: "inherit",
    boxShadow: focused === field ? "0 0 0 3px rgba(124,74,30,0.10)" : "none",
  });

  return (
    <section id="contact" style={{
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
      }}>CONTACT</div>

      <div style={{
        position: "relative", zIndex: 10, width: "100%",
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: isMobile ? "90px 24px 60px" : isTablet ? "80px 48px" : "80px 80px",
      }}>
        <div style={{ width: "100%" }}>

          {/* Header */}
          <div ref={headerRef} style={{ marginBottom: "52px", opacity: headerVisible ? 1 : 0, transform: headerVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "2px", background: "#7c4a1e", borderRadius: "2px" }} />
              <span style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                Get In Touch
              </span>
            </div>
            <h2 style={{
              color: "#2a1200",
              fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(34px, 3.8vw, 52px)",
              fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 16px",
            }}>
              Let's work<br />
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ color: "#7c4a1e" }}>together</span>
                <svg viewBox="0 0 200 12" style={{
                  position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
                }} preserveAspectRatio="none">
                  <path d="M0,8 Q25,2 50,8 Q75,14 100,8 Q125,2 150,8 Q175,14 200,8"
                    fill="none" stroke="#7c4a1e" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
                </svg>
              </span>
            </h2>
            <p style={{ color: "#7a4a28", fontSize: "15px", lineHeight: 1.8, maxWidth: "480px", margin: 0 }}>
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          {/* Two column layout */}
          <div style={{
            display: "flex", flexDirection: isMobile ? "column" : "row",
            gap: "40px", alignItems: "flex-start",
          }}>

            {/* LEFT — Contact info */}
            <div ref={leftRef} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", opacity: leftVisible ? 1 : 0, transform: leftVisible ? "translateX(0)" : "translateX(-40px)", transition: "opacity 0.7s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.1s cubic-bezier(0.22,1,0.36,1)" }}>

              {/* Info cards */}
              {[
                { icon: FaEnvelope, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: FaMapMarkerAlt, label: "Location", value: contactInfo.location, href: null },
                { icon: FaGithub, label: "GitHub", value: "TanushreeSoni2021", href: contactInfo.github },
                { icon: FaLinkedinIn, label: "LinkedIn", value: "Connect with me", href: contactInfo.linkedin },
              ].map((item) => (
                <a key={item.label} href={item.href || "#"} target={item.href ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => e.currentTarget.querySelector(".info-card").style.borderColor = "#7c4a1e"}
                  onMouseLeave={(e) => e.currentTarget.querySelector(".info-card").style.borderColor = "#c8a882"}
                >
                  <div className="info-card" style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px 20px", borderRadius: "16px",
                    background: "#eeddd0", border: "1.5px solid #c8a882",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    transition: "border-color 0.2s ease",
                  }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                      background: "rgba(124,74,30,0.10)", border: "1.5px solid #c8a882",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <item.icon size={16} color="#7c4a1e" />
                    </div>
                    <div>
                      <p style={{ color: "#a0522d", fontSize: "11px", fontWeight: 700, margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</p>
                      <p style={{ color: "#2a1200", fontSize: "13.5px", fontWeight: 600, margin: 0 }}>{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#eeddd0", border: "1.5px solid #c8a882",
                    color: "#7a4a28", textDecoration: "none", transition: "all 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7c4a1e"; e.currentTarget.style.color = "#7c4a1e"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#c8a882"; e.currentTarget.style.color = "#7a4a28"; }}
                  ><s.icon size={16} /></a>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={{ flex: 1.4 }}>
              <form onSubmit={handleSubmit} style={{
                padding: "32px", borderRadius: "24px",
                background: "#eeddd0", border: "1.5px solid #c8a882",
                boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                display: "flex", flexDirection: "column", gap: "16px",
              }}>

                <div style={{ display: "flex", gap: "16px", flexDirection: isMobile ? "column" : "row" }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>Name</label>
                    <input
                      type="text" placeholder="Your name" required
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>Email</label>
                    <input
                      type="email" placeholder="your@email.com" required
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ color: "#7c4a1e", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..." required rows={5}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <button type="submit" style={{
                  padding: "13px 28px", borderRadius: "999px",
                  background: sent ? "#5c3010" : "linear-gradient(135deg, #7c4a1e, #a0522d)",
                  color: "white", fontSize: "14px", fontWeight: 700,
                  border: "none", cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(124,74,30,0.35)",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.3px",
                }}>
                  {sent ? "✓ Message Sent!" : "Send Message →"}
                </button>

              </form>
            </div>

          </div>

          {/* Footer note */}
          <div style={{
            marginTop: "60px", paddingTop: "24px",
            borderTop: "1px solid #c8a88255",
            textAlign: "center",
          }}>
            <p style={{ color: "#a0522d", fontSize: "13px", margin: 0 }}>
              {profile.footerNote}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
