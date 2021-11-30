import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto auto",
        maxWidth: "900px",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        style={{ marginTop: "10px" }}
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
