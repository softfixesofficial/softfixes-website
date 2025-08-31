// Clean and simple products page featuring Tag Manager and other solutions.
import React from "react";
const TAGMANAGER_URL = process.env.REACT_APP_CLICKUP_REDIRECT_URI;

function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Our <span className="text-gradient">Products</span>
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Discover the applications we've built to solve real-world challenges and streamline workflows.
          </p>
        </div>
      </section>

      {/* Featured Product - Tag Manager */}
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              fontSize: "0.9rem",
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
              marginBottom: "2rem"
            }}>
              <span style={{ marginRight: "0.5rem" }}>🚀</span>
              Our Flagship Product
            </div>
            <h2 style={{ 
              fontSize: "3rem", 
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Tag Manager
            </h2>
            <p style={{ 
              fontSize: "1.3rem", 
              color: "#94a3b8", 
              maxWidth: "700px", 
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Streamline your tag management across multiple applications. Login once, manage everywhere with our powerful unified dashboard.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div>
              <div className="card" style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "3rem",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}>
                <div style={{ 
                  fontSize: "5rem", 
                  marginBottom: "2rem", 
                  textAlign: "center",
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>🏷️</div>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  marginBottom: "1.5rem", 
                  textAlign: "center",
                  color: "#f8fafc"
                }}>
                  Unified Tag Management
                </h3>
                <p style={{ 
                  textAlign: "center", 
                  marginBottom: "2.5rem",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#cbd5e1"
                }}>
                  Access and manage tags across all your applications from a single, intuitive dashboard with real-time synchronization.
                </p>
                <a 
                  href={TAGMANAGER_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary" 
                  style={{ 
                    width: "100%", 
                    textAlign: "center", 
                    display: "block", 
                    textDecoration: "none",
                    padding: "1rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    border: "none",
                    color: "white",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(99, 102, 241, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.3)";
                  }}
                >
                  🚀 Launch Tag Manager
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "2rem", 
                marginBottom: "2.5rem",
                color: "#f8fafc",
                textAlign: "center"
              }}>Key Features</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: "🔐", text: "Single Sign-On Integration", desc: "Secure authentication across all platforms" },
                  { icon: "🎯", text: "Multi-Application Support", desc: "Manage tags from one central location" },
                  { icon: "📊", text: "Real-time Tag Analytics", desc: "Monitor performance and usage metrics" },
                  { icon: "⚡", text: "Bulk Tag Operations", desc: "Efficiently manage multiple tags at once" },
                  { icon: "🔄", text: "Automated Synchronization", desc: "Keep all applications in sync automatically" },
                  { icon: "📱", text: "Mobile-Friendly Interface", desc: "Access from any device, anywhere" }
                ].map((feature, index) => (
                  <div key={index} style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "rgba(99, 102, 241, 0.1)";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.transform = "translateX(0)";
                  }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
                      <div>
                        <div style={{ fontWeight: "600", color: "#f8fafc", marginBottom: "0.25rem" }}>
                          {feature.text}
                        </div>
                        <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                marginTop: "3rem", 
                textAlign: "center",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: "1rem", fontWeight: "600" }}>
                  Complete solution architecture:
                </p>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.75rem", 
                  fontSize: "0.95rem",
                  color: "#cbd5e1"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    justifyContent: "center"
                  }}>
                    <span>🌐</span>
                    <strong>Website + Auth:</strong> 
                    <span style={{ 
                      background: "rgba(99, 102, 241, 0.2)", 
                      padding: "0.25rem 0.75rem", 
                      borderRadius: "6px",
                      marginLeft: "0.5rem"
                    }}>
                      {TAGMANAGER_URL?.replace('https://', '') || 'tagmanager.softfixes.com'}
                    </span>
                  </div>
                </div>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#94a3b8", 
                  marginTop: "1.5rem", 
                  fontStyle: "italic",
                  padding: "1rem",
                  background: "rgba(16, 185, 129, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(16, 185, 129, 0.2)"
                }}>
                  ✨ Login on the website → Get redirected to dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Need a Custom Solution?
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              We specialize in building tailored applications that solve your unique business challenges.
            </p>
            <a 
              href="/contact"
              className="btn-primary" 
              style={{ fontSize: "1.1rem", padding: "1rem 2rem", textDecoration: "none" }}
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products; 