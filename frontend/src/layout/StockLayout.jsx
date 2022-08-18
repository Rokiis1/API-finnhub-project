import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/utils/Loading";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@material-ui/core/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "../components/moduleStyle/stockLayout.module.scss";

const SymbolProfile = ({ match }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${match.params.symbol}&token=cbqbg0aad3i9b8tff7f0`
      );
      setProfile(res.data);
      setLoading(false);
    };

    getProfile();
  }, []);

  const {
    country,
    currency,
    exchange,
    finnhubIndustry,
    ipo,
    logo,
    marketCapitalization,
    shareOutstanding,
    name,
    weburl,
    ticker,
  } = profile;

  const abbreviate_number = (num, fixed) => {
    if (num === null) {
      return null;
    }
    if (num === 0) {
      return "0";
    }
    fixed = !fixed || fixed < 0 ? 0 : fixed;
    var b = num.toPrecision(2).split("e"),
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
      c =
        k < 1
          ? num.toFixed(0 + fixed)
          : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
      d = c < 0 ? c : Math.abs(c),
      e = d + ["", "K", "M", "B", "T"][k];
    return e;
  };

  if (loading || !profile) {
    return <Loading />;
  } else if (!profile.name) {
    return (
      <Container>
        <Button variant="contained">
          <Link to="/">Back To Search</Link>
        </Button>
        <h1>Result Not Found</h1>
      </Container>
    );
  } else {
    return (
      <Container>
        <Button variant="contained">
          <Link className={styles.Link} to="/">
            Back To Search
          </Link>
        </Button>
        <Card className={styles.Card}>
          <CardMedia
            className={styles.CardMedia}
            component="img"
            image={logo}
            alt={logo}
          />
          <CardContent>
            <Typography>Name: {name}</Typography>
            <Typography>Country: {country}</Typography>
            <Typography>Currency: {currency}</Typography>
            <Typography>Industry: {finnhubIndustry}</Typography>
            <Typography>Exchange: {exchange}</Typography>
            <Typography>IPO: {ipo}</Typography>
            <Typography>
              Market Capitalization:{" "}
              {abbreviate_number(marketCapitalization, 0)}
            </Typography>
            <Typography>Share Outstanding: {shareOutstanding}</Typography>
            <Button variant="contained" href={weburl} target="_blank">
              Visit Site
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
};

export default SymbolProfile;
