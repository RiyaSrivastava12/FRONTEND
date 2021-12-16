import React, { Component } from "react";
//import TextField from "@mui/material/TextField";
//import Box from "@mui/material/Box";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";

class Register extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Registration Form</Typography>
        <Paper elevation={3}>
          <Box component="form" noValidate autoComplete="off" padding={2}>
            
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              type="Text"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
            id="filled-basic"
            label="Contact No."
            variant="filled"
            type="Tele"
            style={{ marginBottom: 10 }}
            fullWidth
          />
          <TextField
            id="filled-basic"
            label="Address"
            variant="filled"
            type="Text"
            style={{ marginBottom: 10 }}
            fullWidth
          />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="customer">Doctor</MenuItem>
                <MenuItem value="student">Admin</MenuItem>
                <MenuItem value="admin">Patient</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" fullWidth style={{ marginTop: "10px" }}>
              Submit
            </Button>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Register;