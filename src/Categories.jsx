import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CathData, FechData } from "./store/DataSlice";
import { useDispatch, useSelector } from "react-redux";
import { FechCat } from "./store/Categories";

const Categories = () => {
  const { Categories } = useSelector((state) => state);

  const Dispatch = useDispatch();
  const [cat, setCat] = useState("");

  useEffect(() => {
    Dispatch(FechCat());

    if (cat) {
      Dispatch(CathData(cat));
    } else {
      Dispatch(FechData());
    }

    //   // console.log(searcInpt)
  }, [cat]);

  return (
    <Select value={cat} onChange={(e) => setCat(e.target.value)}>
      <option value="">all</option>
      {Categories.map((cat,id) => {
        return <option key={id} value={cat.title}>{cat.title}</option>;
      })}
      {/* <option value="rel">rel</option>
      <option value="game">game</option> */}
    </Select>
  );
};

const Select = styled.select`
  padding: 10px 15px;
  margin-right: 10px;
`;

export default Categories;
