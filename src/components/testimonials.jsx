import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Testimonials.css';

const Testimonial = ({ name, role, image, rating, text }) => (
  <div className="bg-white p-12  rounded-2re shadow-md text-center testimonial-card">
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mx-auto mb-2"
    />
    <h3 className="font-bold">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonials = [
    {
      name: "Anmol KC",
      role: "Environmental Activist",
      image: "../../public/assets/person4.png",
      rating: 5,
      text: "Wastix has revolutionized our community's approach to recycling. Their innovative solutions have made it easier than ever for residents to properly sort and recycle their waste.",
    },
    {
      name: "Binod Chaudhary",
      role: "City Planner",
      image: "../../public/assets/person5.png",
      rating: 4,
      text: "Implementing Wastix's recycling program in our city has led to a 40% increase in recycling rates. Their user-friendly app and educational resources have really engaged our citizens.",
    },
    {
      name: "Ram Bahadhur Shrestha",
      role: "School Principal",
      image: "../../public/assets/person2.png",
      rating: 5,
      text: "Wastix's school recycling program has been a game-changer. Our students are now passionate about recycling and have even initiated their own eco-projects.",
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Consultant",
      image: "../../public/assets/person1.png",
      rating: 5,
      text: "Wastix's data-driven approach to waste management has provided invaluable insights for our clients. Their platform is transforming how we think about and handle waste.",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "../../public/assets/person2.png",
      rating: 4,
      text: "As a small business owner, I was amazed at how easy Wastix made it for us to implement a comprehensive recycling program. It's been great for our image and our bottom line.",
    },
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match this with your CSS transition time

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextTestimonial();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideTimer);
  }, [currentIndex]);

  return (
    <section className="py-16 testimonials-section">
      <div className="container mx-auto px-4">

        <h1 className="text-center text-[#00a86b] text-5xl font-semibold mb-2 animate-fadeIn  ">
          Testimonials
        </h1>
        <br />
        <hr className="animate-scaleIn" />
        <br />
        <h3 className="text-center text-3xl font-bold mb-12 animate-fadeIn">
          What our clients say about Wastix
        </h3>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={prevTestimonial}
            className="mx-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="mx-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;