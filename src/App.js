import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { useSelector } from "react-redux";
import styled from "styled-components";

function App() {
  const { Them } = useSelector((state) => state);
  console.log(Them);
  const [addShowToggle, setAddShowToggle] = useState(false);
  const [aboutShowToggle, setAboutShowToggle] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundColor: Them.theme ? "black" : "white",
      }}
    >
      <Header setAddShowToggle={setAddShowToggle} />
      <Home setAboutShowToggle={setAboutShowToggle} aboutShowToggle={aboutShowToggle} addShowToggle={addShowToggle} setAddShowToggle={setAddShowToggle} />
      
    </div>
  );
}

export default App;
