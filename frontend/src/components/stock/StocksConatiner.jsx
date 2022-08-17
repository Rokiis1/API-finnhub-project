import React, { useContext } from "react";
import Loading from "../utils/Loading";
import Stock from "./Stock";
import StockContext from "../../context/context";
import Grid from "@material-ui/core/Grid";
import { Container } from "@mui/system";

const StockContainer = () => {
  const stockContext = useContext(StockContext);
  const { symbols, loading } = stockContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Grid container spacing={3}>
          {symbols &&
            symbols.map((symbol) => (
              <Grid key={symbol.symbol} item xs={12} md={6} lg={4}>
                <Stock symbol={symbol} />
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
};

export default StockContainer;
