import React, { useReducer } from "react";
import axios from "axios";
import StockContext from "../context";
import actionFunc from "./actionFunc";
import { Ticker, Clear, Stock, Loading } from "../types/values";

const StockState = (props) => {
  const initialState = {
    symbols: [],
    profile: {},
    loading: false,
  };

  const getSymbols = async (symbol) => {
    setLoading();
    const res = await axios.get(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=cbqbg0aad3i9b8tff7f0`
    );
    let data = res.data;
    dispatch({
      type: Ticker,
      payload: data.result,
    });
  };

  const clearSymbols = () => {
    dispatch({ type: Clear });
  };

  const getProfile = async (symbol) => {
    setLoading();
    const res = await axios.get(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cbqbg0aad3i9b8tff7f0`
    );

    dispatch({
      type: Stock,
      payload: res.data,
    });
  };

  const setLoading = () => {
    dispatch({ type: Loading });
  };

  const [state, dispatch] = useReducer(actionFunc, initialState);

  return (
    <StockContext.Provider
      value={{
        symbols: state.symbols,
        loading: state.loading,
        profile: state.profile,
        getSymbols,
        clearSymbols,
        getProfile,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockState;
