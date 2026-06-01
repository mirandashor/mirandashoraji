import React from 'react';
import './Contact.css';
import Icon from "./Icon.jsx";
import externalLink from "../assets/externalLink.png";
import gmailLogo from "../assets/gmailLogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";

const Contact = () => {
    return (
        <section id="Contact">
            <div className="contactSection">
                <h2>Contact Me!☺</h2>

                <div className="contactBoxes">

                    <div className="email">
                        <div className="contactType1">
                            <div className="emailName">
                                <img src={gmailLogo} alt="GmailLogo"></img>
                                <span>Email</span>
                            </div>
                        
                            <div className="linkButton">
                                <button onClick={()=> navigator.clipboard.writeText("mirandashoraji@gmail.com")}>
                                    mirandashoraji@gmail.com
                                </button>
                                <Icon href="mailto:mirandashoraji@gmail.com" img={externalLink} alt="ExternalLink"></Icon>
                            </div>
                        </div>
                    </div>

                    <div className="linkedIn">
                        <div className="contactType2">
                            <div className="linkedInName">
                                <img src={linkedInLogo} alt="LinkedInLogo"></img>
                                <span>LinkedIn</span>
                            </div>

                            <div className="linkButton">
                                <button onClick={()=> navigator.clipboard.writeText("https://www.linkedin.com/in/mirandashoraji/")}>
                                    https://www.linkedin.com/in/mirandashoraji/

                                </button>
                                <Icon href="https://www.linkedin.com/in/mirandashoraji/" img={externalLink} alt="ExternalLink"></Icon>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;