import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resignation from "./pages/Resignation";
import Clearance from "./pages/Clearance";
import AssetReturn from "./pages/AssetReturn";
import ExitHistory from "./pages/ExitHistory";
import Analytics from "./pages/Analytics";
import Settlement from "./pages/Settlement";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/resignation"
          element={<Resignation />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/clearance"
          element={<Clearance />}
        />

        <Route
          path="/assets"
          element={<AssetReturn />}
        />

        <Route
          path="/history"
          element={<ExitHistory />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/settlement"
          element={<Settlement />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;