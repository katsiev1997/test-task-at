import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchDevice } from "../redux/device/deviceSlice";
import { Status } from "../redux/device/types";
import DeviceList from "../components/DeviceList";

const DeviceListPage = () => {
  const { items, status } = useSelector((state: RootState) => state.deviceSlice);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDevice());
  }, [dispatch]);
  console.log(items);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск по id..."
        className="outline-none border rounded p-2 m-2 focus:border-amber-500"
      />
      {status === Status.LOADING && <h1>Loading...</h1>}
      {status === Status.ERROR && <h1>Error...</h1>}
      {items.length > 0 && <DeviceList value={value} devices={items} />}{" "}
    </div>
  );
};

export default DeviceListPage;
