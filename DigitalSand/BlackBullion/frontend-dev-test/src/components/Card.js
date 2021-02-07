import React from "react";
import PropTypes from "prop-types";

import '../styles/Card.css'

function Card(props) {
  var image = {
    backgroundImage: "url(" + props.image + ")",
    backgroundSize: "100%",
  };
  // Assuming that the time is in seconds, to display it in minutes:
  var time = parseInt(props.duration / 60);

  // In order not to display too much text:
  var description = props.description.slice(0, 199);

  return (
    <div className="card">
      <div className="card-image" style={image}>
        <div className="card-time">{time} min</div>
      </div>
      <h1 className="card-title">{props.title}</h1>
      <p className="card-description">
        {description}
        {props.description.length > 199 && <span>...</span>}
      </p>

      <div className="card-go">
        <a href={props.url} className="card-link">
          Start pathway &#8594;
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  duration: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Card;
