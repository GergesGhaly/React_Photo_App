import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { FechData } from "./store/DataSlice";
import { useDispatch, useSelector } from "react-redux";

const Cradslist = () => {
  const Dispatch = useDispatch();
  const { Data } = useSelector((state) => state);
  useEffect(() => {
    Dispatch(FechData());
    //     fetch('http://localhost:5000/card')
    // .then(res => res.json())
    // .then(json => setData(json))
  }, [Dispatch]);
  // const [data, setData] = useState();

  return (
    <CradslistWarper id="CradslistWarper">
      {Data?.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </CradslistWarper>
  );
};

const CradslistWarper = styled.div`
  margin-top: 20px;
  columns: 6;
  column-gap: 10px;

  @media (max-width: 1350px) {
    columns: 5;
  }
  @media (max-width: 1300px) {
    columns: 4;
  }
  @media (max-width: 1100px) {
    columns: 3;
  }
  @media (max-width: 800px) {
    columns: 2;
  }
  @media (max-width: 550px) {
    columns: 1;
  }
`;
export default Cradslist;
