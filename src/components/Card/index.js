import React from "react";
import LazyLoad from "react-lazyload";

import "./styles.scss";

const regexToColorText = /\*\s\d/g;

const Card = ({ title, imageSrc, missing, note }) => {
  // Used to highlight specific value rather then regex pattern
  // const formatLabel = (label, value) => {
  //   if (!value) {
  //     return label;
  //   }
  //   return (
  //     <span>
  //       {label.split(value).reduce((prev, current, i) => {
  //         if (!i) {
  //           return [current];
  //         }
  //         return prev.concat(<b key={value + current}>{value}</b>, current);
  //       }, [])}
  //     </span>
  //   );
  // };

  const highlightPattern = (text) => {
    const splitText = text.split(regexToColorText);

    if (splitText.length <= 1) {
      return text;
    }

    const matches = text.match(regexToColorText);

    return splitText.reduce(
      (arr, element, index) =>
        matches[index]
          ? [
              ...arr,
              element,
              <span className="red-color" key={index}>
                {matches[index]}
              </span>,
            ]
          : [...arr, element],
      []
    );
  };
  return (
    <LazyLoad>
      <div className="card">
        <h4 className={`${missing ? "red-color" : ""}`}>
          {highlightPattern(title)}
        </h4>

        <img className="img-item" src={imageSrc} alt="img" />
        {note && <span className="note">{`${note}`}</span>}
      </div>
    </LazyLoad>
  );
};

export default Card;
