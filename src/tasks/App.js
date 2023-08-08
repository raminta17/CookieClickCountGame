import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";

function App() {

  const names = ["Andrius", "Andriukas", "Andzej", "Andrej", "Andre", "Andryte"]
  const ages = [34, 22, 40];
  const cities = ["Vilnius", "Kaunas", "Klaipeda"];

  const [getName,setName] = useState("name");
  const [getAge,setAge] = useState("age");
  const [getCity,setCity] = useState("city");

  console.log(getName)
  function changeName(){
    setName(names[Math.floor(Math.random() *names.length)])
  }
  function changeAge(){
    setAge(ages[Math.floor(Math.random() *names.length)])
  }
  function changeCity(){
    setCity(cities[Math.floor(Math.random() *names.length)])
  }

  return (
    <div className="App">
      <div className="box">
        <div className="displayNameDiv">{getName}</div>
        <button onClick={changeName}>Set random name</button>
      </div>
      <div className="box">
        <div className="displayAgeDiv">{getAge}</div>
        <button onClick={changeAge}>Set random age</button>
      </div>
      <div className="box">
        <div className="displayCityDiv">{getCity}</div>
        <button onClick={changeCity}>Set random city</button>
      </div>
    </div>
  );
}

export default App;
