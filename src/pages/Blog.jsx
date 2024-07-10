// src/components/Blog.js
import React from 'react';
import Header from '../components/Layout/Header';

const Blog = () => {
  const blogPosts = [
    { title: "5 Ways to Reduce Waste at Home", excerpt: "Learn simple techniques to minimize waste in your daily life." },
    { title: "The Impact of Plastic on Our Environment", excerpt: "Discover the long-term effects of plastic pollution and what we can do about it." },
    { title: "Upcycling: Turn Trash into Treasure", excerpt: "Creative ideas for repurposing items you might otherwise throw away." }
  ];

  return <>
  <Header/>
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Waste Management Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
          </div>
        ))}
      </div>
    </div>
        </>
};

export default Blog;