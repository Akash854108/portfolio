import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Delivery Landing Page',
      description: 'Designed and developed a responsive delivery service landing page using HTML,CSS and Javascript,featuring interactive UI elements,smooth scroll navigation,and modern layout techinques to enhance user experience and optimize performance across devices.',
      link: 'https://akash854108.github.io/Landing-Page/',
    },
    {
      title: 'Online Code Editor',
      description: 'Developed a dynamic Code Review Editor using HTML, CSS, and JavaScript, featuring syntax highlighting, inline commenting, and real-time collaboration tools to streamline code evaluation and enhance team productivity.',
      link: 'https://akash854108.github.io/ONLINE-CODE-EDITOR/',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio, showcasing my skills and projects, built with React, Vite, and Tailwind CSS.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
