import { useState } from "react";
import './index.css';


// Write your Color component here
//props is an object that contains all the properties that are passed to the component
/*
const Color = (props) => {
  return <div className={props.color}></div>;
}
*/

//This is my color Component deconstructed
const Color = ({color, setSelectedColor, selectedColor}) => {
 //The colors to select from
  return( 
  <div 
    className={`${color} ${color === selectedColor ? 'selected' : ''}`} 
    onClick={() => setSelectedColor(color)}
    ></div>
    )
}

//this is The picker Component
const App = () => {
  //Used for keeping track of the selected color
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        </div>
    </div>
  );
};

export default App;
