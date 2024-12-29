import React from 'react';
import 'tachyons/css/tachyons.min.css';
import '../styles/story.css'

const Gallery = () => {
    return (
        <div>
          <main className="main-container clearfix">
            <div className="column column-50">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/954289/pexels-photo-954289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/69452/glen-canyon-utah-landscape-scenic-69452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1325862/pexels-photo-1325862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/45839/antelope-canyon-arizona-sandstone-rock-45839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-50">
              <div className="text-container">
                <h1 className="heading">Nana</h1>
                <p className="paragraph">
                  <span className="quote">My Story</span>
                  Lena had always seen the world through a lens, capturing fleeting moments that others might overlook. As a photographer, she found beauty in the ordinary: the way sunlight danced on a puddle, the wrinkle of an elderly hand, the laughter of a child in a busy city street. Each click of her camera told a story, freezing time in a way that allowed her to preserve memories for herself and others. Her photos weren't just pictures—they were emotions, a reflection of the world's unnoticed wonders. </p>
              </div>
              
            </div>
            
            <div className="column column-50">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/164226/pexels-photo-164226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-100">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/69452/glen-canyon-utah-landscape-scenic-69452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-50">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/531525/pexels-photo-531525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/954287/pexels-photo-954287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            <div className="column column-25">
              <div className="cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/906094/pexels-photo-906094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
            
            <div className="column column-50">
              <div className="text-container">
                <h1 className="heading">Nana</h1>
                <p className="paragraph">
                  <span className="quote">This is nana</span>
                  <span>One afternoon, while wandering through a bustling market, Lena stumbled upon a quiet corner where an old man sat selling handmade wooden toys. His face, weathered by time, held a profound peace, and his eyes sparkled with a wisdom that spoke volumes. Lena raised her camera, sensing a connection, and as she captured the moment, she realized that his gaze had not only captured her lens but had also quietly shifted the way she saw the world. </span>She knew then that photography wasn’t just about taking pictures—it was about connecting with the essence of life itself. 
                </p>
              </div>              
            </div>
           
            
          </main>
         
        </div>
      );
    };

export default Gallery;
