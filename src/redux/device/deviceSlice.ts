import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Device, DeviceSliceState, Status } from "./types.ts";
import { axiosInstance } from "../../api/axiosInstance.ts";

const initialState: DeviceSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchDevice = createAsyncThunk(
  "pizza/fetchDeviceStatus",
  async () => {
    const { data } = await axiosInstance.get<Device[]>("/devices");
    return data;
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevice.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(
      fetchDevice.fulfilled,
      (state, action: PayloadAction<Device[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchDevice.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = deviceSlice.actions;

export default deviceSlice.reducer;
