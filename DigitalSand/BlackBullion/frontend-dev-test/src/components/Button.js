import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  var styles = {
    height: "40px",
    lineHeight: "30px",
    fontSize: "14px",
    border: "1px solid #333",
    backgroundColor: "#fafafa",
    borderRadius: "5px",
    margin: "5px",
  };

  // for the pagination buttons
  if (props.type === "pageButton") {
    styles.width = "40px";
  }

  // for the button of the current page.
  if (props.currentPage) {
    styles.backgroundColor = "rgb(86,48,141)";
    styles.color = "#fff";
  }

  return (
    <button onClick={props.onClick} style={styles}>
      {props.children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.bool,
};

export default Button;
