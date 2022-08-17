import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styles from "../moduleStyle/stock.module.scss";

const Stock = ({ symbol: { description, symbol, type } }) => {
  return (
    <Card>
      <CardHeader title={symbol}></CardHeader>
      <CardContent>
        <Typography color="textSecondary">{description}</Typography>
        <Typography color="textSecondary">{type}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">
          <Link className={styles.Link} to={`/symbol/${symbol}`}>
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Stock;
