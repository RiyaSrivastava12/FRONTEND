import React, { Component } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
class UpdateBill extends React.Component {
  state = {
    bill: {
      docFees: "",
      regFees: "",
      medAmount: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/updateBill/bId/${this.props.match.params.bId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ bill: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    // copy state bill object to local variable student
    const bill = { ...this.state.bill };

    // update local student object with values entered by user
    bill[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ bill: bill });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/hsm/updateBill/${this.props.match.params.bId}`,
        this.state.bill
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated Bill successfully!");
        this.props.history.push("/finance");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { docFees, regFees, medAmount } = this.state.bill;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className=" w-50 mx-auto border border-primary mt-3 py-3 px-3"
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
                <i>Update Bill</i>
              </u>
            </b>
          </Typography>
          <div className="mb-3">
            <label htmlFor="docFees" className="form-label">
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
            <label htmlFor="regFees" className="form-label">
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
            <label htmlFor="medAmount" className="form-label">
              Medical amount
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
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#673ab7" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateBill;