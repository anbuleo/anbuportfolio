import React from 'react'

function SkillsSection() {
  return <>
  <section id="skills" className='skill'>
    <p className="section_text_p1 text-center">Explore My</p>
    <h1 className="title">Skills</h1>
    <div className="skills_container">
        <div className="flex about-containers gap-20 ">
            <div className="detail_container card shadow-2xl  ">
                <h2 className="sub_title text-center">Frontend Development</h2>
                <div className="article_container">
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>HTML</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>CSS</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>JavaScript</h3>
                        <p>Intermediate</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>React</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>TailWindCSS</h3>
                        <p>Intermediate</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>Bootstrap</h3>
                        <p>Intermediate</p>
                    </div>
                    </article>
                </div>
            </div>
            <div className="detail_container card shadow-2xl ">
                <h2 className="sub_title text-center">Backend Development</h2>
                <div className="article_container">
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>MongoDB</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>ExpressJS</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>Node Js</h3>
                        <p>Experienced</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>Git</h3>
                        <p>Intermediate</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>MySQL</h3>
                        <p>Basic</p>
                    </div>
                    </article>
                    <article>
                    <div><i className="fa-solid  fa-circle-check fa-xl"></i></div>
                    <div className="">
                        <h3>AWS</h3>
                        <p>Basic</p>
                    </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <div className="icon"><i className="fa-solid fa-angles-down fa-xl" onClick={()=>location.href='#Projects'}></i></div> 
  </section>
  </>
}

export default SkillsSection