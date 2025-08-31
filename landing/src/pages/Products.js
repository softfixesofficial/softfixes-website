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

      {/* Tag Manager Product */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              fontSize: "0.9rem",
              fontWeight: "600",
              marginBottom: "2rem"
            }}>
              🚀 Our Main Product
            </div>
            <h2 style={{ 
              fontSize: "3rem", 
              marginBottom: "1.5rem",
              color: "#f8fafc"
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
              Manage all your application tags from one place. Simple, fast, and efficient.
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
            {/* Left Side - Product Card */}
            <div>
              <div className="card" style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "3rem",
                textAlign: "center"
              }}>
                <div style={{ 
                  fontSize: "4rem", 
                  marginBottom: "2rem"
                }}>🏷️</div>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  marginBottom: "1.5rem",
                  color: "#f8fafc"
                }}>
                  What is Tag Manager?
                </h3>
                <p style={{ 
                  marginBottom: "2.5rem",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#cbd5e1"
                }}>
                  A tool that helps you organize and manage tags across all your applications. 
                  Instead of managing tags in each app separately, you can do it all from one dashboard.
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
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Try Tag Manager
                </a>
              </div>
            </div>

            {/* Right Side - Features */}
            <div>
              <h3 style={{ 
                fontSize: "2rem", 
                marginBottom: "2rem",
                color: "#f8fafc"
              }}>Why use Tag Manager?</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { 
                    icon: "🔐", 
                    title: "One Login", 
                    desc: "Sign in once and access all your applications" 
                  },
                  { 
                    icon: "🎯", 
                    title: "Centralized Management", 
                    desc: "Manage all tags from one dashboard" 
                  },
                  { 
                    icon: "⚡", 
                    title: "Save Time", 
                    desc: "No more switching between different apps" 
                  },
                  { 
                    icon: "📊", 
                    title: "Better Organization", 
                    desc: "Keep all your tags organized and searchable" 
                  },
                  { 
                    icon: "🔄", 
                    title: "Auto Sync", 
                    desc: "Changes sync automatically across all apps" 
                  },
                  { 
                    icon: "📱", 
                    title: "Works Everywhere", 
                    desc: "Access from your computer, tablet, or phone" 
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "rgba(99, 102, 241, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
                      <div>
                        <div style={{ fontWeight: "600", color: "#f8fafc", marginBottom: "0.25rem" }}>
                          {feature.title}
                        </div>
                        <div style={{ fontSize: "0.95rem", color: "#94a3b8" }}>
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* How it works */}
              <div style={{ 
                marginTop: "3rem", 
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <h4 style={{ 
                  fontSize: "1.2rem", 
                  marginBottom: "1rem",
                  color: "#f8fafc",
                  textAlign: "center"
                }}>
                  How it works
                </h4>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "1rem",
                  fontSize: "0.95rem",
                  color: "#cbd5e1"
                }}>
                  <span>1. Login</span>
                  <span>→</span>
                  <span>2. Manage Tags</span>
                  <span>→</span>
                  <span>3. Done!</span>
                </div>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#94a3b8", 
                  marginTop: "1rem", 
                  textAlign: "center",
                  fontStyle: "italic"
                }}>
                  It's that simple. No complex setup required.
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
              Need something custom?
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              We can build custom solutions for your specific needs.
            </p>
            <a 
              href="/contact"
              className="btn-primary" 
              style={{ fontSize: "1.1rem", padding: "1rem 2rem", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products; 