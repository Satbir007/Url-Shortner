import { useState } from "react";
import "../css/main.css";

const UrlInput = (props) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    props.setWebLink(value);
    setValue("");
  };
  return (
    <div className="inputCard">
      <div className="title">
        <h2>URL Shortener </h2>
      </div>
      <input
        className="url-input"
        type="text"
        placeholder="Paste a link to shorten it"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-btn" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
};

export default UrlInput;
