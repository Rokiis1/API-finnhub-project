import React, { Component } from "react";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "cbqbg0aad3i9b8tff7f0";
    const API_CALL = `https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1631022248&to=1631627048&token=${API_KEY}`;
    const stockChartXValuesFunction = [];
    const stockChartYValuesFunction = [];

    fetch(API_CALL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  render() {
    return <div>Chart</div>;
  }
}
