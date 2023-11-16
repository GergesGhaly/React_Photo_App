import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { useSelector } from "react-redux";

const AboutPage = ({ setAboutShowToggle }) => {
  const { Them } = useSelector((state) => state);

  return (
    <Wraper
      style={{
        backgroundColor: Them.theme ? "black" : "white",
        color: Them.theme ? "white" : "black",
        border: Them.theme ? "1px solid white" : "",
      }}
    >
      <div className="upper">
        <h3>About</h3>

        <h5
          style={{ cursor: "pointer" }}
          onClick={() => setAboutShowToggle(false)}
        >
          colse
        </h5>
      </div>
      <div className="content">
        <h3>About Proj</h3>
        <p> ui & Add , Delete function PhotoApp</p>
        <p>
          {" "}
          Using the conditional display with the addition interface and the
          search menu. Also, delete the button by generating a unique number
          upon entry and sending this number with each post{" "}
        </p>
        <p>
          This project, along with this project{" "}
          <a
            style={{
              color: Them.theme ? "white" : "black",
            }}
            target="_blank"
            href="https://souqAppTest.surge.sh"
          >
            SouqApp
          </a>
          , represents crud operations using redux-toolkit with api ,
        </p>
        <p>Tech used :</p>
        <ul>
          <li>react</li>
          <li>redux-tollkit </li>
          <li>styled-components</li>
          <li>Json-server</li>
          <li>Cloudinary</li>
          <li>local storge</li>
          <li>React Icons</li>
        </ul>
      </div>
      <div className="content">
        <h3>About Me</h3>
        <h5>Gerges Ghaly</h5>
        <p>
          Bachelor's degree in Management Information Systems 2021, grade: very
          good
        </p>
        <p>html, css, bootstrap,styled-components, js, react, redux toolkit </p>
        <p>Familiar with most react libraries </p>
        <div className="links">
          <a href="https://gerges.ghaly.surge.sh/" target={"_blank"}>
            <FaPalette color={Them.theme ? "white" : "black"} />
          </a>

          <a
            href="https://www.linkedin.com/in/gerges-ghaly-9455b3224/"
            target={"_blank"}
          >
            <FaLinkedin color={Them.theme ? "white" : "black"} />
          </a>
          <a href="https://github.com/GergesGhaly" target={"_blank"}>
            <FaGithub color={Them.theme ? "white" : "black"} />
          </a>
        </div>
      </div>

      <div className="foter">
        <p
          style={{
            color: Them.theme ? "white" : "black",
          }}
        >
          gerges.ghaly1@gmail.com
        </p>
      </div>
    </Wraper>
  );
};

export default AboutPage;

const Wraper = styled.div`
  overflow: auto !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  line-height: 1.5;

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

  .content {
    padding: 5px 0;
    .links {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      a {
        font-size: 20px;
        padding: 0 10px;
      }
    }
    h3 {
      margin-bottom: 8px;
    }
  }
`;
