import React from 'react';
import './Projects.css';
import { useState } from 'react';

import CineMatchLogo from "../assets/CineMatchLogo.png";
import mixlistLogo from "../assets/mixlistLogo.png";

const Projects = () => {
    const[mixlistIndex, setMixlistIndex] = useState(0);
    // because of GitHub Actions, root (baseURL) is now 'mirandashoraji' and not 'root'
    const img = (path) => `${import.meta.env.BASE_URL}${path}`;
    const mixlistImages = [
        img("/mixlist/mixlist1.png"),
        img("/mixlist/mixlist2.png"),
        img("/mixlist/mixlist3.png"),
        img("/mixlist/mixlist4.png"),
        img("/mixlist/mixlist5.png"),
        img("/mixlist/mixlist6.png"),
        img("/mixlist/mixlist7.png"),
        img("/mixlist/mixlist8.png"),
    ];

    const nextImage = () => {
        //update the image being shown to show next imaage (+1)
        if (mixlistIndex < mixlistImages.length - 1) {
            setMixlistIndex(mixlistIndex + 1)
        }
        else {
            setMixlistIndex(0);
        }
    }
    //prev button wraps if at 0 index or goes back one if not
    const prevImage = () => {
        if (mixlistIndex === 0) {
            setMixlistIndex(mixlistImages.length - 1);
        }
        else {
            setMixlistIndex(mixlistIndex - 1);
        }
    }

    const carouselDots = () => {
        return mixlistImages.map((_, i) =>{
                return (
                    <button className={i === mixlistIndex ? "dotActive" : "dot"} 
                    onClick={() => setMixlistIndex(i)}>
                        
                    </button>
                );
            });
    };



    return (
        <section id="Projects">
            <div>
                <h2>Projects 🖳</h2>
            </div>

            <div className="allProjects">

                <div className="projectCards">
                    {/* mixlist section */}
                    <div className="projectItem">
                        <div className="projectName">
                            <img src={mixlistLogo}></img>
                            <span className="MT">Collaborative Playlist Generator</span>
                        </div>   
                        {/* carousel section */}
                        <div className="mixlistBox">

                            <div className="carousel">
                                <div className="carouselViewport">
                                    <div className="carouselMain">
                                    <button className="backBtn" onClick={prevImage}>❮</button>
                                    {/* display first image in the array index */}
                                    <img src={mixlistImages[mixlistIndex]}></img>
                                    {/* set button to execute the nextImage function on click */}
                                    <button className="nextBtn" onClick={nextImage}>❯</button>
                                    </div>
                                    <div className="carouselDots">
                                        {carouselDots()}
                                    </div>
                                </div>
                            </div>

                        {/* description section */}
                            <div className="desc">
                                <p>A collaborative web application that allows multiple users to create shared playlists based on their combined music preferences. 
                                    It uses session-based rooms to aggregate user listening data and generate personal playlists with genre filtering and recommendation options. 
                                    A built-in music player allows users to listen and save generated playlists directly to Spotify.
                                    It also visually differentiates between guest and host roles to control view and feature permissions.
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
                {/* cinematch section */}
                    <div className="projectItem">
                        <div className="projectName">
                            <img src={CineMatchLogo}></img>
                            <span className="CM">Movie Recommendation Generator</span>
                        </div>
                        {/* CineMatch project box */}
                        <div className="cinematchBox">
                            <p>placeholder</p>
                        </div>
                    </div>
                        
                </div>
            </div>
            


        </section>
    );
}

export default Projects; 