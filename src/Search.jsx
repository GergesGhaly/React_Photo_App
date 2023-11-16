import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SearchData, FechData, CathData } from "./store/DataSlice";
import { FechCat } from "./store/Categories";
const Search = ({ Them }) => {
  const [toogle, setToggle] = useState(false);

  const { Categories } = useSelector((state) => state);
  const Dispatch = useDispatch();
  const [searcInpt, setSearchInpt] = useState("");
  const [cat, setCat] = useState("");
  // const handelCat = (e) => {
  //   setCat(e);
  //   setToggle(false);
  // };

  useEffect(() => {
    if (searcInpt.length > 0) {
      // Dispatch(FechData());
      const tim = setTimeout(() => {
        Dispatch(SearchData(searcInpt));
      }, 1200);
      return () => {
        clearTimeout(tim);
      };
    } else {
      Dispatch(FechData());
    }
  }, [searcInpt, cat]);

  const HandelToglle = () => {
    setTimeout(() => {
      setToggle(!toogle);
    }, 250);
  };
  console.log("cat" + cat);

  return (
    <SearchBar className="searcBar">
      <Inpt
        value={searcInpt}
        onChange={(e) => setSearchInpt(e.target.value)}
        onFocus={HandelToglle}
        onBlur={HandelToglle}
        type="text"
        placeholder="Search and choose from the most popular categories ..."
      />
      {toogle && !searcInpt && (
        <div
          style={{
            backgroundColor: Them.theme ? "black" : "white",
            color: Them.theme ? "white" : "black",
            borderBottom: Them.theme ? "2px solid white" : "",
          }}
          className="serachMenu"
        >
          <Card onClick={() => Dispatch(FechData())}>
            <img
              src="https://i.pinimg.com/236x/25/1c/4b/251c4b01548c50c8fd70fcce1b259949.jpg"
              alt=""
            />
            <h6>All</h6>
          </Card>
          ;
          {Categories.map((item, id) => {
            return (
              <Card
                key={id}
                onClick={() => {
                  Dispatch(CathData(item.title));
                }}
              >
                <img src={item.img} alt="" />
                <h6>{item.title}</h6>

                {/* <h5>{item.title}</h5> */}
              </Card>
            );
          })}
        </div>
      )}
    </SearchBar>
  );
};

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 0 10px;

  @media (max-width: 1000px) {

    order: 1;
    width: 100%;
  }

  .serachMenu {
    overflow: auto;
    position: absolute;
    top: 100%;
    padding: 10px 20px;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 46px 24px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 46px 24px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 46px 24px 0px rgba(0, 0, 0, 0.75);
  }
`;
const Card = styled.div`
  height: 130px;
  width: 130px;
  margin: 20px 5px;
  cursor: pointer;

  /* :hover {
    box-shadow: -2px 19px 21px -13px rgba(0, 0, 0, 0.41);
    -webkit-box-shadow: -2px 19px 21px -13px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: -2px 19px 21px -13px rgba(0, 0, 0, 0.41);
  } */

  /* ::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.185);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
 */
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Inpt = styled.input`
  height: 50px;
  font-size: 20px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 25px;
  margin: 8px 0;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 20px;
  cursor: pointer;
  outline: none;
  :focus {
    border: 2px solid black;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
export default Search;
