import { Loading, Ticker, Clear, Stock } from "../types/values";

export default (state, action) => {
  switch (action.type) {
    case Loading:
      return {
        loading: true,
      };
    case Ticker:
      return {
        ...state,
        symbols: action.payload,
        loading: false,
      };
    case Clear:
      return {
        symbols: [],
      };
    case Stock:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
