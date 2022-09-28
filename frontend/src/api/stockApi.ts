import { API_URL, TOKEN } from "./url";
import { Symbol, StockData, Quote } from "../interface/Stock";

export const searchSymbol = async (query: string) => {
  const url = `${API_URL}/search?q=${query}&token=${TOKEN}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Something went wrong ${response.status}!`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchStockDetails = async (stockSymbol: StockData) => {
  const url = `${API_URL}/stock/profile2?symbol=${stockSymbol}&token=${TOKEN}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Something went wrong ${response.status}!`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchQuote = async (stockSymbol: Quote) => {
  const url = `${API_URL}/quote?symbol=${stockSymbol}&token=${TOKEN}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Something went wrong ${response.status}!`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchHistoricalData = async (
  stockSymbol: string,
  resolution: number,
  from: number,
  to: number
) => {
  const url = `${API_URL}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${TOKEN}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Something went wrong ${response.status}!`;
    throw new Error(message);
  }

  return await response.json();
};
