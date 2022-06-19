import React from "react";

var root = document.querySelector(":root");

export function lightMode() {
    root.style.setProperty("--body-backgroud", "#9fa1aa");
    root.style.setProperty("--name", "#2B283A");
    root.style.setProperty("--almost-white", "#4A4E74");
    root.style.setProperty("--card-backgroud", "#F5F5F5");
    root.style.setProperty("--ocupation", "#F47D27");
    root.style.setProperty("--paragraphs", "#4A4E74");
    root.style.setProperty("--footer-background", "#D5D4D8");

    document.querySelector(".moon").style.webkitFilter = "invert(0)";
    document.querySelector(".sun").style.webkitFilter = "invert(0)";
}
export function darkMode() {
    root.style.setProperty("--svg-fill", "#fff");
    root.style.setProperty("--body-backgroud", "#23252c");
    root.style.setProperty("--name", "#fff");
    root.style.setProperty("--almost-white", "#f5f5f5");
    root.style.setProperty("--card-backgroud", "#1a1b21");
    root.style.setProperty("--ocupation", "#f3bf99");
    root.style.setProperty("--paragraphs", "#dcdcdc");
    root.style.setProperty("--footer-background", "#161619");

    document.querySelector(".moon").style.webkitFilter = "invert(0.8)";
    document.querySelector(".sun").style.webkitFilter = "invert(0.8)";
}
