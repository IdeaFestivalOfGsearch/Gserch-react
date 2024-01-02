import { Route,Routes,BrowserRouter } from "react-router-dom";
import GSHome from "./page/GSHome";
import { createGlobalStyle } from 'styled-components';
import backgnd from '../src/asset/png/background.png'
import './App.css'
import Login from "./page/Login";
import Signup from "./page/Signup"
import First from "./page/First";

function App() {
  const BackImg = createGlobalStyle`
  html 
  {  
    overflow: hidden;
    width:100%;
    height: 100vh;
    background-image: url(${backgnd});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
  }
  `
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}/>
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/home" element={<GSHome/>}/>
      </Routes>
    <BackImg/>
    </BrowserRouter>
  );
}

export default App;
