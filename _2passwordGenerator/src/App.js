import { useState, useCallback,useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

const passwordRef=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()-_+=[]{}~`";
    }

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllowed, charAllowed, setPass]);
 

const  copyPassToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
 // passwordRef.current?.setSelectionRange(0,5);
  window.navigator.clipboard.writeText(pass)//for selection
},[pass])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 py-2">
      <h1 className="text-white text-center py-2 text-lg ">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassToClipBoard}
          className="outline-none bg-blue-600 text-white px-2 py-2 " >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white"> length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberinput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label className="text-white"> Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charinput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="text-white"> Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
