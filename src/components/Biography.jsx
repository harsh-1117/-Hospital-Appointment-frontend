import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h1>Biography</h1>
          <h3>Who We Are</h3>
          <p>
           Founded on the principles of excellence, compassion, and innovation, MediCore Hospital has emerged as a cornerstone of healthcare in our community. Established with a vision to redefine medical care, our institution embodies a legacy of commitment to patient-centric services and state-of-the-art treatments.
</p><p>
With a rich history spanning [insert years of operation], MediCore Hospital has continually set benchmarks in healthcare delivery. Our journey began with a humble aspiration to provide comprehensive and personalized care to every individual who walks through our doors. Today, we stand as a beacon of hope and healing, serving as a trusted partner in our patients' pursuit of well-being.
</p><p>
At the heart of MediCore Hospital lies a dedicated team of healthcare professionals, united by a common goal: to empower our patients to lead healthier lives. Our multidisciplinary approach ensures that each patient receives tailored treatment plans, designed to address their unique needs and preferences.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
