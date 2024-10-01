import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Import your logo
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#228B22", // forest green background
        maxHeight: "50vh", // Reduced height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px", // Reduced padding
        boxSizing: "border-box",
      }}
    >
      <div
        className="row"
        style={{
          maxWidth: "1200px", // Adjusted width for a smaller height
          maxHeight: "47vh", // Added max height for the content container
          overflowY: "auto", // Handle overflow if content exceeds the max height
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#fff",
          padding: "20px", // Reduced padding
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)", // Reduced shadow size
          gap: "30px", // Adjusted gap
          boxSizing: "border-box",
          width: "100%", // Ensure it fits within its container
          flexWrap: "wrap", // Allow wrapping on smaller screens
        }}
      >
        {/* Left Side: About Information and Logo */}
        <div
          className="col-md-6"
          style={{
            flex: 1,
            minWidth: "300px", // Ensures a minimum width for better readability
          }}
        >
          <img
            src={logo}
            alt="KrishiSarthi Logo"
            style={{
              maxWidth: "120px", // Adjusted logo size
              marginBottom: "15px", // Adjusted margin
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          />
          <h1
            style={{
              fontSize: "2rem",
              color: "#333",
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          >
            About KrishiSarthi
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555",
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          >
            KrishiSarthi is your trusted companion in the world of agriculture.
            Built with the aim of empowering farmers, KrishiSarthi offers a
            wealth of information on soil conditions, crop recommendations, pest
            control, and real-time market prices. Whether you're a small-scale
            farmer or a large agricultural business, KrishiSarthi provides the
            tools you need to make informed decisions, improve crop yields, and
            stay updated with the latest agricultural trends.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555",
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          >
            Our platform is designed to bridge the gap between traditional farming
            practices and modern technology. With a focus on sustainability and
            innovation, we aim to help farmers achieve better productivity and
            profitability.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#555",
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          >
            Join the KrishiSarthi community today and take a step towards a
            smarter, more sustainable farming future.
          </p>
        </div>

        {/* Right Side: Feedback Form */}
        <div
          className="col-md-6"
          style={{
            flex: 1,
            minWidth: "300px", // Ensures a minimum width for better readability
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#333",
              marginBottom: "15px",
              animation: "fadeIn 2s", // Add fade-in animation
            }}
          >
            We Value Your Feedback!
          </h2>
          {submitted ? (
            <p
              style={{
                color: "#4CAF50",
                fontSize: "1rem",
                textAlign: "center",
                animation: "fadeIn 2s", // Add fade-in animation
              }}
            >
              Thank you for your feedback!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px", // Reduced gap
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={feedback.name}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={feedback.email}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow
                }}
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={feedback.message}
                onChange={handleChange}
                required
                style={{
                  padding: "8px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  height: "120px", // Reduced height
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow
                  resize: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "8px 15px", // Reduced padding
                  fontSize: "0.9rem", // Adjusted font size
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow
                  animation: "fadeIn 2s", // Add fade-in animation
                }}
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
            max-height: none;
            padding: 10px;
          }
          .content-container {
            flex-direction: column;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.4rem;
          }
          p, input, textarea, button {
            font-size: 0.8rem;
          }
          textarea {
            height: 100px;
          }
          img {
            max-width: 100px;
          }
        }
        /* Add gradient background */
        .container-fluid {
          background-image: linear-gradient(to bottom, #228B22, #3E8E41);
        }
        /* Add animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default About;