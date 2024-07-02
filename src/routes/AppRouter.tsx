import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const AppRouter = () => {
  const email = useSelector((state: RootState) => state.authSlice.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (email.length === 0) {
      navigate("/login");
    }
  });
  return <Outlet />;
};

export default AppRouter;
