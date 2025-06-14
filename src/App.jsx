// import react, {useState} from "react";

import "./App.css";
import Header from "./components/Header";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Business from "./components/Business";
import Example from "./components/Example";
import Distribution from "./components/Distribution";
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Header></Header>
      <Problem></Problem>
      <Solution></Solution>
      <Business></Business>
      <Example></Example>
      <Distribution></Distribution>
      <Footer></Footer>


    </div>
  )
}

export default App