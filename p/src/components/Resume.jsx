import React, { useState } from 'react';

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [resumeURL, setResumeURL] = useState('');

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      const url = URL.createObjectURL(file);
      setResumeURL(url);
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-100">
     

        {/* Resume Upload Section */}
        <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Upload or View Resume</h3>
          
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="block w-full text-gray-700 border border-gray-300 rounded p-2 mb-4"
          />

          {resume && (
            <p className="text-sm text-green-700 mb-4">✅ Selected: {resume.name}</p>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => alert('Resume uploaded (mock action)')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Upload Resume
            </button>

            {resumeURL && (
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 text-center transition-colors"
              >
                View Resume
              </a>
            )}
          </div>
        </div>
     
    </section>
  );
};

export default Resume;
