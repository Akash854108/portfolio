import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  { type: 'HTML', level: 90 },
  { type: 'CSS', level: 80 },
  { type: 'JavaScript', level: 75 },
  { type: 'React', level: 70 },
  { type: 'Tailwind CSS', level: 65 },
  { type: 'Node.js', level: 60 },
  { type: 'Git', level: 90 },
  { type: 'MongoDB', level: 55 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="max-w-3xl mx-auto">
          <SkillBar
            skills={skills}
            symbol="%"
            symbolColor="#2980b9"
            animationDelay={1000}
            animationDuration={5000}
            colors={{
              bar: '#3498db',
              title: {
                text: '#ffffff',
                background: '#2980b9',
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;