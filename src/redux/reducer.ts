import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitState } from "../interfaces";

export const fetchCurrencyData: any = createAsyncThunk(
  "currency/fetchCurrency",
  async () => {
    try {
      let response = await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      );
      if (response.status === 200) {
        let data = await response.json();
        return data;
      } else {
        throw "Error fetching currency list";
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "store",
  initialState: {
    base: "1",
    firstSelect: "",
    firstInput: "",
    secondSelect: "",
    secondInput: "",
    currencyData: [],
  } as InitState,
  reducers: {
    setFirstSelect(state, action) {
      state.firstSelect = action.payload;
    },

    firstInputCalculate(state: any, action) {
      state.firstInput = action.payload;
      if (state.firstSelect === state.base) {
        state.secondInput = (state.firstInput * state.secondSelect).toFixed(2);
      }
      if (state.firstSelect > state.base || state.secondSelect > state.base) {
        state.secondInput = (
          (action.payload * state.firstSelect) /
          state.secondSelect
        ).toFixed(2);
      }
      if (!state.firstInput) {
        state.secondInput = "";
      }
    },

    setSecondSelect(state, action) {
      state.secondSelect = action.payload;
    },
    secondInputCalculate(state: any, action) {
      state.secondInput = action.payload;
      if (state.secondSelect === state.base) {
        state.firstInput = (state.secondInput * state.firstSelect).toFixed(2);
      }
      if (state.secondSelect > state.base || state.firstSelect > state.base) {
        state.firstInput = (
          (action.payload * state.secondSelect) /
          state.firstSelect
        ).toFixed(2);
      }
      if (!action.payload) {
        state.firstInput = "";
      }
    },
  },
  extraReducers: {
    [fetchCurrencyData.fulfilled.type]: (state: InitState, action) => {
      state.currencyData = action.payload ? action.payload?.slice(0, 2) : [];
    },
  },
});

export default slice.reducer;

export const {
  setFirstSelect,
  firstInputCalculate,
  setSecondSelect,
  secondInputCalculate,
} = slice.actions;
