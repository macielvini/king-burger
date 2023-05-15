import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  const [signed, _] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
