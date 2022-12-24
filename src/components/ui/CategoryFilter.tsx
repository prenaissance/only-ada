import { FormControlLabel, Checkbox, Grid, Box, Typography, Slider } from "@mui/material";

import React, { useState } from "react";

function CategoryFilter() {
  const [checkboxValues, setCheckboxValues] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  function handleChange(event: { target: { name: any; checked: any } }) {
    const { name, checked } = event.target;
    setCheckboxValues({ ...checkboxValues, [name]: checked });
  }

  return (
    <Box
      boxShadow={3}
      sx={{
        borderRadius: "10px",
        backgroundColor: "white",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Typography color="#1E728E" variant="body1" fontWeight="bold">
        Price Range:
      </Typography>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <Typography color="#1E728E" variant="body1" fontWeight="bold">
        Courses Types:
      </Typography>
      <form>
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.option1}
                  onChange={handleChange}
                  name="option1"
                  style={{
                    color: "#1E728E",
                  }}
                />
              }
              label="Art"
              style={{ color: "#1E728E" }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.option2}
                  onChange={handleChange}
                  name="option2"
                  style={{
                    color: "#1E728E",
                  }}
                />
              }
              label="Personal Development"
              style={{ color: "#1E728E" }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.option3}
                  onChange={handleChange}
                  name="option3"
                  style={{
                    color: "#1E728E",
                  }}
                />
              }
              label="Sports"
              style={{ color: "#1E728E" }}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
export default CategoryFilter;
