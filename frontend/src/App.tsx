import React from "react";
import Search from "./components/Search";
import { ThemeContextProvider } from "./utils/context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Search />
    </ThemeContextProvider>
  );
};

export default App;
