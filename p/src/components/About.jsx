import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            I am a B.Tech CSE student passionate about full-stack web
            development. I specialize in the MERN stack (MongoDB, Express.js,
            React.js, Node.js) and have strong skills in HTML, CSS, and
            JavaScript. I create dynamic frontends with React.js, build robust
            backends with Node.js and Express.js, and design responsive
            interfaces using Tailwind CSS.
          </p>
          <p className="text-lg text-gray-700">
            My goal is to create impactful solutions through clean code and
            innovative design. Currently, I'm exploring full-stack development
            and learning new frameworks to enhance my skills.
          </p>
        </div>
      </div>
    </section>


    
  );
};

export default About;
