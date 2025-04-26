import React from 'react';

const Contact = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <div className="mb-4">
            <p className="text-lg text-gray-700 text-center">Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">iakashkrs@gmail.com</a></p>
            <p className="text-lg text-gray-700 text-center">LinkedIn: <a href="https://www.linkedin.com/in/akash-kumar-090928273/">Akash Kumar</a></p>
            <p className="text-lg text-gray-700 text-center">GitHub: <a href="https://github.com/Akash854108" className="text-blue-600 hover:underline">https://github.com/Akash854108</a></p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Feel free to reach out for collaboration or inquiries!</p>
            <a href="mailto:your.email@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Send a Message</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
