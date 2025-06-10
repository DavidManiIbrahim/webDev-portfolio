import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript (ES6+)', level: 95, color: 'from-yellow-500 to-orange-500' },
    { name: 'CSS / Tailwind', level: 92, color: 'from-green-500 to-teal-500' },
    { name: 'HTML5', level: 98, color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', level: 85, color: 'from-green-600 to-green-400' },
    { name: 'Git / GitHub', level: 88, color: 'from-gray-600 to-gray-400' },
    { name: 'Responsive Design', level: 96, color: 'from-purple-500 to-pink-500' },
  ];

  const tools = [
    'VS Code', 'Figma', 'Adobe XD', 'Webpack', 'Vite', 'Firebase',
    'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Vercel', 'Netlify'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 p-4 rounded-lg text-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold text-white mb-6">What I Bring</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Problem-solving mindset with attention to detail</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Collaborative approach and strong communication</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">Continuous learning and adaptation to new technologies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-300">User-centered design thinking and accessibility focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;