import React, { Component } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
class AddBill extends React.Component {
  state = {
    bill: {
      docFees: "",
      // email:"",
      // password:"",
      regFees: "",
      medAmount: "",
    },
    errors: {},
    errMsg: "",
  };

  handleChange = (event) => {
    const bill = { ...this.state.bill };
    bill[event.target.name] = event.target.value;
    this.setState({ bill: bill });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesub");

    //post req
    axios
      .post("http://localhost:8080/hsm/addBill", this.state.bill)
      .then((res) => {
        console.log(res.data);
        alert("Added Bill successfully");
        this.props.history.push("/finance");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { bId, docFees, regFees, medAmount } = this.state.bill;
    const { errors, errMsg } = this.state;
    return (
      <div className="">
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          className=" w-50 mx-auto border border-primary mt-3 py-3 px-3"
          onSubmit={this.handleSubmit}
          style={{ backgroundColor: "#d1c4e9" }}
        >
          <Typography
            variant="h5"
            style={{
              marginBottom: "20px",
              color: "white",
              backgroundColor: "#673ab7",
              padding: "10px",
              fontFamily: "Sans-Serif",
            }}
          >
            <b>
              <u>
                <i>Add Bill</i>
              </u>
            </b>
          </Typography>
          <div className="mb-3">
            <label for="docFees" className="form-label">
              Doctor Fees
            </label>
            <input
              type="text"
              className="form-control"
              id="docFees"
              aria-describedby="emailHelp"
              value={docFees}
              name="docFees"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="regFees" className="form-label">
              Registration Fees
            </label>
            <input
              type="text"
              className="form-control"
              id="regFees"
              aria-describedby="emailHelp"
              value={regFees}
              name="regFees"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="medAmount" className="form-label">
              Medical Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="medAmount"
              aria-describedby="emailHelp"
              value={medAmount}
              name="medAmount"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={{ backgroundColor: "#673ab7" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddBill;