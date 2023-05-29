import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <AuthProvider>
      <div>
        <Routes />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
