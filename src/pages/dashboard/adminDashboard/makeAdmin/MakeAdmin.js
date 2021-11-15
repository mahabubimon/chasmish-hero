import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newEmail = { ...email };
    newEmail[field] = value;
    setEmail(newEmail);
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    axios
      .put("https://chasmish-hero.herokuapp.com/addAdmin", email)
      .then(() => {
        alert("Admin Added Successfully.");
      })
      .catch((error) => {});
  };
  return (
    <Box
      component="form"
      onSubmit={handleAddAdmin}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add a Admin. </h2>
      <TextField
        id="outlined-basic"
        label="Admin Email Address"
        name="email"
        onBlur={handleOnBlur}
        variant="outlined"
      />
      <Button
        sx={{ width: "75%", m: 2, p: 2 }}
        type="submit"
        variant="contained"
      >
        Make Admin
      </Button>
    </Box>
  );
};

export default MakeAdmin;
