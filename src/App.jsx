import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";

function App() {
  const [signed, _] = useState(false);

  // w-screen h-24 flex justify-center items-center bg-secondary fixed top-0 left-0 md:px-20 xl:px-28 lg:h-28

  return (
    <AuthProvider>
      <div className="bg-background min-h-screen max-w-screen-lg m-auto text-ink px-6 md:px-20 xl:px-28">
        <Routes />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
