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
        { question: "What languages have I worked with?", answer: "JavaScript, HTML, CSS, TypeScript, C++" },
        { question: "Have I worked with cloud services?", answer: "Yes! Amazon Web Services and Google Cloud Platform"},
        { question: "Where can you contact me?", answer: "LinkedIn, email"}
    ];

    //state for tracking the selected question
    //useState(null)=start with no questions selected yet, when clicked, set it to that question
    const [selectedQuestion, setSelectedQuestion] = useState(null);

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
                    {/*map loops through each item in the array(question)*/}
                    {/*item=current question object, index=array number*/}
                    {qaData.map((item, index) => (
                        // key=index is the identifier for each item in array (unique)
                        // when the button is clicked, set the question to the current question object/answer
                        <button key={index} onClick={() => setSelectedQuestion(item)}>
                            {/*display the question text inside the button*/}
                            {item.question}
                        </button>
                    ))}
                    {/*if a quesstion is selected, show...*/}
                    {selectedQuestion && (
                        <div>
                            {/*show the selected questions answer*/}
                            {/*back button to go back to the questions list*/}
                            <p>{selectedQuestion.answer}</p>
                            <button onClick={() => setSelectedQuestion(null)}>Back</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChatBubble;