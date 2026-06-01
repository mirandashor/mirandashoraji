import React from 'react';
import './Contact.css';
import Icon from "./Icon.jsx";

const Contact = () => {
    return (
        <section id="Contact">
            <div className="contactSection">
                <h2>Contact Me!☺</h2>

                <div className="contactBoxes">

                    <div className="email">
                        <div className="contactType1">
                            <div className="emailName">
                                <img src="/gmailLogo.svg.webp" alt="GmailLogo"></img>
                                <span>Email</span>
                            </div>
                        
                            <div className="linkButton">
                                <button onClick={()=> navigator.clipboard.writeText("mirandashoraji@gmail.com")}>
                                    mirandashoraji@gmail.com
                                </button>
                                <Icon href="mailto:mirandashoraji@gmail.com" img="/externalLink.png" alt="ExternalLink"></Icon>
                            </div>
                        </div>
                    </div>

                    <div className="linkedIn">
                        <div className="contactType2">
                            <div className="linkedInName">
                                <img src="/LinkedInLogo.svg.png" alt="LinkedInLogo"></img>
                                <span>LinkedIn</span>
                            </div>

                            <div className="linkButton">
                                <button onClick={()=> navigator.clipboard.writeText("ttps://www.linkedin.com/in/mirandashoraji/")}>
                                    https://www.linkedin.com/in/mirandashoraji/

                                </button>
                                <Icon href="https://www.linkedin.com/in/mirandashoraji/" img="/externalLink.png" alt="ExternalLink"></Icon>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;