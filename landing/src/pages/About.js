// Clean and simple About page with company information and values.
import React from "react";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            About <span className="text-gradient">SoftFixes</span>
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
            We're a passionate startup focused on delivering high-quality software solutions that empower businesses with innovative tools and services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "3rem"
          }}>
            <div className="card">
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem", textAlign: "center" }}>🎯</div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Our Mission</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", textAlign: "center" }}>
                To empower businesses with innovative, easy-to-use applications that address real needs and drive meaningful growth in the digital age.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem", textAlign: "center" }}>🚀</div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>Our Vision</h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", textAlign: "center" }}>
                To become the go-to partner for startups and businesses looking to solve complex challenges with simple, elegant software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
            Our Core Values
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem"
          }}>
            {[
              { 
                icon: "💡", 
                title: "Innovation", 
                description: "We constantly push boundaries with creative solutions that solve real problems."
              },
              { 
                icon: "🤝", 
                title: "Collaboration", 
                description: "We work closely with our clients to understand their unique needs and challenges."
              },
              { 
                icon: "⚡", 
                title: "Speed", 
                description: "We deliver fast, efficient solutions without compromising on quality or reliability."
              },
              { 
                icon: "🎨", 
                title: "Design", 
                description: "We create beautiful, user-friendly interfaces that provide exceptional experiences."
              }
            ].map((value, index) => (
              <div key={index} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{value.icon}</div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{value.title}</h4>
                <p style={{ fontSize: "1rem" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
              Our Story
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              SoftFixes was born from a simple observation: businesses spend too much time on repetitive tasks and managing disconnected tools. 
              We believe technology should solve problems, not create them.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              Our journey started with Tag Manager, our first product designed to streamline tag management across multiple applications. 
              This experience taught us the importance of building solutions that truly understand user workflows.
            </p>
            <a 
              href="https://tagmanager.softfixes.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Try Our First Product
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 