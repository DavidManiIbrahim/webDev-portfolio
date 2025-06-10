import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and industry standards.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design',
      description: 'Translating creative designs into pixel-perfect, responsive interfaces that engage users.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user experiences across all devices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate frontend developer with 5+ years of experience creating digital experiences that combine technical excellence with creative design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Started my journey in web development during college, where I discovered my passion for creating beautiful and functional user interfaces. Since then, I've worked with startups and established companies, helping them bring their digital visions to life.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React, TypeScript, and modern CSS frameworks, always staying up-to-date with the latest trends and best practices in frontend development. When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">5+ Years Experience</span>
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-full text-sm font-medium">50+ Projects Completed</span>
                <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm font-medium">Happy Clients</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700/50 p-8 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;