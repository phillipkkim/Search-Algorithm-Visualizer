import React, { Component } from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import Button from "./button.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: 40,
    paddingBottom: 15,
    borderBottom: "2px solid #DFE0EB",
    backgroundColor: "#24292e"
  },

  separator: {
    borderLeft: "2px solid #DFE0EB",
    marginLeft: 32,
    height: 32,
    width: 2
  },
  title: {
    marginLeft: 20,
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
    cursor: "default",
    color: "white",
    cursor: "pointer"
  },
  space: {
    marginLeft: 20
  }
});

class Header extends Component {
  state = {};
  render() {
    return (
      <Row
        className={css(styles.container)}
        vertical="center"
        horizontal="space-between"
      >
        <span
          className={css(styles.title)}
          onClick={() => {
            window.location.reload(false);
          }}
        >
          Search Algorithm Visualizer
        </span>
        <Row vertical="center">
          <Button
            title="Linear Search"
            onClick={() => this.props.onClick("linearSearch")}
          />
          <Button
            title="Jump Search"
            onClick={() => this.props.onClick("jumpSearch")}
          />
          <Button
            title="Binary Search"
            onClick={() => this.props.onClick("binarySearch")}
          />
          <Button
            title="Ternary Search"
            onClick={() => this.props.onClick("ternarySearch")}
          />
          {/* <Button
            title="Interpolation Search"
            onClick={() => this.props.onClick("interpolationSearch")}
          /> */}
          <Button
            title="Exponential Search"
            onClick={() => this.props.onClick("exponentialSearch")}
          />
          <Button
            title="Fibonacci Search"
            onClick={() => this.props.onClick("fibonacciSearch")}
          />
          <div className={css(styles.separator)}></div>
          <Button title="Clear" onClick={() => this.props.onClick("clear")} />
          <div style={{ marginLeft: 30 }}></div>
        </Row>
      </Row>
    );
  }
}

export default Header;
