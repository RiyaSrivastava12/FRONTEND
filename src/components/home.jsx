import { Typography } from "@mui/material";
import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner" style={{ width: "100%", height: "100%" }}>
            <div class="carousel-item active">
              <img
                src="images/slider_2.jpg"
                alt="Los Angeles"
                width="100%"
                height="450"
              />
              
            </div>
            <div class="carousel-item">
              <img
                src="images/slider_1.jpg"
                alt="Chicago"
                width="100%"
                height="450"
              />
              <div class="carousel-caption" style={{textAlign: "left"}}>
                <h3 style={{color:"black"}}> <strong>Hope Lives Here </strong></h3>
                <h3 style={{color:"black"}}> <strong>The Most Experienced Hospital</strong></h3>
                <p>The hospital you trust to care for those you love.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="images/slider_3.jpg"
                alt="New York"
                width="100%"
                height="450"
              />
              <div class="carousel-caption" style={{textAlign: "left" , color:"black"}}>
                <h2><strong>Finest Clinical Team</strong></h2>
                <p style={{fontSize:"25px"}}>Combining years of Experience , hightest skills <br/>and the latest in medical science,for your speedy recovery.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>

        {/* key features ................................................................*/}

        <section class="key-features">
          <div class="container">
            <div class="inner-title">
              <h2 style={{ textAlign: "center" }}>Our Key Features</h2>
              <p style={{ textAlign: "center" }}>
                Take a look at some of our key features
              </p>
            </div>

            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-hospital-alt"></i>

                  <h5>Newest Technologies</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-user-md"></i>
                  <h5>Experianced Doctors</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-briefcase-medical"></i>
                  <h5>High Customer Satisfaction</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-capsules"></i>
                  <h5>Pharma Pipeline</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-prescription-bottle-alt"></i>
                  <h5>Pharma Team</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="single-key">
                  <i class="fas fa-thumbs-up"></i>
                  <h5>High Quality treatments</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** footer.................................................... */}

        <footer class="page-footer font-small special-color-dark pt-4">
          <div class="container">
            <ul class="list-unstyled list-inline text-center">
              <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-1">
                  <i class="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                  <i class="fab fa-twitter"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                  <i class="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                  <i class="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-dribbble mx-1">
                  <i class="fab fa-dribbble"> </i>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2021 Copyright:
            <a href="#"> HealthServiceManagement.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
