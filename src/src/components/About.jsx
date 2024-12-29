import React from "react";
import "../styles/about.css";

const Photography = () => (
  <div className="photography">
    <section className='section section1'>
      <div className='content-wrapper'>
        <div className='left-content'>
            Hello,I am Jasmina.
            <h1></h1>
          <div className='content'>
            <div className='number'>01</div>
            <p>
            I am front-end web developer with strong design skills and knowledge. Member of great Free Code Camp community. My approach to every single project is careful planning, research and testing, of an end result. Never missing a chance to learn something and get hold of new technologies.
            </p>
            
          </div>
        </div>
        <div className='right-content'>
          <h1>About my job</h1>
          <div className='content'>
            <div className='number'>02</div>
            <p>
            Programmer. Drinker. Android tinkerer. Tech enthusiast. Gamer. PC Master Race. Not a console peasant. Extremely forgetful.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='section section2'>
      <div className='right-content-middle'>
        <h2>Work</h2>
        <p>
        Most of my non-job related work will most likely be found on my Github. Currently learning how to web stuff, so that i can make a really cool application for my gf. At some point in time I could write good CUDA, but that was a long time ago. I contributed to some open-source projects such as Discourse (Ember/Ruby) and Duplicacy (Golang). I like to think I earn my living writing some Java and SQL and teaching others how to do it at a nice company.
        </p>
        <button>mid button</button>
      </div>
    </section>
    <section className='section section3'>
      <div className='content-wrapper'>
        <div className='left-content'>
          <h2>User Experience</h2>
          <div className='content'>
            <div className='number'>03</div>
            <p>
            I am a Linux enthusiast, and now i'm working on Palm Oil Company as a Technician. As a technician, my job is writting a code with CodeIgniter framework and also handling Linux Servers.
            </p>
          </div>
        </div>
        <div className='right-content'>
          <h2>Few more things...</h2>
          <div className='content'>
            <div className='number'>04</div>
            <p>
            I'm working hard Monday through Sunday, starting early with a cup of fresh, warm greek coffee. I am fluent in serbian, english and greek. Your emails will be answered with honesty and utmost seriousity.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Photography;