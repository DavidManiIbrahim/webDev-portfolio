import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time notifications.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'An interactive dashboard displaying weather data with beautiful charts and forecasts. Features location-based weather, historical data, and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts across different platforms.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis with interactive charts.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Redux', 'Chart.js', 'CoinGecko API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'A community-driven platform for sharing and discovering recipes with features like ratings, comments, meal planning, and shopping lists.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Express.js', 'MySQL', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
          </div>

          {/* Featured Projects Carousel */}
          <div className="relative mb-20">
            <div className="overflow-hidden rounded-2xl bg-gray-700/30 backdrop-blur-sm">
              <div className="relative h-96 md:h-[500px]">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 z-20 flex items-center">
                        <div className="container mx-auto px-6">
                          <div className="max-w-2xl">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex space-x-4">
                              <a 
                                href={project.liveUrl}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                              >
                                <ExternalLink size={20} className="mr-2" />
                                Live Demo
                              </a>
                              <a 
                                href={project.githubUrl}
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                              >
                                <Github size={20} className="mr-2" />
                                Source Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProject === index ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <a 
                          href={project.liveUrl}
                          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;