import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
	<div>
   <header>
        <h1>Workforce</h1>
        <nav>
            <ul>
            <Link to="/home"> Home</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/contact"> Contact Us</Link>
            <Link to="/postjob"><button> Post a Job</button></Link>
            <Link to="/login"><button >Login </button></Link> 
            
            </ul>
        </nav>
    </header>   
		<section>
    <div class="col-md-12">
      <form method="post" class="pages">
        <div class="row mb-5">
        <div class="mb-5 text-center">
        <h1 class="text-white font-weight-bold">HOME</h1>
        </div>
        </div>
      </form>
    </div>
        <div class="wrapper">
            <h1> Streamline your workforce Management </h1>
            <p>Get started today and learn more about our solutions</p>
            <div class="content-box">
              <div class="card">
                <i class="bx bx-laptop bx-md"></i>
                <h2>Web App Development</h2>
                <p>
                    100 openings
                </p>
              </div>
              <div class="card">
                <i class="bx bx-line-chart bx-md"></i>
                <h2>Education & Training</h2>
                <p>
                    100 openings
                </p>
              </div>
              <div class="card">
                <i class="bx bx-mail-send bx-md"></i>
                <h2>Graphic & UI/UX design</h2>
                <p>
                    100 openings
                </p>
              </div>
              <div class="card">
                <i class="bx bx-bar-chart-alt bx-md"></i>
                <h2>Accounting & Finanace </h2>
                <p>
                 100 openings
                </p>
              </div>
              <div class="card">
                <i class="bx bx-paint bx-md"></i>
                <h2>Health & Hospital</h2>
                <p>
                    100 openings
                </p>
              </div>
              <div class="card">
                <i class="bx bx-bar-chart-alt bx-md"></i>
                <h2>Marketing Services</h2>
                <p>
                    100 openings
                </p>
              </div>
            </div>
        </div>
        </section>
        <br />
		<section class="job-listings">
          <h2>Latest Job Listings</h2>
          <div class="job">
            <h3>Software Engineer</h3>
            <p>Google</p>
            <p>Mountain View, CA</p>
            <a href="/">Apply</a>
          </div>
          <div class="job">
            <h3>Marketing Manager</h3>
            <p>Facebook</p>
            <p>Menlo Park, CA</p>
            <a href="/">Apply</a>
          </div>
          <div class="job">
            <h3>Graphic Designer</h3>
            <p>Apple</p>
            <p>Cupertino, CA</p>
            <a href="/">Apply</a>
          </div>
          <div class="job">
            <h3>Fullstack Developer</h3>
            <p>Microsoft</p>
            <p>Menlo Park, CA</p>
            <a href="/">Apply</a>
          </div>
          <div class="job">
            <h3>Web Developer</h3>
            <p>Apple</p>
            <p>Cupertino, CA</p>
            <a href="/">Apply</a>
          </div>
          <div class="job">
          <h3>Datascience Engineer</h3>
            <p>Google</p>
            <p>Mountain View, CA</p>
            <a href="/">Apply</a>
          </div>
        </section>
        <br />
		<section class="subscribe">
          <h1>Subscribe to our Newsletter</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br />there live the blind texts
             Separated they live in Bookmarksgrove right at the<br/>coast of the Semantics large Pacific Ocean.</p>
            <br />
              <div class="email-form">
                <input type="email" class="email-input" placeholder="Enter email address" />
                <button class="email-button">Subscribe</button>
            </div>
          </section>
    </div>
  );
}
export default Home;