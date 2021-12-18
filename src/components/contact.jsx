import React from "react";

import Typography from "@mui/material/Typography";
const Contact = () => {
  return (
    <div >
      <section class="key-features" style={{backgroundImage:"url('images/admin3.jpg')"}}>
        <div class="container">
          <div class="inner-title">
            <h2 style={{ textAlign: "center",color:"white" }}>Get in touch with us.</h2>
            <p style={{ textAlign: "center",color:"white" }}>
              <a href="#">
                <i class="fas fa-home"></i> Home
              </a>
              <i class="fas fa-angle-double-right"></i> Contact Us
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-key">
                <i class="fas fa-phone"></i>
                <h5>Phones</h5>
                 
                <li> 6577687899</li>
                <li> 7000054040</li>
              
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
                <i class="fas fa-envelope-square"></i>
                <h5>E-Mail</h5>
                <p>
                hospitalmanagementsystem@gmail.com <br/>
                hsm12@gmail.com
                </p>
                
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
                <i class="far fa-clock"></i>
                <h5>Opening Hours</h5>
                <p>
                24 Hrs* 365 Days Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
