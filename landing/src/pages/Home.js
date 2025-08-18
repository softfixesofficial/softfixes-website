// Clean and simple home page with focused content and clear messaging.
import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              Welcome to <span className="text-gradient">SoftFixes</span>
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#94a3b8" }}>
              Fix it fast / own the future
            </p>
            <p style={{ fontSize: "1.1rem", marginBottom: "3rem" }}>
              We build scalable SaaS solutions for modern teams. Our focus is on creating applications that solve real-world problems with clean, efficient code.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a 
                href="https://tagmanager.softfixes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Get Started with Tag Manager
              </a>
              <a 
                href="/about"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "3rem" }}>
            Why Choose SoftFixes?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                icon: "⚡",
                title: "Fast Development",
                description: "We deliver solutions quickly without compromising on quality or performance."
              },
              {
                icon: "🚀",
                title: "Scalable Solutions",
                description: "Built to grow with your business, our applications scale seamlessly."
              },
              {
                icon: "🎯",
                title: "Problem-Focused",
                description: "Every application we build addresses real challenges in your workflow."
              }
            ].map((feature, index) => (
              <div key={index} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tag Manager Preview */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <span style={{ 
              background: "#10b981", 
              color: "white", 
              padding: "0.5rem 1rem", 
              borderRadius: "20px", 
              fontSize: "0.9rem",
              fontWeight: 600,
              display: "inline-block",
              marginBottom: "1.5rem"
            }}>
              🏷️ Our Flagship Product
            </span>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Tag Manager
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#94a3b8" }}>
              Streamline your tag management across multiple applications. Login once, manage everywhere.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a 
                href="https://tagmanager.softfixes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Try Tag Manager
              </a>
              <a 
                href="/products"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Ready to Get Started?
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              Join us on our journey to revolutionize how businesses solve their daily challenges.
            </p>
            <a 
              href="/contact"
              className="btn-primary" 
              style={{ fontSize: "1.1rem", padding: "1rem 2rem", textDecoration: "none" }}
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 