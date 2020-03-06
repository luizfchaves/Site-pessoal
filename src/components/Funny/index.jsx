import React, { useState, useEffect } from "react";

// import { Container } from './styles';\
import "./styles.css";

const Funny = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  function getColors() {
    let styles = {};
    let crudeStyles = document.documentElement.style.cssText.split(";");
    crudeStyles.map(r => {
      if (r) {
        let crudeStyleSplited = r.split(":");
        let itemName = crudeStyleSplited[0].trim();
        let itemValue = crudeStyleSplited[1];
        styles[itemName] = itemValue;
      }
    });
    console.log("styles", styles);
    setPrimaryColor(styles["--primary-color"]);
    setTextColor(styles["--text-color"]);
    setBackgroundColor(styles["--background-color"]);
  }
  function setColors() {
    let colors = {
      "--primary-color": primaryColor,
      "--text-color": textColor,
      "--background-color": backgroundColor
    };
    localStorage.setItem("funnyColors", JSON.stringify(colors));
    Object.entries(colors).map(r => {
      document.documentElement.style.setProperty(r[0], r[1]);
    });
  }

  useEffect(() => {
    getColors();
  }, []);
  return (
    <div>
      <input
        type="color"
        value={primaryColor}
        onChange={e => setPrimaryColor(e.target.value)}
      />
      <input
        type="color"
        value={textColor}
        onChange={e => setTextColor(e.target.value)}
      />
      <input
        type="color"
        value={backgroundColor}
        onChange={e => setBackgroundColor(e.target.value)}
      />
      <button className="btn btn-primary" onClick={setColors}>
        Setar
      </button>
    </div>
  );
};

export default Funny;
