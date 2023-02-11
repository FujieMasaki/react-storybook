import "./button.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Button({
  children,
  color = "default",
  size = "base",
  backgroundColor,
}) {
  const [message, setmessage] = useState("");
  const handleClick = () => {
    setmessage("clicked");
  };
  return (
    <button
      className={`${color} ${size}`}
      style={backgroundColor && { backgroundColor }}
      onClick={handleClick}
    >
      {children}
      {message}
    </button>
  );
}

// Button.propTypes = {
//   /**
//    * What background color to use
//    */
//   color: PropTypes.oneOf(["primary", "default", "der"]),
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["sm", "base", "lg"]),
// };

export default Button;
