// src/components/Contact.js
import React from 'react';
import Header from '../components/Layout/Header';

const Contact = () => {
  return <>
  <Header/>
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  </>
};

export default Contact;