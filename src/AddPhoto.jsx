import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsImage } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AddData, FechData } from "./store/DataSlice";
import axios from "axios";
import { FechCat } from "./store/Categories";
import upload from './img/upload.jpg'
const AddPhoto = ({ setAddShowToggle }) => {
  const { Them } = useSelector((state) => state);
  const { Categories } = useSelector((state) => state);
  const Dispatch = useDispatch();
  // const [img, setImg] = useState('')
  const [meesrge, setMeesrge] = useState(false);
  const [imgviwe, setImgViwe] = useState(
    upload
  );
  const [card, setCard] = useState({
    redy: false,
    cat: "",
    title: "",
    img: "",
    tokken: localStorage.getItem("token"),
  });
  useEffect(() => {
    Dispatch(FechCat());
  }, []);

  const HandelImg = (e) => {
    setImgViwe(URL.createObjectURL(e));
    const formdata = new FormData();
    formdata.append("file", e);
    formdata.append("upload_preset", "unjbhote");
    axios
      .post("https://api.cloudinary.com/v1_1/dy7fh0bor/image/upload", formdata)
      .then((res) => setCard({ ...card, img: res.data.url, redy: true }));
    //   const cld = new Cloudinary({
    //     cloud: {
    //       cloudName: 'unjbhote'
    //     }
    //   });
    //   setmyImage(cld.image(e))
    // console.log(myImage)
  };

  const { cat, title, img, redy } = card;
  const HandelAddCard = () => {
    Dispatch(AddData(card)).then((value) => {
      Dispatch(FechData()).then((res) => {
        setAddShowToggle(false);
        setMeesrge(false);
      });
    });

    // if ((title.length& cat.length&img.length)) {

    //   Dispatch(AddData(card)).then((value) => {
    //     Dispatch(FechData()).then((res) => {
    //       setAddShowToggle(false);
    //       setMeesrge(false);

    //     });
    //   });
    // } else {
    //   setMeesrge(true);
    // }
  };

  return (
    <Wraper
      style={{
        backgroundColor: Them.theme ? "black" : "white",
        color: Them.theme ? "white" : "black",
        border: Them.theme ? "1px solid white" : "",
      }}
      className="AddPhoto"
    >
      <div className="upper">
        <h3>AddPhoto</h3>
        <h5
          style={{ cursor: "pointer" }}
          onClick={() => setAddShowToggle(false)}
        >
          colse
        </h5>
      </div>
      <div className="mid">
        <div className="img-container">
          <img src={imgviwe} alt="" />
          <label htmlFor="fileImg">
            <BsImage color="white" size={70} />
          </label>
          <input
            required
            onChange={(e) => HandelImg(e.target.files[0])}
            style={{ display: "none" }}
            type="file"
            id="fileImg"
          />
        </div>
        <div className="inpts-container">
          <div className="title">
            <h2>Put a title for the image</h2>
            <input
              required
              type="text"
              value={card.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
            />
            <p>The title is used in the image search process</p>
          </div>
          <div className="category">
            <h2>Choose category</h2>
            <Select
              required
              value={card.cat}
              onChange={(e) => setCard({ ...card, cat: e.target.value })}
            >
              <option value="">select caetgory</option>
              {Categories.map((cat, id) => {
                return (
                  <option key={id} value={cat.title}>
                    {cat.title}
                  </option>
                );
              })}
            </Select>
          </div>

          {redy == true ? (
            <input
              onClick={HandelAddCard}
              className="summit"
              type="submit"
              value="ADD"
            />
          ) : (
            <p>please Set all data</p>
          )}

          {meesrge && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                padding: "10px 0",
              }}
            >
              please set all data before
            </p>
          )}
        </div>
      </div>
    </Wraper>
  );
};

export default AddPhoto;

const Select = styled.select`
  padding: 15px;
  width: 100%;
  margin: 10px;
  font-size: 20px;
`;

const Wraper = styled.div`
  overflow: auto !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  height: 80%;
  width: 65%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 5555;
  border-radius: 15px;
  box-shadow: 0px 3px 80px 15px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 0px 3px 80px 15px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 0px 3px 80px 15px rgba(0, 0, 0, 0.53);

  @media (max-width: 1000px) {
    width: 90%;
    height: 90%;

  }

  .upper {
    display: flex;
    justify-content: space-between;
    align-self: self-end;
    width: 100%;
  }
  .mid {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .img-container {
      width: 50%;
      position: relative;
      margin: 20px;

      img {
        max-height: 100%;
        width: 100%;
        max-width: 250px;
        border-radius: 15px;
      }

      label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }

    .inpts-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .category {
        width: 100%;
        padding: 10px;
        margin-top: 20px;
      }
      input {
        padding: 10px 15px;
        width: 100%;
        font-size: 20px;
        margin: 10px 0;
        outline: none;
      }
      .summit {
        padding: 15px 20px;
        color: white;
        background-color: #1e232b;
        border-radius: 25px;
        font-weight: 550;
        width: 100%;
        font-size: 20px;
        margin: 20px;
        outline: none;
        border: none !important;
      }
    }
  }
`;
