import React from "react";
import facebook_icon from "../images/Facebook Icon.png";
import twiter_icon from "../images/Twitter Icon.png";
import instagram_icon from "../images/Instagram Icon.png";
import github_icon from "../images/GitHub Icon.png";

export default function Footer() {
    return (
        <footer>
            <img src={twiter_icon} alt="Twitter Icon" />
            <img src={facebook_icon} alt="Facebook Icon" />
            <img src={instagram_icon} alt="Instagram Icon" />
            <img src={github_icon} alt="GitHub Icon" />
        </footer>
    );
}
