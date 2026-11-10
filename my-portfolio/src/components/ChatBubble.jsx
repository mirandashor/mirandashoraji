import React from 'react';
import './ChatBubble.css';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
//import usestate tool from react

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    //create state for if bubble is open or closed, set as closed default

    //variable qaData to store an array of the questions and answers
    //question and answer are labels, the quotes are values, the {} are objects
    const qaData =[
        { question: "What languages have I worked with?", answer: "JavaScript, HTML, CSS, TypeScript, C++", showLanguages: true },
        { question: "What tools and frameworks have I used?", answer: "Frontend & UI\nReact, Vite, HTML, CSS, TypeScript, Figma\n\nDevelopment Tools\nVS Code, GitHub, Git, Postman\n\nAI & Productivity\nGitHub Copilot, ChatGPT, Claude\n\nCloud & APIs\nAWS, Google Cloud Platform, REST APIs, n8n" },
        { question: "Have I worked with cloud services?", answer: "Yes! Amazon Web Services and Google Cloud Platform", showCloudDetails: true },
        { question: "What are my strengths?", answer: "I have a strong focus in front-end development, UI/UX design, project-based problem solving, and turning ideas into polished, user-friendly experiences. I work well in both group and solo environments, splitting and completing tasks efficiently. I am focused on continuously growing my skills and creating something bigger and better." },
        { question: "What are my next steps?", answer: "I’m building my skills in full-stack and AI-focused work from personal to professional settings, while continuing to grow as a developer through hands-on projects and real-world problem solving." },
        { question: "Where can you contact me?", answer: "I’m happy to connect!", showContactActions: true }
    ];

    //languages with projects (C++ excluded - no projects)
    const languages = [
        { name: "JavaScript", hasProjects: true },
        { name: "HTML", hasProjects: true },
        { name: "CSS", hasProjects: true },
        { name: "TypeScript", hasProjects: true },
        { name: "C++", hasProjects: false }
    ];

    //projects data for each language
    const projectsData = {
        "JavaScript": ["CineMatch", "My Portfolio"],
        "HTML": ["CineMatch", "My Portfolio"],
        "CSS": ["CineMatch", "Mixlist", "My Portfolio"],
        "TypeScript": ["Mixlist"],
        "C++": []
    };

    const projectDetails = {
        "Mixlist": {
            summary: "A collaborative playlist generator that lets users create and save shared music recommendations with real-time room-based sessions.",
            sectionId: "project-mixlist"
        },
        "CineMatch": {
            summary: "A movie recommendation generator that ranks films from multiple APIs and helps users discover something to watch quickly.",
            sectionId: "project-cinematch"
        },
        "My Portfolio": {
            summary: "A responsive portfolio website that showcases my projects, skills, and experience in a clean, user-friendly layout.",
            sectionId: "project-portfolio"
        }
    };

    const cloudDetails = {
        aws: {
            title: "CineMatch used Amazon Web Services",
            description: "Amazon Web Services supported the deployment and serverless architecture behind CineMatch.",
            sectionId: "project-cinematch"
        },
        gcp: {
            title: "Google Cloud Platform was used to create and test AI models in a 'Foundations to Edge AI' class.",
            description: "This work focused on building and evaluating AI models in a classroom setting, with no public project showcase yet.",
            sectionId: null
        }
    };

    const contactActions = [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mirandashoraji/",
            action: "open"
        },
        {
            label: "Email me",
            href: "mailto:mirandashoraji@gmail.com",
            action: "mailto"
        },
        {
            label: "View contact page",
            action: "scroll"
        }
    ];

    //state for tracking the selected question
    //useState(null)=start with no questions selected yet, when clicked, set it to that question
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    //state for tracking the selected follow-up language
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCloud, setSelectedCloud] = useState(null);

    const jumpToProject = (projectName) => {
        const project = projectDetails[projectName];
        if (!project) return;

        const projectSection = document.getElementById(project.sectionId);
        if (!projectSection) return;

        const topOffset = 150;
        const elementPosition = projectSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const jumpToContact = () => {
        const contactSection = document.getElementById('Contact');
        if (!contactSection) return;

        const topOffset = 140;
        const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
        //set the state to be the opposite of the current state
        //toggle if open, close it or if closed, open it
    }

    return(
        <div className="chatBubble">
            {/*//when button is clicked, run togglePopup function*/}
            <button className="ChatButton" onClick={togglePopup} title="Ask me questions!">
                <MessageCircle size={32} />
            </button>

            {/*if isOpen is true, show the popup and its details.
            otherwise show nothing*/}
            {isOpen && (
                <div className="popup">
                    {selectedQuestion ? (
                        // Chat view - show selected question and answer
                        <div className="chatView">
                            <button className="backButton" onClick={() => {
                                setSelectedQuestion(null);
                                setSelectedLanguage(null);
                                setSelectedProject(null);
                                setSelectedCloud(null);
                            }}>
                                ← Back
                            </button>
                            <div className="chatMessages">
                                <div className="messageBubble userMessage">
                                    {selectedQuestion.question}
                                </div>

                                <div className="messageBubble assistantMessage">
                                    {selectedQuestion.answer}
                                </div>

                                {selectedQuestion.showLanguages && (
                                    <div className="languagesContainer">
                                        <div className="languagesPrompt">See what I've made with:</div>
                                        <div className="languagesList">
                                            {languages.map((lang) => (
                                                <div
                                                    key={lang.name}
                                                    className={`languageItem ${lang.hasProjects ? 'clickable' : 'disabled'}`}
                                                    onClick={() => lang.hasProjects && setSelectedLanguage(lang.name)}
                                                >
                                                    {lang.name}
                                                    {!lang.hasProjects && <span className="noProjects"> (no projects yet)</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedQuestion.showCloudDetails && (
                                    <div className="cloudFeatureContainer">
                                        <div className="cloudFeaturePrompt">Learn more</div>
                                        <div className="cloudActions">
                                            <button
                                                type="button"
                                                className="cloudActionButton"
                                                onClick={() => setSelectedCloud('aws')}
                                            >
                                                AWS
                                            </button>
                                            <button
                                                type="button"
                                                className="cloudActionButton secondary"
                                                onClick={() => setSelectedCloud('gcp')}
                                            >
                                                GCP
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {selectedCloud && (
                                    <div className="cloudDetailCard">
                                        <h4>{cloudDetails[selectedCloud].title}</h4>
                                        <p>{cloudDetails[selectedCloud].description}</p>

                                        {selectedCloud === 'aws' && (
                                            <button
                                                type="button"
                                                className="jumpProjectButton"
                                                onClick={() => jumpToProject('CineMatch')}
                                            >
                                                View project
                                            </button>
                                        )}

                                        {selectedCloud === 'gcp' && (
                                            <p className="cloudNoProjectNote">No public project to showcase yet.</p>
                                        )}
                                    </div>
                                )}

                                {selectedQuestion.showContactActions && (
                                    <div className="contactActionContainer">
                                        <div className="cloudActions">
                                            {contactActions.map((action) => (
                                                <button
                                                    key={action.label}
                                                    type="button"
                                                    className={`cloudActionButton ${action.action === 'scroll' ? 'secondary' : ''} ${action.action !== 'scroll' ? 'contactPrimary' : ''}`}
                                                    onClick={() => {
                                                        if (action.action === 'scroll') {
                                                            jumpToContact();
                                                            return;
                                                        }

                                                        window.open(action.href, '_blank', 'noopener,noreferrer');
                                                    }}
                                                >
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedLanguage && (
                                    <>
                                        <div className="messageBubble userMessage">
                                            What projects have I made with {selectedLanguage}?
                                        </div>

                                        <div className="projectsContainer">
                                            <div className="projectsList">
                                                {projectsData[selectedLanguage]?.map((project) => (
                                                    <div
                                                        key={project}
                                                        className="projectBadge clickable"
                                                        onClick={() => setSelectedProject(project)}
                                                    >
                                                        {project}
                                                    </div>
                                                ))}
                                            </div>
                                            {selectedProject && (
                                                <div className="projectPreview">
                                                    <h4>{selectedProject}</h4>
                                                    <p>{projectDetails[selectedProject]?.summary}</p>
                                                    <button
                                                        type="button"
                                                        className="jumpProjectButton"
                                                        onClick={() => jumpToProject(selectedProject)}
                                                    >
                                                        Jump to project
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Questions list view
                        <div className="questionsList">
                            <div className="questionListHeader">Ask me about</div>
                            {/*map loops through each item in the array(question)*/}
                            {/*item=current question object, index=array number*/}
                            {qaData.map((item, index) => (
                                // key=index is the identifier for each item in array (unique)
                                // when the button is clicked, set the question to the current question object/answer
                                <button key={index} onClick={() => setSelectedQuestion(item)} className="questionButton">
                                    {/*display the question text inside the button*/}
                                    {item.question}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChatBubble;