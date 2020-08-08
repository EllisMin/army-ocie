import React from "react";

import "./styles.scss";

const Card = ({ title, imageSrc, missing }) => {
  return (
    <div className="card">
      <h3 className={`${missing ? "red-color" : ""}`}>{title}</h3>
      <img className="img-item" src={imageSrc} alt="img" />
    </div>
  );
};

export default Card;
