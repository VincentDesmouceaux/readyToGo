import "./App.css";

import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="main">
      <div className="on">
        <div className="onoff">
          <button
            style={{
              background: active ? "white" : "purple",
              textColor: "white",
            }}
          >
            ON
          </button>
          <button>OFF</button>
        </div>
        <div className="onoff">
          <button>ON</button>
          <button>OFF</button>
        </div>
        <div className="onoff">
          <button>ON</button>
          <button>OFF</button>
        </div>
      </div>
      <div className="noway">
        <button>No Way</button>
      </div>
    </div>
  );
}

export default App;
