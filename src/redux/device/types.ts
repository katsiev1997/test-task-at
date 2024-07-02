export type Device = {
  id: number;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface DeviceSliceState {
  items: Device[];
  status: Status;
}