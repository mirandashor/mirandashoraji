import React, { useState } from 'react';
import './Projects.css';

import CineMatchLogo from "../assets/CineMatchLogo.png";
import mixlistLogo from "../assets/mixlistLogo.png";
import kitchenLogo from "../assets/kitchenLogo.png";
import codeModeLogo from "../assets/codeModeLogo.png";
import portfolioLogo from "../assets/portfolioLogo.png";

//reusable carousel logic
const Carousel = ({ images} ) => {
    const [imageIndex, setImageIndex] = useState(0);
    const nextBtn= () => {
        if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0);
        }
    }
    const prevBtn=() => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(images.length - 1);
        }
    }

    const imageDots = () => {
        return images.map((_, i) => {
            return(
                <button 
                key={i}
                className={i === imageIndex ? "dotActive" : "dot"}
                onClick={() => setImageIndex(i)}>

                </button>
            );
        });
    };
        return (
        <div className="carousel">
            <div className="carouselViewport">
                <div className="carouselMain">

                    <button className="backBtn" onClick={prevBtn}>❮</button>
                    <div className="carouselTrack"
                    style={{ transform: `translateX(-${imageIndex * 100}%)`}}>
                        {images.map((img) => (
                            <img src={img} />
                        ))}
                    </div>
                    <button className="nextBtn" onClick={nextBtn}>❯</button>

                </div>
            </div>
                <div className="carouselDots">
                    {imageDots()}
                </div>
        </div>
    );
}


