import React, { Component } from 'react';
import axios from "axios"
class UpdatePatientPersonalDetails extends React.Component {
    state={
        patientPersonalDetails:{
        pName:"",
        pAge:"",
        phoneNo:"",
        gender:"",
        address:"",
        symptoms:"",
        },
    };
    componentDidMount() {
        axios
          .get(
            `http://localhost:8080/PatientPersonalDetails/${this.props.match.params.pId}`
          )
          .then((res) => {
            console.log(res.data);
            this.setState({ patientpersonaldetails: res.data });
          })
          .catch((err) => console.log(err));
      }
    handleChange=(event)=>{
        //logic to update state object
        //copying  patient state object to local variable
        const patientPersonalDetails={...this.state.patientPersonalDetails};
        console.log(patientPersonalDetails);
        console.log(event.target.name);//name of field-fullname
        console.log(event.target.value);//value entered in the field-a

        //update local  patient object with values entered by user
        patientPersonalDetails[event.target.name]=event.target.value;
        // patient[fullname]-a;-update value
        //patient.fullname=a;-update value

        //update state object using setstate method
        this.setState({patientPersonalDetails:patientPersonalDetails});
    };
    handleSubmit= (event) =>{
        event.preventDefault();
        console.log("handlesubmit");
        // send post request to rest api
        axios
        .put(`http://localhost:8080/PatientPersonalDetails/${this.props.match.params.pId}`,
        this.state.patientPersonalDetails)
        .then((res) => {
            console.log(res.data);
            alert("Updated patient " + this.state.patientPersonalDetails.pName + "successfully!");
            this.props.history.push("/patient");
        })
        .catch((err) => console.log(err));

    };
    render() { 
        return <div>
            <form  onSubmit={this.handleSubmit}
            className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3" >
            <div className="mb-3">
    <label htmlFor="pName" className="form-label">Patient Name</label>
    <input type="text" className="form-control" id="pName" aria-describedby="emailHelp" 
    value={this.state.patientPersonalDetails.pName}
    name="pName"
    onChange={this.handleChange}/>
    
  </div>
  

  <div className="mb-3">
    <label htmlFor="pAge" className="form-label">Patient Age</label>
    <input type="text" className="form-control" id="page" aria-describedby="emailHelp"
     value={this.state.patientPersonalDetails.pAge}
     name="pAge"
    onChange={this.handleChange}/>
    
  </div>
 
  <div className="mb-3">
    <label htmlFor="phoneNo" className="form-label">Phone Number</label>
    <input type="tel" className="form-control" id="phoneNo" aria-describedby="emailHelp"
    value={this.state.patientPersonalDetails.phoneNo}
    name="phoneNo"
    onChange={this.handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="gender" className="form-label">Gender</label>
    <input type="text" className="form-control" id="gender" aria-describedby="emailHelp"
    value={this.state.patientPersonalDetails.gender}
    name="gender"
    onChange={this.handleChange}/>
    
  </div>
  <div className="mb-3">
    <label fhtmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" aria-describedby="emailHelp"
    value={this.state.patientPersonalDetails.address}
    name="address"
    onChange={this.handleChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="symptoms" className="form-label">Symptoms</label>
    <input type="text" className="form-control" id="symptoms" aria-describedby="emailHelp"
    value={this.state.patientPersonalDetails.symptoms}
    name="symptoms"
    onChange={this.handleChange}/>
    
  </div>
  <div className="d-grid gap-2">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
 </form>
 
        </div>;
    }
}
 
export default UpdatePatientPersonalDetails;