import React from "react";
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container1: {
    height: 56,
    cursor: "pointer",
    ":hover": {
      // color: "rgba(10, 100, 255)",
      color: "lightseagreen",
      fontWeight: "bold",
      fontSize: 16
    }
  },
  container2: {
    height: 56,
    cursor: "pointer",
    ":hover": {
      // color: "rgba(10, 100, 255)",
      color: "lightcoral",
      fontWeight: "bold",
      fontSize: 16
    }
  },
  title: {
    fontFamily: "Muli",
    fontSize: 15,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    // color: "#2F4F4F",
    color: "white",
    marginLeft: 24
  }
});

function Button(props) {
  const { title, ...otherProps } = props;

  let customStyle = styles.container1;
  if (title === "Clear") {
    customStyle = styles.container2;
  }

  return (
    <Row
      className={css(customStyle, styles.title)}
      vertical="center"
      {...otherProps}
    >
      {title}
    </Row>
  );
}

Button.propTypes = {
  title: string
};

export default Button;
