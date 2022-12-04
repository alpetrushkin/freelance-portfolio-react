import React from 'react';
import './style.css';
import gitHubBlack from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
   return (
      <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
         <img src={gitHubBlack} alt=""/>
         GitHub repo
      </a>
   );
};

export default BtnGitHub;