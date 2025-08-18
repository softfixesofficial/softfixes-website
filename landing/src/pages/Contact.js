// Clean and simple Contact page with form and contact information.
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Have questions or want to work with us? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {/* Contact Form */}
            <div className="card">
              <h2 style={{ fontSize: "1.8rem", marginBottom: "2rem", textAlign: "center" }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label style={{ color: "#cbd5e1", fontSize: "1rem", marginBottom: "0.5rem", display: "block" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#f8fafc",
                      fontSize: "1rem"
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: "#cbd5e1", fontSize: "1rem", marginBottom: "0.5rem", display: "block" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#f8fafc",
                      fontSize: "1rem"
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: "#cbd5e1", fontSize: "1rem", marginBottom: "0.5rem", display: "block" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#f8fafc",
                      fontSize: "1rem"
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: "#cbd5e1", fontSize: "1rem", marginBottom: "0.5rem", display: "block" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#f8fafc",
                      fontSize: "1rem",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: "1rem" }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                {
                  icon: "📧",
                  title: "Email Us",
                  content: "hello@softfixes.com",
                  description: "Send us an email anytime"
                },
                {
                  icon: "💬",
                  title: "Live Chat",
                  content: "Available 9AM - 6PM",
                  description: "Get instant support"
                },
                {
                  icon: "🌐",
                  title: "Social Media",
                  content: "@softfixes",
                  description: "Follow us for updates"
                }
              ].map((item, index) => (
                <div key={index} className="card">
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", textAlign: "center" }}>{item.title}</h3>
                  <div style={{ color: "#6366f1", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", textAlign: "center" }}>
                    {item.content}
                  </div>
                  <p style={{ margin: 0, fontSize: "0.9rem", textAlign: "center" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Need Immediate Assistance?
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              Choose the best way to reach us for quick support and immediate responses.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-secondary">
                📞 Schedule a Call
              </button>
              <button className="btn-secondary">
                💼 Business Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 