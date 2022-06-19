import React from "react";
import profilePicture from "../images/profile-photo.jpg";
import mail from "../images/Mail.svg";
import linkedin from "../images/linkedin.svg";

import "../style/style.css";

export default function Card() {
    return (
        <div className="Card--container">
            <div className="Card--photo">
                <img src={profilePicture} alt="profile" />
            </div>
            <div className="Card--data">
                <p className="name">Mikky Ekko</p>
                <p className="ocupation">Frontend Developer</p>
                <a href="#">ekkomikky.website</a>
            </div>
            <div className="Card--contact">
                <a href="#" className="Card--email">
                    <img src={mail} alt="profile" /> Email
                </a>
                <a href="#" className="Card--linkedin">
                    <img src={linkedin} alt="profile" />
                    Linkedin
                </a>
            </div>
            <div className="Card--texts">
                <div className="Card--about">
                    <h3>About</h3>
                    <p>
                        I am a frontend developer with a particular interest in
                        making things simple and automating daily tasks. I try
                        to keep up with security and best practices, and am
                        always looking for new things to learn.
                    </p>
                </div>
                <div className="Card--interests">
                    <h3>Interests</h3>
                    <p>
                        Food expert. Music scholar. Reader. Internet fanatic.
                        Bacon buff. Entrepreneur. Travel geek. Pop culture
                        ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </div>
    );
}
