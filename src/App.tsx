import { useEffect, useRef, useState } from "react";

function App() {
  const [state, setState] = useState(true);

  const ref = useRef(true)

  useEffect(() => {
    console.log("Log line 12: ", ref.current);
  }, []);

  function save() {
    console.log("Log line 6: ", ref.current);
    setState(false);
    ref.current = false;

    if (ref.current) {
      console.log("Log line 18: ");
    }
    console.log("Log line 24: ", ref.current);
  }

  return (
    <div className="App">
      <button onClick={save}>ok</button>
    </div>
  );
}

export default App;
