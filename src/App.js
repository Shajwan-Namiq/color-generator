 import Values from "values.js";
 import SingleColor from "./SingleColor";
import './App.css';
import { useState } from "react";



function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));


const handleSubmit =(e) => {
  e.preventDefault();

try {
   let colors = new Values(color).all(10);
    setList(colors);


} catch (error) {
  setError(true);
  console.log(error);
}
}


  return (
    <>
      <div>
        <p>Color Generator</p>

        <form onSubmit={handleSubmit}>
        <input type="text"  value={color} 
        onChange={(e)=> setColor(e.target.value)}
        placeholder="#f15025"
        className={`${error ? 'error' :null}`}
        />
        
      <button className="bg-lime-700" type="submit">Submit</button> 

         </form>
      </div>




      <div>
        <p>List goes here</p>
        {list.map((color, index) => {

          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        }
        )}
      </div>


    </>
  );
}

export default App;
