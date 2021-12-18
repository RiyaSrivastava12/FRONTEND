import React, { Component } from "react";
//import TextField from "@mui/material/TextField";
//import Box from "@mui/material/Box";

import { connect } from "react-redux";
import { loginAction } from "../actions/loginaction";
import Joi from "joi-browser";

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

class Login extends React.Component {
  state = {
    user: {
      email: "",
      password: "",
      role: "",
    },
    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    email: Joi.string().min(3).max(20).required(),
   password: Joi.string().min(3).max(20).required(),
    role: Joi.string().min(1).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.login, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (event) => {
    const usr = { ...this.state.user };
    usr[event.target.name] = event.target.value;
    this.setState({ user: usr });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // dispatch login action
    this.props.loginAction(this.state.user);

    // Redirect to products page on successfull login
    if (this.props.login.loggedIn) {
      this.props.history.push("/admin");
    }
  };
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Login Form</Typography>
        <Paper elevation={3}>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
            padding={2}
          >
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              style={{ marginBottom: 10 }}
              fullWidth
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              required
            />
             {errors && <small>{errors.email}</small>}
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              required
            />
             {errors && <small>{errors.password}</small>}
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.role}
                name="role"
                onChange={this.handleChange}
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);