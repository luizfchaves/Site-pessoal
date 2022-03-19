import React, { useState, useEffect } from 'react';

// import { Container } from './styles';\
import './styles.css';

function Funny() {
  const [primaryColor, setPrimaryColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  function getColors() {
    const styles = {};
    const crudeStyles = document.documentElement.style.cssText.split(';');
    crudeStyles.forEach((r) => {
      if (r) {
        const crudeStyleSplited = r.split(':');
        const itemName = crudeStyleSplited[0].trim();
        const itemValue = crudeStyleSplited[1];
        styles[itemName] = itemValue;
      }
    });
    setPrimaryColor(styles['--primary-color']);
    setTextColor(styles['--text-color']);
    setBackgroundColor(styles['--background-color']);
  }
  function setColors() {
    const colors = {
      '--primary-color': primaryColor,
      '--text-color': textColor,
      '--background-color': backgroundColor,
    };
    localStorage.setItem('funnyColors', JSON.stringify(colors));
    Object.entries(colors).forEach((r) => {
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
        onChange={(e) => setPrimaryColor(e.target.value)}
      />
      <input
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button type="button" className="btn btn-primary" onClick={setColors}>
        Setar
      </button>
    </div>
  );
}

export default Funny;
