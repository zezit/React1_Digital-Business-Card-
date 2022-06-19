import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SwitchButton from "./components/Switch-button";

export default function App() {
    return (
        <div className="main">
            <SwitchButton />
            <Card />
            <Footer />
        </div>
    );
}
