import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

function Routes() {
  const { credentials } = useAuth();

  return (
    <BrowserRouter>
      {credentials.token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

export default Routes;
