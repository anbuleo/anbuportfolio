import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

import otpImg from '../assets/otpProject.png';
import ChatApp from '../assets/ChatApp.png';
import ResetPassword from '../assets/ResetPassword.png';
import captionbiller from '../assets/captionbiller.png';
import coloringGame from '../assets/coloring_game.png';
import runnerGame from '../assets/runner_game.png';

function ProjectSection() {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      image: ChatApp,
      title: 'Real-time Chat App',
      category: 'MERN',
      details: 'A fully functional real-time chat application using React, TailwindCSS, MongoDB, NodeJS, and Socket.io.',
      deployedURL: 'https://leochatapp.onrender.com/login',
      gitHubURL: 'https://github.com/anbuleo/ChatApp',
      tags: ['React', 'Socket.io', 'MongoDB']
    },
    {
      image: captionbiller,
      title: 'Caption Biller SaaS',
      category: 'SaaS',
      details: 'A web-based SaaS platform to manage billing, invoicing, and customer payments efficiently.',
      deployedURL: 'https://leobiller.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/captionBiller',
      tags: ['MERN', 'Tailwind', 'SaaS']
    },
    {
      image: otpImg,
      title: 'Secure OTP Manager',
      category: 'MERN',
      details: 'A full-stack authentication system with secure OTP verification, admin logging, and role-based access.',
      deployedURL: 'https://tiny-youtiao-4887c2.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/mern_realEstate',
      tags: ['React', 'Node.js', 'Auth']
    },
    {
      image: coloringGame,
      title: 'Coloring Kingdom Game',
      category: 'Frontend',
      details: 'A beautiful fantasy castle coloring book game with vibrant colors and engaging UI built with modern React.',
      deployedURL: 'https://coloring-app-six.vercel.app/',
      gitHubURL: 'https://github.com/anbuleo/coloring-kingdom',
      tags: ['React', 'Game', 'UI/UX']
    },
    {
      image: runnerGame,
      title: '3D Endless Runner',
      category: 'Frontend',
      details: 'A 3D endless runner game featuring a stylized character, futuristic tracks, and dynamic obstacles.',
      deployedURL: 'https://rungame-umber.vercel.app/',
      gitHubURL: 'https://github.com/anbuleo/runner-game',
      tags: ['React Three Fiber', '3D', 'Game']
    },
    {
      image: ResetPassword,
      title: 'Authentication Microservice',
      category: 'Backend',
      details: 'A robust backend service for managing password resets, hashed storage, and OTP verification via email.',
      deployedURL: 'https://otpmanagercapone.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/otp_manager',
      tags: ['Express', 'MongoDB', 'JWT']
    }
  ];

  const filters = ['All', 'MERN', 'SaaS', 'Frontend', 'Backend', 'AI'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Work</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              A selection of my recent production-grade applications.
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                    : 'bg-white/5 text-foreground-muted hover:bg-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.title} direction="up" delay={idx * 0.1}>
              <div className="glass-card flex flex-col h-full group overflow-hidden">
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <a href={project.gitHubURL} target="_blank" rel="noreferrer" className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.deployedURL} target="_blank" rel="noreferrer" className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-foreground-muted mb-6 flex-grow text-sm leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-foreground-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-foreground-muted">
            No projects found in this category yet. Check back soon!
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectSection;