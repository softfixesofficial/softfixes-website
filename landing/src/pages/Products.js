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
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ 
              background: "#10b981", 
              color: "white", 
              padding: "0.5rem 1rem", 
              borderRadius: "20px", 
              fontSize: "0.9rem",
              fontWeight: 600
            }}>
              🚀 Our Flagship Product
            </span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "1rem", marginBottom: "1rem" }}>
              Tag Manager
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: "700px", margin: "0 auto" }}>
              Streamline your tag management across multiple applications. Login once, manage everywhere.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            <div>
              <div className="card">
                <div style={{ fontSize: "4rem", marginBottom: "1rem", textAlign: "center" }}>🏷️</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>
                  Unified Tag Management
                </h3>
                <p style={{ textAlign: "center", marginBottom: "2rem" }}>
                  Access and manage tags across all your applications from a single, intuitive dashboard.
                </p>
                <a 
                  href={TAGMANAGER_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary" 
                  style={{ width: "100%", textAlign: "center", display: "block", textDecoration: "none" }}
                >
                  Visit Tag Manager
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Key Features</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "🔐 Single Sign-On Integration",
                  "🎯 Multi-Application Support", 
                  "📊 Real-time Tag Analytics",
                  "⚡ Bulk Tag Operations",
                  "🔄 Automated Synchronization",
                  "📱 Mobile-Friendly Interface"
                ].map((feature, index) => (
                  <div key={index} style={{
                    padding: "1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    fontSize: "1rem"
                  }}>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginBottom: "1rem" }}>
                  Complete solution architecture:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem" }}>
                  <div>🌐 <strong>Website + Auth:</strong> {TAGMANAGER_URL?.replace('https://', '') || 'tagmanager.softfixes.com'}</div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "1rem", fontStyle: "italic" }}>
                  Login on the website → Get redirected to dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
            Coming Soon
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                title: "Analytics Dashboard",
                category: "Business Intelligence",
                description: "Comprehensive analytics platform for tracking business metrics and performance across all your applications.",
                status: "In Development",
                icon: "📊",
                features: ["Real-time reporting", "Custom dashboards", "Data visualization", "Export capabilities"]
              },
              {
                title: "Customer Portal",
                category: "Customer Success",
                description: "Self-service customer support portal with integrated knowledge base and ticket management.",
                status: "Planning",
                icon: "🤝",
                features: ["Ticket system", "Knowledge base", "Live chat integration", "Mobile app"]
              }
            ].map((product, index) => (
              <div key={index} className="card">
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem"
                }}>
                  <span style={{
                    background: product.status === "In Development" ? "#f59e0b" : "#6b7280",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}>
                    {product.status}
                  </span>
                </div>
                
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{product.icon}</div>
                
                <div style={{
                  color: "#6366f1",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  textTransform: "uppercase"
                }}>
                  {product.category}
                </div>

                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
                  {product.title}
                </h3>

                <p style={{ marginBottom: "1.5rem" }}>
                  {product.description}
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#94a3b8" }}>Features:</h4>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "0.5rem"
                  }}>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} style={{
                        background: "rgba(99, 102, 241, 0.1)",
                        color: "#cbd5e1",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        textAlign: "center"
                      }}>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="/contact"
                  className="btn-secondary" 
                  style={{ width: "100%", textAlign: "center", display: "block", textDecoration: "none" }}
                >
                  Get Notified
                </a>
              </div>
            ))}
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