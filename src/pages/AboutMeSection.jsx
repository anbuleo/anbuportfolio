import React from 'react'

function AboutMeSection() {
  return <>
  <section id='about'>
    <p className="section_text_p1 text-center">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="aboutMe_container flex pt-6 justify-between">
        <div className="about_left_card  rounded-lg card-bordered h-96  shadow-2xl">
            <div className="p-4  h-72 flex flex-col  justify-between">
                <h1 className='text-center p-2 text-lg  mx-auto'><b>Education</b></h1>
                <p className="">
                    <span className='text-2xl'>BBA.Bachelors Degree</span><br />
                    <span>RVS cas Sulur,</span>
                </p>
                <p className="pt-2">
                    <span  className='text-2xl'>MERN Stack development</span><br />
                    <span>GUVI</span>
                </p>

            </div>
        </div>
        <div className="about_left_card  rounded-lg card-bordered h-96 w-2/4 shadow-2xl">
            <div className="p-4  h-72 ">
                
                <p className=" text-justify">
                I have completed a comprehensive MERN stack development course where I mastered both frontend and backend development, as well as their seamless integration. My expertise was honed through a series of hands-on projects, including UI design, two-step authentication verification, an OTP manager project, and a chat app using Socket.io. In these projects, I wrote backend code using the MVC pattern, created frontend React applications with a component-based architecture, and leveraged Redux for efficient state management in the OTP manager app. Additionally, I have experience in implementing RESTful APIs, managing database operations with MongoDB, and ensuring application security and performance optimization.
                </p>
                

            </div>
        </div>
    </div>
<div className="icon"><i className="fa-solid fa-angles-down fa-xl" onClick={()=>location.href='#skills'}></i></div>  

    </section>
  
  </>
}

export default AboutMeSection