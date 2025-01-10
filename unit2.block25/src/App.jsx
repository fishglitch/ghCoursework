import { useState } from "react";

// Write your Color component here
const Color = ({ color, selectedColor, setSelectedColor }) => {
let combinedclassName = color

if (color === selectedColor) {
combinedclassName += " " + "selected"
// the div has two class names
}

  return (
    <div>
      <div
        className={combinedclassName}
        onClick={() => {
          setSelectedColor(color);
        }}
      ></div>
    </div>
  )
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color={"violet"}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color={"blue"}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color={"red"}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;
