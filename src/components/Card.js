import React from "react";
import profilePicture from "../images/profile-photo.jpg";
import "../style/style.css"

export default function Card() {
    return (
        <div className="Card--container">
            <div className="Card--photo">
                <img src={profilePicture} alt="profile picture" />
            </div>
            <div className="Card--data">
                <p className="name">Mikky Ekko</p>
                <p className="ocupation">Frontend Developer</p>
                <a href="#">ekkomikky.website</a>
            </div>
            <div className="Card--contact">
                <a href="#">Email</a>
                <a href="#">Linkedin</a>
            </div>
            <div className="Card--about">
                <h3>About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    bibendum orci ut ligula congue faucibus. Aenean non orci
                    turpis. Nullam laoreet tellus vitae velit euismod, eget
                    malesuada nisi pharetra. Aenean dapibus, enim ut semper
                    ullamcorper, massa lorem eleifend leo, a fringilla nisi orci
                    eget ante. Sed tempor metus est, sit.
                </p>
            </div>
            <div className="Card--interests">
                <h3>About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sed accumsan lorem. Integer et nunc ex. Quisque ut
                    semper dolor. Duis consectetur, elit vitae consectetur.
                </p>
            </div>
        </div>
    );
}
