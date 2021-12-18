import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class AddDoctors extends React.Component {
  state = {
    doctor: {
        dname: "",
        specialization: "",
        qualification: "",
        availability: "",
        
      },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    dname: Joi.string().min(3).max(20).required(),
    specialization: Joi.string().min(3).max(20).required(),
    qualification: Joi.string().min(1).max(20).required(),
    availability: Joi.string().min(1).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.doctor, this.schema, {
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

    // copy state doctor object to local variable doctor
    const doctor = { ...this.state.doctor };

    // update local doctor object with values entered by user
    doctor[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ doctor: doctor });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8080/doctors", this.state.doctor)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added doctor " + this.state.doctor.dname + " successfully!"
        );
        this.props.history.push("/doctors");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const { dname, specialization, qualification,availability} = this.state.doctor;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto "style={{ backgroundColor: "#40b9e6" , marginTop: "10px"}}>
        <h3 className="fw-bolder" style={{ textAlign: "center"}}>Add Doctor</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
          style={{ backgroundColor: "#d1c4e9" }}
        >
        <div className="mb-3" >
        <label htmlFor="dname" className="form-label">
         <b>Doctor Name</b> 
        </label>
        <input
          type="text"
          className="form-control"
          id="dname"
          aria-describedby="emailHelp"
          value={dname}
          name="dname"
          onChange={this.handleChange}
        />
        {errors && <small>{errors.dname}</small>}
      </div>
            
          
      <div className="mb-3">
      <label htmlFor="specialization" className="form-label">
       <b>Specialization</b> 
      </label>
      <input
        type="text"
        className="form-control"
        id="specialization"
        aria-describedby="emailHelp"
        value={specialization}
        name="specialization"
        onChange={this.handleChange}
      />
      {errors && <small>{errors.specialization}</small>}
    </div>
            
         
    <div className="mb-3">
    <label htmlFor="qualification" className="form-label">
     <b>Qualification</b>
    </label>
    <input
      type="text"
      className="form-control"
      id="qualification"
      aria-describedby="emailHelp"
      value={qualification}
      name="qualification"
      onChange={this.handleChange}
    />
    {errors && <small>{errors.qualification}</small>}
  </div>
            
  <div className="mb-3">
  <label htmlFor="availability" className="form-label">
   <b>Availability</b>
  </label>
  <input
    type="text"
    className="form-control"
    id="availability"
    aria-describedby="emailHelp"
    value={availability}
    name="availability"
    onChange={this.handleChange}
  />
  {errors && <small>{errors.availability}</small>}
</div>    
          
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"  style={{ backgroundColor: "#327da8", width: "30%",margin: "auto" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddDoctors;