import React from "react";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import { lightMode } from "./modes";
import { darkMode } from "./modes";

export default function SwitchButton() {
    const afterClick = () => {
        document
            .querySelector(".dark-mode input")
            .addEventListener("change", function() {
                if (this.checked) {
                    lightMode();
                } else {
                    darkMode();
                }
            });
    };

    return (
        <div className="dark-mode">
            <img src={moon} alt="dark mode" className="moon"/>
            <label className="switch">
                <input type="checkbox" onClick={afterClick} />
                <span className="slider round"></span>
            </label>
            <img src={sun} alt="light mode" className="sun"/>
        </div>
    );
}
