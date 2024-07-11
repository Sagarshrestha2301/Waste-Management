import React from "react";
import "./AboutUs.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";


const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="about-us">
          <header className="about-header">
            <h1>About Wastix Recyclers</h1>
            <p>Leading the way in sustainable waste management solutions</p>
          </header>

          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At Wasitx Recyclers, we are committed to revolutionizing waste
              management in Nepal. Our goal is to create a cleaner, greener
              future through innovative recycling solutions and community
              education. Provide waste management services to a diverse range of
              clients and work together to improve environmental health by
              segregating waste and changing consumption behaviour through
              increased awareness, consequently turning waste into resources.
              <p>
                A social enterprise dedicated to the management and recycling of
                dry waste. Emphasis is placed on shifting away from reliance on
                waste dumps lacking environmental safeguards towards waste
                management systems that preserve valuable resources within the
                economy. The segregation of waste at its origin is crucial for
                facilitating a sustainable future. At the core of our waste
                management vision in Nepal lies the utilization of waste as
                resources with enhanced value extraction, recycling, recovery,
                and reuse. We advocate for Smart Sustainability: The concept of
                making intelligent decisions regarding consumption and disposal,
                comprehending their effects on both ourselves and the
                environment, and taking proactive measures. The achievement of a
                sustainable and more environmentally friendly future, according
                to us , hinges on collective societal efforts to conserve
                resources through reduction, reuse, repair, repurposing, and
                recycling. Therefore, our primary focus is on empowering our
                clients to adopt similar practices. We aim to foster and
                facilitate smart sustainability by offering a range of waste
                management solutions, from doorstep recycling collection to the
                repurposing of discarded items such as furniture and
                electronics, all while raising environmental consciousness. Our
                home composting system, enables households to manage organic
                waste while we take care of inorganic materials like paper,
                plastic, metal, and glass. Additionally, we provide specialized
                services for handling electronic waste, including repair,
                refurbishment, recycling, or safe disposal. Through our
                Awareness Workshops, individuals can learn how to lead
                sustainable lifestyles by making eco-friendly consumption
                choices and understanding their implications. These initiatives
                serve as effective measures to assist individuals in sorting
                their waste into distinct categories prior to entry into the
                waste stream, thereby reducing the likelihood of it ending up in
                landfills or bodies of water.
              </p>
            </p>
          </section>

          <section className="community-impact">
            <h2>Our Impact</h2>
            <p>
              Through our Waste Education & Awareness Program, we've reached
              thousands of students, professionals, and community members,
              fostering a culture of responsible waste management.
            </p>
            <p>
              Our Sikaru Saathi initiative empowers waste workers, providing
              them with better working conditions and opportunities for growth.
            </p>
          </section>

          <section className="vision">
            <h2>Our Vision</h2>
            <p>
              We envision a Nepal where waste is seen as a resource, not a
              problem. By combining technology, education, and community
              engagement, we're working towards a sustainable future for
              generations to come. Supporting a growing green economy that
              values social and environmental welfare by preserving natural
              resources and enabling local ingenuity.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
