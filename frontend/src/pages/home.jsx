// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className=" bg-gray-100">
      {/* Header */}
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-white font-semibold">My Crochet Store</h1>
          {/* Navigation links */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-semibold">Handcrafted Crochet Toys</h2>
          <p className="mt-4 text-muted-sm text-gray-600">Find the perfect crochet companion for you or your loved ones.</p>
          <button className="mt-6 bg-blue-500 hover:bg-black text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl text-gray-800 font-semibold text-center mb-6">Featured Products</h2>
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {/* Example product card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Crochet Toy"
                className="w-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Cute Crochet Bunny</h3>
              <p className="text-gray-600 mt-2">$19.99</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Crochet Store</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
