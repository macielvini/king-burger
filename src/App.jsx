import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";

function App() {
  const [signed, _] = useState(false);

  return (
    <AuthProvider>
      <div className="bg-background min-h-screen max-w-screen-lg m-auto text-ink pt-28 lg:pt-32 px-6 md:px-20 lg:px-16 xl:px-0 grid grid-cols-1 justify-items-center">
        <Routes />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
