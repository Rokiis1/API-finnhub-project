import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import StockLayout from "./layout/StockLayout";
import StockState from "./context/stock/state";
import "../src/style/global.scss";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({});

const App = () => {
  return (
    <StockState>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route
              exact
              path="/symbol/:symbol"
              render={(props) => <StockLayout {...props} />}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </StockState>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
