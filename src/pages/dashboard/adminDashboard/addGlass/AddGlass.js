import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const AddGlass = () => {
  const [glassData, setGlassData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newGlassData = { ...glassData };
    newGlassData[field] = value;
    setGlassData(newGlassData);
  };

  const handleAddGlass = (e) => {
    const url = "https://chasmish-hero.herokuapp.com/glasses";
    axios
      .post(url, glassData)
      .then(() => {
        alert("New Glass Add Successfully.");
      })
      .catch();

    e.preventDefault();
  };
  return (
    <Box
      component="form"
      onSubmit={handleAddGlass}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Glass Name"
        name="title"
        onChange={handleOnChange}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Glass Image URL"
        name="image"
        onChange={handleOnChange}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Price"
        name="price"
        onChange={handleOnChange}
        variant="outlined"
      />
      <TextareaAutosize
        name="details"
        onChange={handleOnChange}
        aria-label="minimum height"
        minRows={4}
        placeholder="Glass Details"
        style={{ width: 200 }}
      />
      <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
        Add Glass
      </Button>
    </Box>
  );
};

export default AddGlass;
