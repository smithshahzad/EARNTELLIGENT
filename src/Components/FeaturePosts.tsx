import React from "react";

const FeaturedPosts: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12">
        {/* Featured Blogs Heading */}
        <h2 className="text-3xl font-bold mb-6">Featured</h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="space-y-4">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Blog Category */}
              <p className="text-green-400 font-bold uppercase text-xs">
                {blog.category}
              </p>
              {/* Blog Title */}
              <h3 className="text-lg font-bold hover:underline cursor-pointer">
                {blog.title}
              </h3>
              {/* Blog Description */}
              <p className="text-gray-600 text-sm">{blog.description}</p>
              {/* Blog Author */}
              <p className="text-sm font-bold">{blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const blogs = [
  {
    category: "NEWS",
    title:
      "Project 2025 and Trump Are Cooking Up a Recipe for a New Nuclear Arms Race",
    description:
      "There are detailed plans for what to do about new nuclear weapons in Project 2025. So what can we expect? More of them, a lot more of...",
    author: "Matthew Gault",
    image: "https://placehold.co/300x200",
  },
  {
    category: "AMAZON",
    title:
      "In Blistering Senate Report, Bernie Sanders Says Amazon Ignored Warning...",
    description:
      "A new committee report on working conditions at the e-commerce giant says that Amazon knows the risks to worker safety and routine...",
    author: "Lucas Ropek",
    image: "https://placehold.co/300x200",
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Oreo Maker Says It’s Using AI to Create New Snacks",
    description:
      "An AI system suggests snack recipes based on desired characteristics, like flavor and aroma.",
    author: "Thomas Maxwell",
    image: "https://placehold.co/300x200",
  },
  {
    category: "HEALTH",
    title:
      "Health Officials Investigate Rare Form of Blindness Tied to Ozempic",
    description:
      "Several recent studies have found a possible connection between semaglutide use and a rare condition that causes sudden vision loss.",
    author: "Ed Cara",
    image: "https://placehold.co/300x200",
  },
];

export default FeaturedPosts;
