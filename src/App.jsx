import { useState } from "react";
import "./styles/global.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/authContext";

function App() {
  const [signed, _] = useState(false);

  return (
    <AuthProvider>
      <div className="bg-background min-h-screen max-w-screen-lg m-auto text-ink mt-28 lg:mt-32 px-6 md:px-20 xl:px-28 flex flex-col items-center">
        <Routes />
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;
