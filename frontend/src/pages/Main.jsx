import React from "react";
import FormPage from "../layout/FormLayout";
import StocksContainer from "../components/stock/StocksConatiner";

const Home = () => {
  return (
    <div>
      <FormPage />
      <StocksContainer />
    </div>
  );
};

export default Home;
