import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="mb-6">
        <img
          src="/Akash.jpg" // Image located in the public folder
          alt="Akash Kumar"
          className=" w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg"
        />
      </div>

      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Akash Kumar
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          B.Tech | Computer science & Engineering | Web Developer
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
