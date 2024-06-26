import  React from "react";
import './wahtwedo.css'
function FeaturesSection() {
  const stepsData = [
    {
      title: "1. Sign up",
      description: "Create an account, sign up to be a mentor or mentee",
      icon: "./first.png",
    },
    {
      title: "2. Find a Mentor",
      description: "Once you've found the right matches,",
      icon: "./second.png",
    },
    {
      title: "3. Send Mentor Request",
      description: "Request a session with matched mentor",
      icon: "./third.png",
    },
    {
      title: "4. Connect",
      description: "Connect with more than 6000 mentors",
      icon: "./fourth.png",
    },
    {
      title: "5. Schedule Meeting",
      description: "Earn TeeTors Points engaging with others",
      icon: "./fifth.png",
    },
  ];
  return (
    <>
      <section className="features-section mb-5">
        <header className="section-header">
          <h3 className="section-subtitle">Features</h3>
          <h2 className="section-title text-black">How it works</h2>
        </header>

    <div className="steps-list">
          {stepsData.map((step, index) => (
            <div key={index} className="step-item">
               <img src={step.icon} alt="Icon 1" className="feature_icon" />
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default FeaturesSection;