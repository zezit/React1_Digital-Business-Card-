import React from "react";
import facebook_icon from "../images/Facebook Icon.svg";
import twiter_icon from "../images/Twitter Icon.svg";
import instagram_icon from "../images/Instagram Icon.svg";
import github_icon from "../images/GitHub Icon.svg";

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
