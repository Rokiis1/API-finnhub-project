import React, { useState, useContext } from "react";
import StockContext from "../context/context";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@material-ui/core/Container";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import styles from "../components/moduleStyle/formLayout.module.scss";
import { createNewLog } from "../middleware/library/routeLogs";
const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const stockContext = useContext(StockContext);
  const { symbols } = stockContext;

  const [symbol, setSymbol] = useState("");

  const onChange = (e) => {
    setSymbol([e.target.value]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (symbol === "") {
    } else {
      createNewLog({
        stockName: symbols,
      });
      stockContext.getSymbols(symbol);
      setSymbol("");
    }
  };

  const clearAllSymbols = () => {
    stockContext.clearSymbols();
  };

  return (
    <Container>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="filled-search"
          label="Search stock"
          type="search"
          variant="filled"
          required
          fullWidth
          value={symbol}
          onChange={onChange}
        />
        <Button
          className={styles.Button}
          fullWidth
          variant="contained"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
        {symbols && symbols.length > 0 && (
          <Button fullWidth variant="contained" onClick={clearAllSymbols}>
            Clear
          </Button>
        )}
      </form>
    </Container>
  );
};

export default FormPage;
