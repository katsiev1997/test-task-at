import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";

export const AppBar = () => {
  const dispatch = useAppDispatch();
  const email = useSelector((state: RootState) => state.authSlice.email);
  const path = useLocation();

  return (
    <header className="h-20 flex justify-between items-center px-5">
      <nav>
        <ul className="flex gap-4 items-center">
          <li className="hover:text-amber-500">
            <a href="#">Учетные записи</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#">Пользователи</a>
          </li>
          <li className="hover:text-amber-500">
            <Link
              className={path.pathname === "/devices" ? "text-amber-500" : ""}
              to="/devices"
            >
              Объекты
            </Link>
          </li>
          <li className="hover:text-amber-500">
            <a href="#">Водители</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#">Уведомления</a>
          </li>
          <li className="hover:text-amber-500">
            <a href="#">Задания</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2 items-center">
        <Link to="/">
          <div
            className={`size-8 border rounded-full p-1 ${
              path.pathname === "/" && "border-amber-500"
            }`}
          >
            <img src="/user.svg" alt="user" />
          </div>
        </Link>

        <p>{email}</p>
        <button
          onClick={() => dispatch(logout())}
          className="px-3 py-1 border border-amber-500 rounded-md hover:bg-amber-500 hover:border-black"
        >
          Выйти
        </button>
      </div>
    </header>
  );
};
