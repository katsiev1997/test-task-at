import { Route, Routes } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AuthRouter from "./routes/AuthRouter";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DeviceListPage from "./pages/DeviceListPage";
import { AppBar } from "./components/AppBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const email = useSelector((state: RootState) => state.authSlice.email);
  return (
    <>
      {email.length > 0 && <AppBar />}
      <Routes>
        <Route path="/" element={<AppRouter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DeviceListPage />} />
        </Route>
        <Route path="/" element={<AuthRouter />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
