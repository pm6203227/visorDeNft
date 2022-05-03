import React from "react";
import "../Cover/Cover.css";
import equilibrium from "../../Media/equilibrium.jpg";
import clock from "../../Media/clock.svg";
import ethereum from "../../Media/ethereum.svg";
import avatar from "../../Media/avatar.png";
import iview from "../../Media/iview.svg";

const Cover = () => {
  return (
    <div className="b container-fluid">
      <div className="c bg-blue text-white">
        <img
          src={equilibrium}
          className="a card-img-top img-responsibe"
          alt="nft"
        />
        <img
          src={iview}
          className="ojo card-img-top img-responsibe"
          alt="nft"
        />
        <div className="card-body">
          <h5 className="card-title text-left">
            <a className="hp" href="/">
              Equilibrium #3429
            </a>
          </h5>
          <br />
          <p className="card-text text-justify">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="row">
            <div className="col-md-6">
              <p className="bd">
                <img className="c1" src={ethereum} alt="ethereum" />
                0.041 ETH
              </p>
            </div>
            <div className="col-md-6">
              <p className="bc">
                <img className="c1" src={clock} alt="clock" />3 days left
              </p>
            </div>
            <br />
            <hr />
          </div>
          <div className="row">
            <div className="col-md-1">
              <img className="im" src={avatar} alt="ethereum" />
            </div>
            <div className="col-md-11">
              <p className="bc">
                Creation of{" "}
                <a className="hp" href="/">
                  Jules Wyvern
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
