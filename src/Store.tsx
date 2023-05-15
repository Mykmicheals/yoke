import { createSlice, configureStore } from "@reduxjs/toolkit";

interface sliceTypes {
  lat: number | null;
  lng: number | null;
}

const initialState: sliceTypes = {
  lat: 40.7128,
  lng: -74.006,
};

const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    setLat(state, action) {
      state.lat = action.payload;
    },
    setLng(state, action) {
      state.lng = action.payload;
    },
  },
});

export const { setLat, setLng } = mapSlice.actions;

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const mapStore = (state: RootState) => state.map;

export default store;
