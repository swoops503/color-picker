import React, { useState } from "react";

const ColorSquare = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
      style={{ backgroundColor: color }}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <ColorSquare color="red" setSelectedColor={setSelectedColor} />
        <ColorSquare color="blue" setSelectedColor={setSelectedColor} />
        <ColorSquare color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
