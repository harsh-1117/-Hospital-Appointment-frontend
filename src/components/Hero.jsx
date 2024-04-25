import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            MediCore Healthcare Center stands as a beacon of excellence in the realm of medical care, embodying a commitment to unparalleled quality and compassion. Our cutting-edge facility is dedicated to providing comprehensive healthcare services, meticulously tailored to meet the unique needs of every individual we serve.
Led by a team of esteemed professionals, ensuring that each patient's journey towards optimal health is not only guided with expertise but also enriched with empathy.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
