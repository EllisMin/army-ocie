import React from "react";

import "./styles.scss";

const Card = ({ title, imageSrc, missing, note }) => {
  return (
    <div className="card">
      <h4 className={`${missing ? "red-color" : ""}`}>{title}</h4>
      <img className="img-item" src={imageSrc} alt="img" />
      {note && <span className="note">{`${note}`}</span>}
    </div>
  );
};

export default Card;
