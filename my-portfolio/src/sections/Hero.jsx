import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="Hero">     
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
                <button>View Projects 🖳</button>
                <button>✉ Contact Me</button>
            </div>

        </section>
    );
}

export default Hero;