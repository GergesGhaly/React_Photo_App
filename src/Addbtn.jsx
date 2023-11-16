import React from "react";
import styled from "styled-components";

const Addbtn = ({ setAddShowToggle }) => {
  return <Btn onClick={() => setAddShowToggle(true)}>Add Photo</Btn>;
};

const Btn = styled.div`
  padding: 10px 20px;
  color: white;
  background-color: #1e232b;
  border-radius: 25px;
  font-weight: 400;
  user-select: none;
  cursor: pointer;

  @media (max-width: 1060px) {
    padding: 10px 15px;
    font-size: 13px;

  }

  @media (max-width: 800px) {
    padding: 8px 15px;

    font-size: 13px;
    margin-left: 7px;
  }
`;
export default Addbtn;
