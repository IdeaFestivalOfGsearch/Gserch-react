import { Route,Routes,BrowserRouter } from "react-router-dom";
import GSHome from "./page/GSHome";
import { createGlobalStyle } from 'styled-components';
import backgnd from '../src/asset/png/background.png'
import './App.css'

function App() {
  const BackImg = createGlobalStyle`
  body{
    overflow: hidden;
    background-image: url(${backgnd});
    background-size: cover; 
    background-repeat: no-repeat;
  }
  `
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GSHome/>}/>
      </Routes>
    <BackImg/>
    </BrowserRouter>
  );
}

export default App;
