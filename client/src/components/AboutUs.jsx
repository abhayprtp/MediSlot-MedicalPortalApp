import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Dr. Abhay and our team are committed to improving patient outcomes by integrating cutting-edge technology with personalized care strategies. We prioritize patient well-being through collaborative efforts and continuous refinement of our healthcare solutions. Our goal is to empower patients with reliable, efficient, and empathetic support, ensuring their health needs are met with the highest standards of excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
