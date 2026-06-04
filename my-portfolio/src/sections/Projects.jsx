import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="Projects">
            <div>
                <h2>Projects 🖳 💻 ☀</h2>
            </div>

            <div className="allProjects">

                <div className="projectCards">
                    <div className="projectItem">
                        <div className="projectName">
                            <img src="./mixlistLogo.png"></img>
                            <span className="MT">Collaborative Playlist Generator</span>
                        </div>   

                        <div className="mixlist">
                            <div className="carousel">
                                <span>Placegolder</span>
                            </div>
                            <div className="desc">
                                <p>Built a  collaborative web application that allows multiple users to create shared playlists based on their combined music preferences. <br></br>
                                    Designed session-based rooms that aggregate user listening data upon playlist creation to generate personalized playlists tailored by genre filtering and recommendation options. <br></br>
                                    Integrated a built-in music player that allows users to listen and save generated playlists directly to Spotify. <br></br>
                                    Planned and tracked development using Trello and a Gantt chart to manage milestones and deadlines.
                                </p>
                            
                                <div className="techStack">
                                    <span className="tech">React</span>
                                    <span className="tech">TypeScript</span>
                                    <span className="tech">JavaScript</span>
                                    <span className="tech">CSS</span>
                                    <span className="tech">Node.js</span>
                                    <span className="tech">Express.js</span>
                                    <span className="tech">SQLite</span>
                                    <span className="tech">Spotify API</span>
                                    <span className="tech">Last.fm API</span>
                                    <span className="tech">Figma</span>
                                    <span className="tech">Git</span>
                                    <span className="tech">Render</span>
                                    <span className="tech">Trello</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projectItem">
                        <div className="projectName">
                            <img src="./CineMatchLogo.png"></img>
                            <span className="CM">Movie Recommendation Generator</span>
                        </div>
                        <div className="cinematch">
                            <p>placeholder</p>
                        </div>
                    </div>
                        
                </div>
            </div>
            


        </section>
    );
}

export default Projects; 