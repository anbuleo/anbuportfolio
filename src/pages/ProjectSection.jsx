/* eslint-disable react/prop-types */
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import otpImg from '../assets/otpProject.png';
import ChatApp from '../assets/ChatApp.png';
import ResetPassword from '../assets/ResetPassword.png';
import travellandingpage from '../assets/travellandingpage.png';
import foodlandingpage from '../assets/foodlandingpage.png';
import notesappcon from '../assets/notesappcon.png';
import noteappred from '../assets/noteappred.png';
import fetchApp from '../assets/fetch.png';
import dice from '../assets/dice.png';
import colorchanger from '../assets/colorchanger.png';
import infinitescroll from '../assets/imfinitescroll.png';
import hit from '../assets/hit.png';
import splitbox from '../assets/splitbox.png';
import leomobile from '../assets/leomobiles.png';
import captionbiller from '../assets/captionbiller.png';

function ProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllMiniProjects, setShowAllMiniProjects] = useState(false);

  const data = [
    {
      image: otpImg,
      title: 'OTP manager',
      details: 'By using React, tailwindcss, mongoDB, nodeJS, Express,etc.., And while sign(in,out,up) The otp was generated then send to verified users, admin can only handle otp log.',
      deployedURL: 'https://tiny-youtiao-4887c2.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/mern_realEstate'
    },
    {
      image: ChatApp,
      title: 'Chat App',
      details: 'By using React, tailwindcss, mongoDB, nodeJS, Express, DaisyUI etc.., sign(In,Out,Up) Socket.io for detect active users.',
      deployedURL: 'https://leochatapp.onrender.com/login',
      gitHubURL: 'https://github.com/anbuleo/ChatApp'
    },
    {
      image: captionbiller,
      title: 'Caption Biller',
      details: 'Biller App is a web-based platform designed to manage billing, invoicing, and customer payments. It allows users to create, edit, and track invoices, monitor balances, and ensure accurate record-keeping for transactions.',
      deployedURL: 'https://leobiller.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/captionBiller'
    },
    {
      image: leomobile,
      title: 'Ecom web app',
      details: 'By using React, Bootstrap, mongoDB, nodeJS, Express etc..., user can create account the password is hashed and save to db, payment integration also done.',
      deployedURL: 'https://leomobile.netlify.app',
      gitHubURL: 'https://github.com/anbuleo/Leomobiles'
    }
  ];

  const frontEndData = [
    {
      image: travellandingpage,
      title: 'Travel Landing Page',
      details: 'By using HTML, css, only this task was converting figma page to web page',
      deployedURL: 'https://projecttravellanding.netlify.app',
      gitHubURL: 'https://github.com/anbuleo/project1'
    },
    {
      image: foodlandingpage,
      title: 'Food Landing Page',
      details: 'By using HTML, css, and bootstrap only this task was converting figma page to web page',
      deployedURL: 'https://foodlandingpageproject2.netlify.app',
      gitHubURL: 'https://github.com/anbuleo/session-practice'
    },
    {
      image: notesappcon,
      title: 'Note Page (Context)',
      details: 'By using React, and bootstrap it had functionality of add, edit and delete by using useContext hooks for state management',
      deployedURL: 'https://poetic-mochi-b4cbe4.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/Notes_App'
    },
    {
      image: noteappred,
      title: 'Note Page (Redux)',
      details: 'By using React, Redux and bootstrap it had functionality of add, edit and delete by using Redux toolkit for state management',
      deployedURL: 'https://dainty-souffle-482d6a.netlify.app',
      gitHubURL: 'https://github.com/anbuleo/notesapp-2'
    },
    {
      image: fetchApp,
      title: 'Fetch Country',
      details: 'By using HTML, Css. this project is helps to understand promise concept to fetching data from API',
      deployedURL: 'https://fectingdatafromapi.netlify.app',
      gitHubURL: 'https://github.com/anbuleo/project-4'
    },
    {
      image: dice,
      title: 'Dice Game',
      details: 'By using HTML, Css, javascript. this project is helps to understand DOM concept',
      deployedURL: 'https://dice-game-basic.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/Dice-game'
    },
    {
      image: colorchanger,
      title: 'Color Changer',
      details: 'By using HTML, Css, javascript. this project is helps to understand DOM concept',
      deployedURL: 'https://colorchangerz.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/colorchangeusingjs'
    },
    {
      image: infinitescroll,
      title: 'Infinite Scroll',
      details: 'To understand concept of state management, and infinite scroll',
      deployedURL: 'https://anbuinfinitescroll.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/colorchangeusingjs'
    },
    {
      image: hit,
      title: 'Hit Game',
      details: 'To understand concept of state management, event loop and callstack',
      deployedURL: 'https://anbuhitgame.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/hit'
    },
    {
      image: splitbox,
      title: 'Split Box',
      details: 'To understand concept of DOM manipulation, css flexbox, box model',
      deployedURL: 'https://anbusplitbox.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/splitbox'
    },
    {
      image: ResetPassword,
      title: 'Reset Password',
      details: 'By using React, Bootstrap, mongoDB, nodeJS, Express etc..., user can create account the password is hashed and save to db, and Reset their password after otp verification',
      deployedURL: 'https://otpmanagercapone.netlify.app/',
      gitHubURL: 'https://github.com/anbuleo/otp_manager'
    }
  ];

  const displayedProjects = showAllProjects ? data : data.slice(0, 3);
  const displayedMiniProjects = showAllMiniProjects ? frontEndData : frontEndData.slice(0, 4);

  const ProjectCard = ({ item }) => (
    <div className="glass-card flex flex-col h-full border-white/20 group">
      <figure className="px-4 pt-4 aspect-video overflow-hidden">
        <img src={item.image} alt={item.title} className="rounded-xl object-cover w-full h-full shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </figure>
      <div className="card-body flex-grow flex flex-col items-center text-center p-6">
        <h2 className="card-title text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h2>
        <p className="text-sm text-white/80 flex-grow mb-4 font-light">{item.details}</p>
        <div className="card-actions justify-center w-full mt-auto gap-4">
          <a href={item.deployedURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm flex-1 shadow-lg shadow-primary/30 border-none hover:shadow-primary/50 transition-all duration-300">
            Live Demo
          </a>
          <a href={item.gitHubURL} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white hover:bg-white hover:text-base-100 border-white/50 btn-sm flex-1 transition-all duration-300">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="Projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-lg text-white/70 font-medium tracking-wide">Browse my Recent</p>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">Projects & Experience</h2>
          </div>
        </FadeIn>

        {/* Professional Experience Overview Card */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="card-body p-8 md:p-12">
                <p className="text-white/80 text-justify md:text-lg font-light leading-relaxed mb-4">
                  Throughout my development journey, I have worked on multiple real-world applications and business solutions using the MERN stack, backend technologies, Electron.js, real-time systems, and scalable cloud-ready architectures.
                </p>
                <p className="text-white/80 text-justify md:text-lg font-light leading-relaxed mb-4">
                  Many of these projects were developed for companies, startups, and internal business operations, so they are not publicly available in repositories or live demos. These applications were built to solve real business challenges, streamline operations, improve customer experience, and support scalable workflows for production environments.
                </p>

                {isExpanded && (
                  <div className="animate-fade-in transition-all duration-500">
                    <p className="text-white/80 text-justify md:text-lg font-light leading-relaxed mb-3 mt-4">
                      My experience includes working on:
                    </p>
                    <ul className="list-disc list-inside text-white/80 mb-6 ml-2 space-y-1 font-light">
                      <li>SaaS-based business management systems</li>
                      <li>Omni-channel communication platforms</li>
                      <li>Service booking and management applications</li>
                      <li>Mechanic workshop management solutions</li>
                      <li>Cab booking and transportation systems</li>
                      <li>Real-time customer support applications</li>
                      <li>Billing, POS, and inventory management software</li>
                      <li>Reporting and analytics dashboards</li>
                      <li>Desktop applications using Electron.js</li>
                      <li>Thermal printer and hardware integrations</li>
                      <li>Authentication and role-based access systems</li>
                      <li>WhatsApp notification and messaging workflows</li>
                      <li>Multi-role admin, employee, and customer management systems</li>
                      <li>Dynamic form and survey management platforms</li>
                      <li>AI-powered automation and workflow integrations</li>
                      <li>Task and team management systems</li>
                      <li>CRM and customer engagement platforms</li>
                    </ul>
                    <p className="text-white/80 text-justify md:text-lg font-light leading-relaxed mb-4">
                      In these projects, I contributed to frontend development using React.js and modern UI architectures, backend API development with Node.js and Express.js, database design with MongoDB and MySQL, authentication systems, real-time communication using Socket.io, reporting modules, deployment workflows, and scalable application structures following industry-standard development practices.
                    </p>
                    <p className="text-white/80 text-justify md:text-lg font-light leading-relaxed mb-4">
                      I have also started expanding my backend expertise into Java and Spring Boot for enterprise-level application development and scalable backend systems.
                    </p>
                    <p className="text-primary text-justify md:text-lg leading-relaxed font-medium">
                      Due to company policies and client confidentiality, several projects cannot be shared publicly. However, my portfolio represents the technologies, architecture patterns, and production-level experience gained through developing and maintaining real-world business applications.
                    </p>
                  </div>
                )}

                <div className="card-actions justify-center mt-8">
                  <button 
                    className="btn btn-outline text-primary hover:bg-primary hover:border-primary border-primary/50 rounded-full px-8 transition-all duration-300"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'View More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-20">
          {/* Full Stack Projects */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h3 className="text-3xl font-black text-center mb-10 text-primary drop-shadow-sm">Full Stack Projects</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, i) => (
                <FadeIn key={project.title} direction="up" delay={0.1 + (i * 0.1)}>
                  <ProjectCard item={project} />
                </FadeIn>
              ))}
            </div>
            {data.length > 3 && (
              <FadeIn direction="up" delay={0.2}>
                <div className="text-center mt-12">
                  <button 
                    className="btn btn-outline text-white hover:bg-white hover:text-base-100 border-white/50 rounded-full px-8 transition-all duration-300"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects ? 'View Less' : 'View More'}
                  </button>
                </div>
              </FadeIn>
            )}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="divider before:bg-white/10 after:bg-white/10"></div>
          </FadeIn>

          {/* Mini Projects */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h3 className="text-3xl font-black text-center mb-10 text-primary drop-shadow-sm">Mini Projects & Frontend</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedMiniProjects.map((project, i) => (
                <FadeIn key={project.title} direction="up" delay={0.1 + ((i % 4) * 0.1)}>
                  <ProjectCard item={project} />
                </FadeIn>
              ))}
            </div>
            {frontEndData.length > 4 && (
              <FadeIn direction="up" delay={0.2}>
                <div className="text-center mt-12">
                  <button 
                    className="btn btn-outline text-white hover:bg-white hover:text-base-100 border-white/50 rounded-full px-8 transition-all duration-300"
                    onClick={() => setShowAllMiniProjects(!showAllMiniProjects)}
                  >
                    {showAllMiniProjects ? 'View Less' : 'View More'}
                  </button>
                </div>
              </FadeIn>
            )}
          </div>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-20 animate-bounce">
            <a href="#contact" className="btn btn-circle btn-ghost text-white hover:bg-white/20 border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ProjectSection;