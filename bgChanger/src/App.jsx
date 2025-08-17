import { useState } from "react";
import Button from "./components/button";

function App() {
  const [color, setColor] = useState("white");

  const colorList = {
    red: "red",
    blue: "blue",
    green: "green",
    white: "white",
    cyan: "cyan",
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex text-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {Object.entries(colorList).map(([key, value]) => (
            <Button key={key} color={value} setColor={setColor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
