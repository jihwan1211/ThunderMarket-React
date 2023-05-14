import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { urlList: [] };

const urlTotalArray = createSlice({
  name: "urlTotalArray",
  initialState: {
    list: [
      {
        url: "",
        id: -1,
      },
    ],
  },
  reducers: {
    add(state, action) {
      state.list = [...state.list, ...action.payload];
    },
  },
});

const urlTempArray = createSlice({
  name: "urlTempArray",
  initialState: {
    list: [
      {
        url: "",
        id: -1,
      },
    ],
  },
  reducers: {
    add(state, action) {
      state.list = [...action.payload];
    },
  },
});

const isPageFoot = createSlice({
  name: "isPageFoot",
  initialState: { value: false },
  reducers: {
    toggle(state) {
      state.value = !state.value;
    },
    set(state, action) {
      state.value = action.payload;
    },
  },
});

const isProductClicked = createSlice({
  name: "isProductClicked",
  initialState: { value: false },
  reducers: {
    toggle(state) {
      state.value = !state.value;
    },
  },
});

const store = configureStore({
  reducer: {
    urlTotalArray: urlTotalArray.reducer,
    urlTempArray: urlTempArray.reducer,
    isPageFoot: isPageFoot.reducer,
    isProductClicked: isProductClicked.reducer,
  },
});

export const urlTotalArrayActions = urlTotalArray.actions;
export const urlTempArrayActions = urlTempArray.actions;
export const isPageFootActions = isPageFoot.actions;
export const isProductClickedActions = isProductClicked.actions;

export default store;
