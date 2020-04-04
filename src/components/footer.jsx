import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const START_TOTAL = 30;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    margin: "auto",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  title: {
    fontFamily: "Muli",
    fontSize: 16,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: "#2F4F4F",
    paddingRight: 10
  },

  slider: {
    minWidth: "15vw"
  }
});

class Footer extends Component {
  render() {
    const { numBlocks, onChange, searching } = this.props;
    return (
      <Row className={css(styles.container)}>
        <Typography
          className={css(styles.title)}
          style={{ minWidth: "70px" }}
          gutterBottom
        >
          Number of Blocks
        </Typography>
        <Slider
          className={css(styles.slider)}
          defaultValue={START_TOTAL}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          min={5}
          max={50}
          onChange={(_, value) => {
            onChange("numBlocks", value);
          }}
          disabled={searching}
        />
        <div style={{ marginLeft: 50 }}></div>
        <Typography className={css(styles.title)} gutterBottom>
          Target Size
        </Typography>
        <Slider
          className={css(styles.slider)}
          defaultValue={Math.floor(START_TOTAL / 2) + 1}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={numBlocks}
          onChange={(_, value) => {
            onChange("targetSize", value);
          }}
          disabled={searching}
        />
        <div style={{ marginLeft: 50 }}></div>
        <Typography className={css(styles.title)} gutterBottom>
          Speed
        </Typography>
        <Slider
          className={css(styles.slider)}
          defaultValue={50}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          //   marks
          min={1}
          max={100}
          onChange={(_, value) => {
            onChange("speed", value);
          }}
          disabled={searching}
        />
      </Row>
    );
  }
}

export default Footer;
