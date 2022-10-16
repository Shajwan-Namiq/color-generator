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
        <p className="p-5 text-4xl flex justify-center font-bold">Color Generator</p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="border-2 ">
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#f15025"
                className={`${error ? "error" : null}`}
              />
            </div>

            <button className="bg-red-900 text-white px-4 rounded-sm hover:bg-red-800 shadow-lg font-bold" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="px-10 py-20  ">
        <div className=" grid grid-cols-3 lg:grid-cols-7">
          {list.map((color, index) => {
            return (
              <div className="">
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexColor={color.hex}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
