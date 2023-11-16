import React, { useEffect, useState } from "react";
import Addbtn from "./Addbtn";
import Categories from "./Categories";
import Search from "./Search";
import Cradslist from "./Cradslist";
import styled from "styled-components";
import AddPhoto from "./AddPhoto";
import { useSelector } from "react-redux";
import AboutPage from "./AboutPage";

const Home = ({
  setAddShowToggle,
  addShowToggle,
  aboutShowToggle,
  setAboutShowToggle,
}) => {
  const { Data } = useSelector((state) => state);
  const { Them } = useSelector((state) => state);

  // const [token, setToken] =useState(JSON.parse(localStorage.getItem("token")))
  const [token, setToken] = useState(55);

  // const [datac, setDatac] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:5000/card")
  //     .then((res) => res)
  //     .then((json) => setDatac(json.cat));
  // }, []);

  // console.log(datac);
  // const FetchFromLocalStorg = () => {
  //   const CartInLocal = localStorage.getItem("token");
  //   if(CartInLocal){
  //     setToken(localStorage.getItem("token"))
  //   }
  //   else{
  //   const randomtoken = Math.floor(Math.random() * 10000);
  //   setToken(randomtoken)
  //   localStorage.setItem("token",token)
  //   }
  //   console.log("hi" + token);

  // };

  useEffect(() => {
    const CartInLocal = localStorage.getItem("token");
    if (CartInLocal) {
      setToken(localStorage.getItem("token"));
      console.log(token);
    } else {
      const randomtoken = Math.floor(Math.random() * 10000);
      setToken(randomtoken);
      localStorage.setItem("token", token);
    }
  });

  return (
    <Wraper className="container">
      <HomeUper>
        <Categories />
        {/* <Addbtn setAddShowToggle={setAddShowToggle} /> */}
      </HomeUper>
      {addShowToggle ? <AddPhoto setAddShowToggle={setAddShowToggle} /> : null}
      {aboutShowToggle ? (
        <AboutPage setAboutShowToggle={setAboutShowToggle} />
      ) : null}
      {Data.length ? (
        <Cradslist />
      ) : (
        <h2
          style={{
            color: Them.theme ? "white" : "black",
          }}
        >
          No data To show
        </h2>
      )}
      <AboyBtn onClick={() => setAboutShowToggle(true)} title="About">
        ?
      </AboyBtn>
    </Wraper>
  );
};

const AboyBtn = styled.button`
  position: sticky;
  left: 0px;
  bottom: 10px;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid white;
  font-weight: 900;
  user-select: none;
  cursor: pointer;
  box-shadow: -5px 6px 5px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -5px 6px 5px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 6px 5px -5px rgba(0, 0, 0, 0.75);
`;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeUper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Home;
