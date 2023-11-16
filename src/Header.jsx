import React, { useState } from "react";
import styled from "styled-components";
import { BsChatHeart } from "react-icons/bs";
import { BsFill5CircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Search from "./Search";
import Addbtn from "./Addbtn";
import { Dark, Light } from "./store/ThemSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ setAddShowToggle }) => {
  const dispatch = useDispatch();
  const { Them } = useSelector((state) => state);
  console.log(Them);
  const [themIcon, setIhemIcon] = useState(false);

  const DarkHand = () => {
    dispatch(Dark());
    setIhemIcon(true);
  };
  const LightHand = () => {
    dispatch(Light());
    setIhemIcon(false);
  };

  return (
    <Weaper className="container">
      <Logo
        style={{
          color: Them.theme ? "white" : "black",
        }}
      >
        PhotoApp
      </Logo>
      <Search Them={Them} />
      {themIcon ? (
        <Mod onClick={() => LightHand()}>
          <MdLightMode size={20} color="white" />
          <h5
            style={{
              color: "white",
            }}
          >
            Light
          </h5>
        </Mod>
      ) : (
        <Mod onClick={() => DarkHand()}>
          <MdDarkMode size={20} />
          <h5>Dark</h5>
        </Mod>
      )}
      <Addbtn setAddShowToggle={setAddShowToggle} />
      {/* <Cart>
        Saved 0
      </Cart> */}
    </Weaper>
  );
};

const Mod = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h5 {
    user-select: none;
  }
  /* @media (min-width:1000px) and (max-width:1200px){
    h5 {
      display: none;
    }
} */
  /* @media (max-width: 1200px) {
    justify-content: center;

   
  } */
`;
const Weaper = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;
const Logo = styled.div`
  font-size: 15px;
  font-weight: 550;
`;

const Cart = styled.div`
  border: none;
  outline: none;
  padding: 10px 15px;
  /* color: white;
  background-color: #1e232b; */
  border-radius: 25px;
  font-weight: 550;
  cursor: pointer;
`;

export default Header;
