import React from "react";
export function Jumpbotrom (){
  return(
    <div className="card bg-body-tertiary pt-5 pb-5">
      <div className="card-body">
        <h2 className="card-title">A Warm Welcome!</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.</p>
        <a href="#" className="btn btn-primary">Call to action</a>
      </div>
    </div>     
    );
};

export function Card ({img, title, description, buttonLink, buttonText}) {
  return(
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card text-center">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};