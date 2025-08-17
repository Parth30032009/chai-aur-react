import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*(){}~`-+_=[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isCharAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordRef = useRef(null);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center">
      <h1 className="text-white text-center text-4xl my-3">
        Password Generator
      </h1>
      <div className="flex rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none w-full py-1 px-3 bg-white"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          className="oulite-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-3">
          <input
            className="cursor-pointer"
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>

          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => {
              setIsCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
