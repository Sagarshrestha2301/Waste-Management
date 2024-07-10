import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = ({ name, role, image, rating, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-2" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Ralph Edwards",
      role: "UX Designer",
      image: "./assets/tes1.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur vehicula et nulla sed. Proin nunc massa tempus convallis pellentesque. Tincidunt vitae est eget erat tristique."
    },
    {
      name: "Leslie Alexander",
      role: "Creative Designer",
      image: "/path/to/leslie-image.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur vehicula et nulla sed. Proin nunc massa tempus convallis pellentesque. Tincidunt vitae est eget erat tristique."
    },
    {
      name: "Savanah Nguyen",
      role: "WP Developer",
      image: "/path/to/savanah-image.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur vehicula et nulla sed. Proin nunc massa tempus convallis pellentesque. Tincidunt vitae est eget erat tristique."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-[#00a86b] text-5xl font-semibold mb-2">Testimonials</h1>
        <h3 className="text-center text-3xl font-bold mb-12">What our clients say about wastix</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button onClick={prevTestimonial} className="mx-2 p-2 rounded-full bg-white shadow-md">
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button onClick={nextTestimonial} className="mx-2 p-2 rounded-full bg-white shadow-md">
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;