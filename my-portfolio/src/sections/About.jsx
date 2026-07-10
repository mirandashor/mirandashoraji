import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="About">
            <div className="main">
                <div className="paragraph">
                    <p>I’m Miranda, a Computer Science graduate with a passion for web development
                        and creating responsive, user-friendly applications. I enjoy both front-end
                        and back-end development, especially creating clean, interactive user experiences
                        while also working with databases and APIs.
                    </p>
                    <p>
                        I aim for building projects that combine creativity with problem solving, and I’m
                        always looking for opportunities to learn new technologies and improve my
                        development skills with new projects.💡
                    </p>
                </div>
                <div className="me">
                    <h2>About Me ☘︎</h2>
                    <img src="./pfp.png" alt="picture"></img>
                </div>
            </div>

            <div className="cards">
                <div><p>Passionate about creating user-friendly web experiences</p></div>
                <div><p>Experience building and integrating REST APIs and databases</p></div>
                <div><p>Dedicated to continuous improvement with new technologies and trends</p></div>
                <div><p>Enjoy building full-stack projects and bringing ideas from concept to deployment</p></div>
            </div>
        </section>

    );
}

export default About;