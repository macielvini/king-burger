import { useState } from "react";
import "./styles/global.css";
import Login from "./pages/Login";
import Routes from "./routes";

function App() {
  const [signed, _] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Routes />
    </div>
  );
}

export default App;
