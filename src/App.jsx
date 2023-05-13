import { useState } from "react";
import "./styles/global.css";
import Login from "./pages/Login";

function App() {
  const [signed, _] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {signed ? "App" : <Login />}
    </div>
  );
}

export default App;
