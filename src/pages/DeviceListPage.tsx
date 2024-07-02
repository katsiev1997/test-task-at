import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchDevice } from "../redux/device/deviceSlice";
import { Status } from "../redux/device/types";
import DeviceList from "../components/DeviceList";
import { SearchBar } from "../components/SearchBar";

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
      <SearchBar value={value} setValue={setValue} />
      {status === Status.LOADING && <h1>Loading...</h1>}
      {status === Status.ERROR && <h1>Error...</h1>}
      {items.length > 0 && <DeviceList value={value} devices={items} />}{" "}
    </div>
  );
};

export default DeviceListPage;
