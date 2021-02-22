import React from "react";
import "./footer.scss";
import {
  poto,
  icDiscord,
  icFb,
  icIg,
  icGithub,
  icTelegram,
  icTwitter,
} from "../../../assets";
import CopyRight from "../CopyRight";

const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="poto-wrapper">
          <img className="poto" src={poto}></img>
        </div>
        <div className="icon-wrapper">
          <img className="poto" src={icTwitter}></img>
          <img className="poto" src={icIg}></img>
          <img className="poto" src={icTelegram}></img>
          <img className="poto" src={icFb}></img>
          <img className="poto" src={icGithub}></img>
          <img className="poto" src={icDiscord}></img>
        </div>
      </div>
      <CopyRight></CopyRight>
    </div>
  );
};

export default Footer;
