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
        { question: "Have I worked with cloud services?", answer: "Yes! Amazon Web Services and Google Cloud Platform"},
        { question: "Where can you contact me?", answer: "LinkedIn, email"}
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
        "CSS": ["CineMatch", "My Portfolio"],
        "TypeScript": ["My Portfolio"],
        "C++": []
    };

    //state for tracking the selected question
    //useState(null)=start with no questions selected yet, when clicked, set it to that question
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    //state for tracking the selected follow-up language
    const [selectedLanguage, setSelectedLanguage] = useState(null);

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
                            }}>
                                ← Back
                            </button>
                            <div className="chatMessages">
                                {selectedLanguage ? (
                                    // Language projects view (Level 2)
                                    <>
                                        {/*display the selected language question as a user message*/}
                                        <div className="messageBubble userMessage">
                                            What projects have I made with {selectedLanguage}?
                                        </div>

                                        {/*display projects as clickable badges*/}
                                        <div className="projectsContainer">
                                            <div className="projectsList">
                                                {projectsData[selectedLanguage]?.map((project) => (
                                                    <div
                                                        key={project}
                                                        className="projectBadge clickable"
                                                        onClick={() => console.log(`Clicked: ${project}`)}
                                                    >
                                                        {project}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Initial question and answer view (Level 1)
                                    <>
                                        {/*display the selected question as a user message*/}
                                        <div className="messageBubble userMessage">
                                            {selectedQuestion.question}
                                        </div>
                                        {/*display the answer as an assistant message below*/}
                                        <div className="messageBubble assistantMessage">
                                            {selectedQuestion.answer}
                                        </div>

                                        {/*if this question shows languages, display clickable language items*/}
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
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Questions list view
                        <div className="questionsList">
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