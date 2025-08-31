// Clean and simple products page featuring Tag Manager and other solutions.
import React from "react";
const TAGMANAGER_URL = process.env.REACT_APP_CLICKUP_REDIRECT_URI;

function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Our <span className="text-gradient">Products</span>
          </h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Discover the applications we've built to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Tag Manager Product */}
      <section className="section">
        <div className="container">
          <div style={{ 
            maxWidth: "1000px", 
            margin: "0 auto",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
            borderRadius: "24px",
            padding: "4rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background decoration */}
            <div style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
              borderRadius: "50%",
              filter: "blur(40px)"
            }}></div>
            
            <div style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                color: "white",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "1.5rem"
              }}>
                🚀 Main Product
              </div>
              <h2 style={{ 
                fontSize: "3.5rem", 
                marginBottom: "1rem",
                color: "#f8fafc",
                fontWeight: "700"
              }}>
                Tag Manager
              </h2>
              <p style={{ 
                fontSize: "1.4rem", 
                color: "#94a3b8", 
                maxWidth: "600px", 
                margin: "0 auto",
                lineHeight: "1.6"
              }}>
                Manage all your application tags from one place. Simple, fast, and efficient.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              position: "relative",
              zIndex: 1
            }}>
              {/* Left Side - Product Info */}
              <div>
                <div style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)"
                }}>
                  <div style={{ 
                    fontSize: "3rem", 
                    marginBottom: "1.5rem",
                    textAlign: "center"
                  }}>🏷️</div>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    marginBottom: "1rem",
                    color: "#f8fafc",
                    textAlign: "center"
                  }}>
                    What is Tag Manager?
                  </h3>
                  <p style={{ 
                    marginBottom: "2rem",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#cbd5e1",
                    textAlign: "center"
                  }}>
                    A tool that helps you organize and manage tags across all your applications from one dashboard.
                  </p>
                  <a 
                    href={TAGMANAGER_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
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
                      e.target.style.boxShadow = "0 8px 25px rgba(99, 102, 241, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Try Tag Manager
                  </a>
                </div>
              </div>

              {/* Right Side - Benefits */}
              <div>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  marginBottom: "2rem",
                  color: "#f8fafc"
                }}>Why choose Tag Manager?</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { icon: "🔐", title: "One Login", desc: "Sign in once, access everything" },
                    { icon: "⚡", title: "Save Time", desc: "No more switching between apps" },
                    { icon: "📊", title: "Better Organization", desc: "Keep all tags organized" },
                    { icon: "🔄", title: "Auto Sync", desc: "Changes sync automatically" }
                  ].map((feature, index) => (
                    <div key={index} style={{
                      padding: "1rem 1.5rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease"
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
                        <span style={{ fontSize: "1.3rem" }}>{feature.icon}</span>
                        <div>
                          <div style={{ fontWeight: "600", color: "#f8fafc", marginBottom: "0.25rem" }}>
                            {feature.title}
                          </div>
                          <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                            {feature.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Simple process */}
                <div style={{ 
                  marginTop: "2rem", 
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    gap: "1rem",
                    fontSize: "1rem",
                    color: "#cbd5e1",
                    marginBottom: "0.5rem"
                  }}>
                    <span>1. Login</span>
                    <span>→</span>
                    <span>2. Manage</span>
                    <span>→</span>
                    <span>3. Done!</span>
                  </div>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    color: "#94a3b8", 
                    fontStyle: "italic"
                  }}>
                    It's that simple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Need something custom?
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              We can build custom solutions for your specific needs.
            </p>
            <a 
              href="/contact"
              style={{ 
                fontSize: "1.1rem", 
                padding: "1rem 2rem", 
                textDecoration: "none",
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                color: "white",
                borderRadius: "12px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
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