const Projects = () => {
    // because of GitHub Actions, root (baseURL) is now 'mirandashoraji' and not 'root'
    const img = (path) => `${import.meta.env.BASE_URL}${path}`;

    // // mixlist images
    // const[mixlistIndex, setMixlistIndex] = useState(0);
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
    // //mixlist carousel logic
    // const nextImage = () => {
    //     //update the image being shown to show next imaage (+1)
    //     if (mixlistIndex < mixlistImages.length - 1) {
    //         setMixlistIndex(mixlistIndex + 1)
    //     }
    //     else {
    //         setMixlistIndex(0);
    //     }
    // }
    // //prev button wraps if at 0 index or goes back one if not
    // const prevImage = () => {
    //     if (mixlistIndex > 0) {
    //         setMixlistIndex(mixlistIndex - 1);
    //     } else {
    //         setMixlistIndex(mixlistImages.length -1);
    //     }
    // }
    // const carouselDots = () => {
    //     return mixlistImages.map((_, i) =>{
    //             return (
    //                 <button className={i === mixlistIndex ? "dotActive" : "dot"} 
    //                 onClick={() => setMixlistIndex(i)}>
                        
    //                 </button>
    //             );
    //         });
    // };

    //cinematch images
    const cinematchImages = [
        img("/cinematch/cinematch1.png"),
        img("/cinematch/cinematch2.png"),
        img("/cinematch/cinematch3.png"),
        img("/cinematch/cinematch4.png"),
        img("/cinematch/cinematch5.png"),
        img("/cinematch/cinematch6.png"),
    ];

    const codemodeImages = [
        img("/codemode/codemode1.png"),
        img("/codemode/codemode2.png"),
        img("/codemode/codemode3.png"),
        img("/codemode/codemode5.png"),
        img("/codemode/codemode6.png"),
        img("/codemode/codemode7.png"),
        img("/codemode/codemode8.png"),
    ];

    const kitchenImages = [
        img("/kitchen/kitchen1.png"),
        img("/kitchen/kitchen2.png"),
        img("/kitchen/kitchen3.png"),
        img("/kitchen/kitchen4.png"),
        img("/kitchen/kitchen5.png"),
        img("/kitchen/kitchen6.png"),
        img("/kitchen/kitchen7.png"),
    ];

    const portfolioImages = [
        img("/portfolio/portfolio2.png"),
        img("/portfolio/portfolio3.png"),
        img("/portfolio/portfolio4.png"),
        img("/portfolio/portfolio5.png"),
    ];

    return (
        <section id="Projects">
            <div>
                <h2>Projects ✰</h2>
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
                            <div className="mixlistInfo">

                                <Carousel images={mixlistImages} />

                                {/* <div className="carousel">
                                    <div className="carouselViewport">
                                        <div className="carouselMain">

                                        <button className="backBtn" onClick={prevImage}>❮</button>
                                        {/* display first image in the array index */}
                                        {/* <img src={mixlistImages[mixlistIndex]}></img>
                                        {/* set button to execute the nextImage function on click */}
                                        {/* <button className="nextBtn" onClick={nextImage}>❯</button>
                                        </div>
                                        <div className="carouselDots">
                                            {carouselDots()}
                                        </div>
                                    </div>
                                </div>  */}

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
                    </div>


                    {/* cinematch section */}
                    <div className="projectItem">
                        <div className="projectName">
                            <img src={CineMatchLogo}></img>
                            <span className="CM">Movie Recommendation Generator</span>
                        </div>
                        {/* CineMatch project box */}
                        <div className="cinematchBox">
                            <div className="cinematchInfo">
                                
                                <Carousel images={cinematchImages} />

                                <div className="desc">
                                    <p>A RESTful API that generates ranked movie recommendations based on user input, returning the top 10 results to improve movie discovery and selection.
                                    Built from an AWS Lambda pipeline that aggregates data from multiple movie API endpoints and processes candidate results for ranking, with
                                    a Gemini-powered n8n workflow to refine user input, and improve recommendation relevance.
                                    Added additional features using movie and weather API endpoints to enhance overall user experience.
                                    The application was deployed as a serverless system on AWS with automated CI/CD pipelines for infrastructure and deployment.
                                    </p>
                                    <div className="techStack">
                                        <span className="tech">JavaScript</span>
                                        <span className="tech">HTML</span>
                                        <span className="tech">CSS</span>
                                        <span className="tech">AWS (Lambda, API Gateway, S3, CloudFront)</span>
                                        <span className="tech">n8n</span>
                                        <span className="tech">The Movie Database API</span>
                                        <span className="tech">Weather API</span>
                                        <span className="tech">Git</span>
                                        <span className="tech">Postman</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                    <div className="projectItem">
                        <div className="projectName">
                            <img src={portfolioLogo}></img>
                            <span className="PW">Portfolio Website</span>
                        </div>

                        <div className="portfolioBox">
                            <div className="portfolioInfo">

                                <Carousel images={portfolioImages} />

                                <div className="desc">
                                    <p>
                                       A personal portfolio website to showcase my projects, technical skills,
                                        and experience featuring a responsive layout and clean user interface 
                                    </p>
                                    <div className="techStack">
                                        <span className="tech">JavaScript</span>
                                        <span className="tech">CSS</span>
                                        <span className="tech">React</span>
                                        <span className="tech">Figma</span>
                                        <span className="tech">Git</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="projectItem">
                        <div className="projectName">
                            <img src={kitchenLogo}></img>
                            <span className="KV">Kitchen Design Application</span>
                        </div>

                        <div className="kitchenBox">
                            <div className="kitchenInfo">
                                <div className="kitchenViewport">
                                <Carousel images={kitchenImages} />
                                </div>

                                <div className="desc">
                                    <p>
                                        An interactive application that helps users make confident decisions during kitchen renovation and design
                                        by allowing them to explore and customze three present kitchen layouts along with a range of appliances and design options in real time.
                                    </p>
                                    <div className="techStack">
                                        <span className="tech">JavaFX</span>
                                        <span className="tech">CSS</span>
                                        <span className="tech">Figma</span>
                                        <span className="tech">Canva</span>
                                        <span className="tech">Git</span>
                                        <span className="tech">Scene Builder</span>
                                        <span className="tech">Maven</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="projectItem">
                        <div className="projectName">
                            <img src={codeModeLogo}></img>
                            <span className="CO">JavaScript Learning Applicaiton</span>
                        </div>

                        <div className="codemodeBox">
                            <div className="codemodeInfo">

                                <div className="codemodeViewport">
                                <Carousel images={codemodeImages}/>
                                </div>

                                <div className="desc">
                                    <p>
                                        Interactive application that teaches JavaScript through a structured series of multiple-choice and fill-in-the-blank 
                                        questions, featuring three main ideas and three levels of difficulty for each, helping users build an understanding of the core functionalities.
                                    </p>
                                    <div className="techStack">
                                        <span className="tech">JavaFX</span>
                                        <span className="tech">Java</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                                        
                </div>
            </div>
            


        </section>
    );
}

export default Projects; 