import { Device } from "../redux/device/types";

type Props = {
  devices: Device[];
  value: string;
};

const DeviceList = ({ devices, value }: Props) => {
    let items
  if (value.length > 0) {
    items = devices.filter((device) => device.id === Number(value));
  } else {
    items = devices;
  }
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">ID</th>
            <th className="py-2 px-4 border-b text-center">Name</th>
            <th className="py-2 px-4 border-b text-center">Unique ID</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-center">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {items.map((device) => (
            <tr key={device.id}>
              <td className="py-2 px-4 border-b text-center">{device.id}</td>
              <td className="py-2 px-4 border-b text-center">{device.name}</td>
              <td className="py-2 px-4 border-b text-center">{device.uniqueId}</td>
              <td className="py-2 px-4 border-b text-center">{device.status}</td>
              <td className="py-2 px-4 border-b text-center">{device.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceList;
