import React, {useState} from 'react';
import '../App.css';

const Task2 = () => {

    const bgColors = ["red", "blue", "yellow"];
    const borderRadius = ["10px", "20px", "30px"];
    const border = ["1px solid red", "3px solid blue", "5px solid yellow"];

    function randomIndex(array) {
        let randomNum = Math.floor(Math.random() * array.length);
        return randomNum;
    }

    const [getBgColor, setBgColor] = useState("white");
    const [getBorderRadius, setBorderRadius] = useState("0px");
    const [getBorder, setBorder] = useState("");

    function changeBgColor() {
        setBgColor(bgColors[randomIndex(bgColors)])
    }
    function changeBorderRadius() {
        setBorderRadius(borderRadius[randomIndex(borderRadius)]);
    }
    function changeBorder() {
        setBorder(border[randomIndex(border)]);
    }

    return (

        <div className="App">
            <div className="box" style={{backgroundColor:getBgColor}}>
                <div >change bg color</div>
                <button onClick={changeBgColor}>change</button>
            </div>
            <div className="box" style={{borderRadius:getBorderRadius}}>
                <div >change border radius</div>
                <button onClick={changeBorderRadius}>change</button>
            </div>
            <div className="box" style={{border:getBorder}}>
                <div>Change border size and color</div>
                <button onClick={changeBorder}>Change</button>
            </div>
        </div>
    );
};

export default Task2;