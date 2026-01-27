import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Audiophile E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Convex, and Paystack. Features include user authentication, payment processing etc.',
      image: '/image.png',
      tech: ['React', 'Typescript', 'TailwindCSS', 'Shadcn', 'Convex',],
      liveUrl: 'https://hng13-stage3-audiophile-store.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/hng13-stage3-audiophile-store',
      featured: true
    },
    {
      title: 'FarmMarket',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      image: '/FM.png',
      tech: ['React', 'Supabase', 'TailwindCSS', 'Material-UI'],
      liveUrl: 'https://rural-grow-connect.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/farmMarket',
      featured: true
    },
    {
      title: 'Abelov Customer Relationship Management System',
      description: 'An interactive dashboard displaying weather data with beautiful charts and forecasts. Features location-based weather, historical data, and responsive design.',
      image: '/acrms.png',
      tech: ['React', 'Typescript', 'Supabase', 'Tailwind CSS'],
      liveUrl: 'https://acrms.vercel.app',
      githubUrl: 'https://github.com/DavidManiIbrahim/acrms',
      featured: false
    },
    {
      title: 'Abelov Technical Records',
      description: 'A comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts across different platforms.',
      image: '/arms.png',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node', 'Express', 'MongoDB'],
      liveUrl: 'https://abelov-technical-records.onrender.com/',
      githubUrl: 'https://github.com/DavidManiIbrahim/Abelov-Technical-Records-main',
      featured: true
    },
    {
      title: 'FoodSpot',
      description: 'A comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts across different platforms.',
      image: '/food.png',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node', 'Express', 'MongoDB'],
      liveUrl: 'https://foodspot.onrender.com/',
      githubUrl: 'https://github.com/DavidManiIbrahim/foodspot',
      featured: false
    },
    {
      title: 'Gabyto Inventory Management System',
      description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis with interactive charts.',
      image: '/GIMS.png',
      tech: ['React', 'Material UI', 'Supabase', 'TailwindCSS'],
      liveUrl: 'https://gabyto-inventory-management-system.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/Gabyto-inventory-management-system',
      featured: true
    },
    {
      title: 'Suggestion Box',
      description: 'A modern feedback and suggestion platform with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/box.jpg',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://incomparable-cocada-b8264f.netlify.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/suggestion-box',
      featured: false
    },
    {
      title: 'Wosa',
      description: 'An alumni social platform with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/wosa.jpg',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'wossa.vercecl.app',
      githubUrl: 'https://github.com/DavidManiIbrahim/wossa',
      featured: false
    },
    {
      title: 'Doc-mgmt-system',
      description: 'An A document management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/doc.png',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://doc-mgmt-sys.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/doc-mgmt-system',
      featured: false
    },
    {
      title: 'exams-mgmt-system',
      description: 'An exam management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/exams.png',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://exam-ace-beta.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/exam-mgmt-sys',
      featured: false
    },
    {
      title: 'attendance-mgmt-system',
      description: 'An exam management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/attendance.png',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://attendance-mgmt-sys.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/attendance-mgmt-sys',
      featured: false
    },
    {
      title: 'Abelov IT Academy',
      description: 'An IT Academy management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/IT.png',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://abelov-it-academy.onrender.com/',
      githubUrl: 'https://github.com/DavidManiIbrahim/abelov-it-academy',
      featured: false
    },
    {
      title: 'Abelov sales management system',
      description: 'An sales management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/sales.png',
      tech: ['React', 'Supabase', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://abelov-sales-management-system.onrender.com/',
      githubUrl: 'https://github.com/DavidManiIbrahim/abelov-sales-management-system',
      featured: false
    },
    {
      title: 'Northling',
      description: 'An language learning management system with real time updates, admin moderation, and secure authentication built using React, TypeScript, and Supabase.',
      image: '/north.png',
      tech: ['React', 'MongoDB', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://northling.onrender.com/',
      githubUrl: 'https://github.com/DavidManiIbrahim/northling',
      featured: false
    },
    {
      title: 'Cyberdata Auromations Limited',
      description: 'A community-driven platform for sharing and discovering recipes with features like ratings, comments, meal planning, and shopping lists.',
      image: '/cyber.jpg',
      tech: ['React', 'Supabase', 'TailwindCSS', 'TypeScript'],
      liveUrl: 'https://cyberdata-automations-limited.vercel.app/',
      githubUrl: 'https://github.com/DavidManiIbrahim/cyberdata-automations-limited',
      featured: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
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
                                target='_blank'
                                href={project.liveUrl}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                              >
                                <ExternalLink size={20} className="mr-2" />
                                Live Demo
                              </a>
                              <a
                                target='_blank'
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProject === index ? 'bg-purple-500' : 'bg-gray-600'
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
                          target='_blank'
                          href={project.liveUrl}
                          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          target='_blank'
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