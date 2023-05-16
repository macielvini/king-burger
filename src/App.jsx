import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";

function App() {
  const [signed, _] = useState(false);

  return (
    <AuthProvider>
      <div className="bg-gray-950 min-h-screen text-white">
        <Routes />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
