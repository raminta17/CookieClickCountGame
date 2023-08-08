import React, {createElement, useState} from 'react';
import '../bootstrap.min.css';
import '../App.css';

const Cookie = () => {
    const upgrades = [
        {
            description: "double points",
            upgrade: 2,
            cost: 50
        },
        {
            description: "triple points",
            upgrade: 3,
            cost: 100
        },
        {
            description: "change background color",
            upgrade: "#286e4e",
            cost: 80
        },
        {
            description: "change image",
            upgrade: "https://static.vecteezy.com/system/resources/previews/022/095/765/original/cartoon-sun-icon-with-facial-expression-free-png.png",
            cost: 50
        },
        {
            description: "make img rotate",
            upgrade: "imgRotation 5s linear infinite",
            cost: 100
        }
    ]
    const [cookiePoints, updateCookiePoints] = useState(0);
    const [bgColor, newBgColor] = useState("#9fc2b2");
    const [img, newImg] = useState("https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png")
    const [count, newCount] = useState(1);
    const [error, newError] = useState("");
    const [dNone, display] = useState('none');
    const [rot, startRotate] = useState('');

    function updateCount() {
        display('none');
        updateCookiePoints(cookiePoints + count);
    }

    function checkAndApplyUpgrade(index,e) {
        if(cookiePoints < upgrades[index].cost){
            display('block');
            newError('not enough points');
            return;
        }
        e.currentTarget.disabled = true;
        updateCookiePoints(cookiePoints- upgrades[index].cost);
        if(upgrades[index].description === "double points" || upgrades[index].description === "triple points") {
             return newCount(upgrades[index].upgrade);
        }
        if(upgrades[index].description === "change background color") {
            return newBgColor(upgrades[index].upgrade);
        }
        if(upgrades[index].description === "change image") {
            return newImg(upgrades[index].upgrade);
        }
        if(upgrades[index].description === "make img rotate") {
            return startRotate(upgrades[index].upgrade);
        }

    }
    return (
        <div style={{backgroundColor: bgColor}}>
            <div className="box" >
                <div className="f2 d-flex flex-column justify-content-center">
                    <img onClick={updateCount}
                          style={{animation:rot}}
                         src={img}
                         alt=""/>
                    <h4>Cookies Count: {cookiePoints}</h4>
                </div>
                <div className="f1 d-flex flex-column justify-content-center">
                    {upgrades.map((upgrade, index) => {
                        return <button key={index} onClick={(e) => checkAndApplyUpgrade(index, e)}>{upgrade.description}. Cost: {upgrade.cost}</button>
                    } )}
                    <p id="errorMessage" style={{display:dNone}}> {error}</p>
                </div>
            </div>
        </div>

    );
};

export default Cookie;