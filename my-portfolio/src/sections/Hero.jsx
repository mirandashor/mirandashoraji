import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="Hero">   
            <div className="heroSection"> 
                <div className="heroName">
                    <h1>Hi, I'm</h1>
                    <h1 className="font">Miranda Shoraji</h1>
                </div>

                <h2>Software Developer <br/>
                    exploring Full-Stack development
                </h2>

                <h2>
                    Turning ideas into reliable, <br/>
                    user-focused applications
                </h2>

                <div className="heroButtons">
                    <a href="#Projects" className="button">View Projects 🖳</a>
                    <a href="#Contact" className="button">✉ Contact Me</a>
                </div>
            </div> 
        </section>

    
    );
}

export default Hero;


{/* <svg
  className="waveUp"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
>
  <defs>
    <linearGradient id="waveGradient">
      <stop offset="0%" stopColor="#812E5B" />
      <stop offset="50%" stopColor="#EA907A" />
      <stop offset="100%" stopColor="#812E5B" />
    </linearGradient>
  </defs>

  <path
    fill="url(#waveGradient)"
    d="M0,192L30,165.3C60,139,120,85,180,96C240,107,300,181,360,186.7C420,192,480,128,540,122.7C600,117,660,171,720,213.3C780,256,840,288,900,250.7C960,213,1020,107,1080,106.7C1140,107,1200,213,1260,224C1320,235,1380,149,1410,106.7L1440,64L1440,320L0,320Z"
  />
</svg> */}
{/* <svg
  className="waveDown"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
>
  <defs>
    <linearGradient id="waveGradientDown">
      <stop offset="0%" stopColor="#812E5B" />
      <stop offset="50%" stopColor="#EA907A" />
      <stop offset="100%" stopColor="#812E5B" />
    </linearGradient>
  </defs>

  <path
    fill="url(#waveGradientDown)"
    d="M0,192L30,165.3C60,139,120,85,180,96C240,107,300,181,360,186.7C420,192,480,128,540,122.7C600,117,660,171,720,213.3C780,256,840,288,900,250.7C960,213,1020,107,1080,106.7C1140,107,1200,213,1260,224C1320,235,1380,149,1410,106.7L1440,64L1440,0L0,0Z"
  />
</svg> */}