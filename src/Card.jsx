import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { DeletData, FechData } from "./store/DataSlice";
const Card = ({ card }) => {
  const Dispatch = useDispatch();
  const [tokken, setTokken] = useState('');
  useEffect(()=>{
    setTokken (JSON.parse(localStorage.getItem("token")))
  },[])
console.log('tok',tokken)
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#CradslistWarper",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
  }, []);
  const remove = (id) => {
    Dispatch(DeletData(id)).then((value) => {
      Dispatch(FechData());
    });
  };
  return (
    <CardWrper key={card.id}>
      <img src={card.img} alt="" />
      <h5>{card.title?.substring(0, 20)}</h5>
      {/* <h5
        style={{
          bottom: "30px",
        }}
      >
        {card.cat}
      </h5> */}

      <div className="Content">
        <div>
          <Btn style={{
            cursor:'default',
          }} >{card.cat}</Btn>
          {card.tokken == tokken ? (
            <BtnRed onClick={() => remove(card.id)}>Delete</BtnRed>
          ) : null}
        </div>
        <div className="fullImg">
          <a
            href={card.img}
            data-pswp-width="1669"
            data-pswp-height="2500"
            target="_blank"
          >
            <BsArrowsFullscreen size={25} color="white" />
          </a>
        </div>
      </div>
    </CardWrper>
  );
};

const CardWrper = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
width: 100%;
  img {
    border-radius: 15px;
    width: 100%;
  }
  /* .fullImg {
    position: absolute;
    top: 10px;
    right: 7px;
  } */
  .Content {
    padding: 0 10px;
    z-index: 5;
    position: absolute;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: none;
    width: 100%;
  }

  h5 {
    position: absolute;
    bottom: 12px;
    left: 10px;
    color: white;
    display: none;
  }

  ::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.185);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    border-radius: 15px;

  }
  :hover h5 {
    display: block;
  }

  :hover::before {
    display: block;
  }

  :hover .Content {
    display: flex;
  }
`;

const Btn = styled.button`
  border: none;
  outline: none;
  padding: 10px 15px;
  color: white;
  background-color: #1e232b;
  border-radius: 25px;
  font-weight: 550;
  cursor: pointer;
  margin-right: 5px;
`;
const BtnRed = styled.button`
  border: none;
  outline: none;
  padding: 10px 15px;
  color: white;
  background-color: rgb(255, 45, 45);
  border-radius: 25px;
  font-weight: 550;
  cursor: pointer;
`;

export default Card;
