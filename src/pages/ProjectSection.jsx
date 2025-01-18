import React from 'react'
import otpImg from '../assets/otpProject.png'
import ChatApp from '../assets/ChatApp.png'
import ResetPassword from '../assets/ResetPassword.png'
import travellandingpage from '../assets/travellandingpage.png'
import foodlandingpage from '../assets/foodlandingpage.png'
import notesappcon from '../assets/notesappcon.png'
import noteappred from '../assets/noteappred.png'
import fetchApp from '../assets/fetch.png'
import dice from '../assets/dice.png'
import colorchanger from '../assets/colorchanger.png'
import infinitescroll from '../assets/imfinitescroll.png'
import hit from '../assets/hit.png'
import splitbox from '../assets/splitbox.png'
import leomobile from '../assets/leomobiles.png'

function ProjectSection() {

    let data = [
        {
            image:otpImg,
            title: 'OTP manager',
            details: 'By using React, tailwindcss, mongoDB, nodeJS, Express,etc.., And while  sign(in,out,up)  The otp was generated then send to verified users  , admin can only handle otp log ',
            deployedURL:'https://tiny-youtiao-4887c2.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/mern_realEstate'
        },{
            image:ChatApp,
            title: 'Chat App',
            details: 'By using React, tailwindcss, mongoDB, nodeJS, Express, DaisyUI etc.., sign(In,Out,Up) Socket.io for detect active users.',
            deployedURL:'https://leochatapp.onrender.com/login',
            gitHubURL:'https://github.com/anbuleo/ChatApp'
        },{
            image:ResetPassword,
            title: 'Reset Password',
            details: 'By using React, Bootstrap, mongoDB, nodeJS, Express etc..., user can create account the password is hashed and save to db, and Reset their password after otp verification ',
            deployedURL:'https://otpmanagercapone.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/otp_manager'
        }
        ,{
            image:leomobile,
            title: 'Ecom web app',
            details: 'By using React, Bootstrap, mongoDB, nodeJS, Express etc..., user can create account the password is hashed and save to db, payment integration also done ',
            deployedURL:'https://leomobile.netlify.app',
            gitHubURL:'https://github.com/anbuleo/Leomobiles'
        }
    ];
    let frontEndData = [
        {
            image:travellandingpage,
            title: 'Travel Landing Page',
            details: 'By using HTML, css, only this task was converting figma page to web page',
            deployedURL:' https://projecttravellanding.netlify.app',
            gitHubURL:'https://github.com/anbuleo/project1'
        },
        {
            image:foodlandingpage,
            title: 'Food Landing Page',
            details: 'By using HTML, css,and bootstrap only this task was converting figma page to web page',
            deployedURL:'  https://foodlandingpageproject2.netlify.app',
            gitHubURL:'https://github.com/anbuleo/session-practice'
        },
        {
            image:notesappcon,
            title: 'Note Page',
            details: 'By using React,and bootstrap it had functionality of add, edit and delete by using useContext hooks for state management',
            deployedURL:'https://poetic-mochi-b4cbe4.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/Notes_App'
        },
        {
            image:noteappred,
            title: 'Note Page',
            details: 'By using React,Redux and bootstrap it had functionality of add, edit and delete by using Redux toolkit for state management',
            deployedURL:' https://dainty-souffle-482d6a.netlify.app',
            gitHubURL:'https://github.com/anbuleo/notesapp-2'
        },
        {
            image:fetchApp,
            title: 'Fetch Contry',
            details: 'By using HTML,Css. this project is helps to understand promise concept to fetching data from API  ',
            deployedURL:' https://fectingdatafromapi.netlify.app',
            gitHubURL:'https://github.com/anbuleo/project-4'
        },
        {
            image:dice,
            title: 'Dice Game',
            details: 'By using HTML,Css,javascript. this project is helps to understand DOM concept  ',
            deployedURL:' https://dice-game-basic.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/Dice-game'
        },
        {
            image:colorchanger,
            title: 'Color Changer',
            details: 'By using HTML,Css,javascript. this project is helps to understand DOM concept  ',
            deployedURL:' https://colorchangerz.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/colorchangeusingjs'
        },
        {
            image:infinitescroll,
            title: 'Infinite scroll',
            details: 'To understand concept of statemangement, and infinite scroll',
            deployedURL:'https://anbuinfinitescroll.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/colorchangeusingjs'
        },
        {
            image:hit,
            title: 'Hit game',
            details: 'To understand concept of statemangement, eventloop and callstack',
            deployedURL:'https://anbuhitgame.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/hit'
        },
        {
            image:splitbox,
            title: 'Split box',
            details: 'To understand concept of DOM manipulation, css flexbox,boxmodel ',
            deployedURL:'https://anbusplitbox.netlify.app/',
            gitHubURL:'https://github.com/anbuleo/splitbox'
        },

    ]
  return <>
    <section id="Projects" className='project' >
        <p className="section_text_p1 text-center">Browse my Recent</p>
        <h1 className="title">Projects</h1>
        <div className="fullStack shadow-2xl">
        <h2 className="sub-title text-center">Full Stack Projects</h2>
        <div className="flex justify-around gap-4 flex-wrap">
           {data.map((e,i)=>{
            return  <div className="max-w-xs rounded overflow-hidden shadow-lg" key={i}>
            <img src={e.image} alt="Otp Manager app" className="w-full projectPics" />
            <div class="px-6 py-4">
<div class="font-bold text-xl mb-2 text-center">{e.title}</div>
<p className="text-gray-700  text-sm">{e.details}</p>
<div class="px-6 pt-4 pb-2 flex justify-between">    
    <div className="btn btn-outline"  onClick={()=>location.href=`${e.deployedURL}`}>Live Demo</div>
    <div className="btn btn-outline" onClick={()=>location.href=`${e.gitHubURL}`}>Source code</div>
 </div>
</div>
        </div>
           })}
        </div>
        <hr />
        <h2 className="title">Mini Projects</h2>
        {/* <h2 className="sub-title text-center">FrontEnd Projects</h2> */}
        <div className="flex justify-around gap-4 flex-wrap">
           {frontEndData.map((e,i)=>{
            return  <div className="max-w-xs rounded overflow-hidden shadow-lg" key={i}>
            <img src={e.image} alt="Otp Manager app" className="w-full projectPics" />
            <div class="px-6 py-4">
<div class="font-bold text-xl mb-2 text-center">{e.title}</div>
<p className="text-gray-700  text-sm">{e.details}</p>
<div class="px-6 pt-4 pb-2 flex justify-between">    
    <div className="btn btn-outline" onClick={()=>location.href=`${e.deployedURL}`}>Live Demo</div>
    <div className="btn btn-outline" onClick={()=>location.href=`${e.gitHubURL}`}>Source code</div>
 </div>
</div>
        </div>
           })}
        </div>
        </div>
        
        <div className="icon"><i className="fa-solid fa-angles-down fa-xl" onClick={()=>location.href='#contact'}></i></div> 
    </section>
  </>
}

export default ProjectSection