import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import About from "./components/About";

import SayWord from "./components/SayWord";
import {useState} from 'react';


function App() {

  const [word, setWord] = useState("")



  //different from link since anything can trigger this since we're using JS with navigate*
  //USE NAVIGATE IS LIKE REDIRECT FROM  PYTHON*
  const navigator = useNavigate();

  //after importing useNavigate - set up button
  const buttonClick = () => {
    // navigator("/say/broceans");
    navigator('/say/'+word)
  };

  return (
    <div className="App">
      <h1>Hello!</h1>
      <Link to={"/"}>HOME</Link>|<Link to={"/hello"}>Hello</Link>|
      <Link to={"/about"}>About</Link>
      <hr/>
{/* INCOMPLETE BUTTON HERE* */}
      <input type="text" onChange={e=>{setWord(e.target.value)}} value={word}></input>

      <button onClick={buttonClick}>Take Me Somewhere!</button>
      <Routes>
        <Route path="/hello" element={<h1>Hello!!</h1>}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<p>HOME</p>}></Route>
        {/* setting up useParams bellow: */}
        <Route path="/say/:word" element={<SayWord />}></Route>
        {/* slightly different use bellow */}
        <Route path="/say/hello" element={<h1>THIS IS different</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
