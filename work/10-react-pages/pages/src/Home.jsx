import "./css/Home.css";
import foxInWoodsImage from "./images/card-1.jpg";
import foxInSnowImage from "./images/card-2.jpg";
import foxUnderTreeImage from "./images/card-3.jpg";

import React from "react";

  function Home({onMenu}) {
    return (
      <div className="home">
        <div className="card">
          <h2 className="card__title">Behavior of fox</h2>
          <img className="card__pic" src={foxInWoodsImage} alt="Fox in the woods" />
          <div className="card__text">Click here link to <a href='/about.html' onClick={onMenu} >about.html</a></div>
        </div>
        <div className="card">
          <h2 className="card__title">Species of fox</h2>
          <img className="card__pic" src={foxInSnowImage} alt="Fox in the snow" />
          <div className="card__text">Click here link to <a href='/foxes.html' onClick={onMenu} >foxes.html</a></div>
        </div>
        <div className="card">
          <h2 className="card__title">Size of fox</h2>
          <img className="card__pic" src={foxUnderTreeImage} alt="Fox under the tree" />
          <div className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum libero in erat ullamcorper, non semper nisi condimentum.</div>
        </div>
       
      </div>
    );
  }
  
  export default Home;
  
  