import React from 'react'
import { Link} from 'react-router-dom';

const Header = () => {

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
    <div class="col-md-12">
      <form method="post" class="search-jobs-form">
        <div class="row mb-5">
        <div class="mb-5 text-center">
        <h1 class="text-white font-weight-bold">The Easiest Way To Get Your Dream Job</h1>
      </div>
      <br />
      <br />
          <br /><div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <label for="job title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job title: </label>
          <i class="fas fa-user"></i>
            <input type="text" class="form-control form-control-lg" placeholder="Job title.." />
          </div>
          <br />
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
				    <label for="location">Location: </label>
            <input type="text" id="location" name="location" placeholder="" />
            </div>
          </div><br />
          <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <label for="job type">Job type: </label>
          <i class="fas fa-user"></i>
          <select>
              <option value="">Part Time</option>
              <option value="">Full Time</option>
              <option value="">Internship</option>
					    <option value="">Temporary</option>
            <br/></select>
          <br /></div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"><br />
            <button type="submit" class="btn btn-primary btn-lg btn-block text-white btn-search"><span class="icon-search icon mr-2"></span><Link to="/job" >Search Job</Link></button>

        </div>
      </form>
</div>
    <br />
    <section>
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
          <section>
            <div class="main-content">
            <div class="container">
              <div class="content">
                <div class="left-side">
                  <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic">Address</div>
                    <div class="text-one">Surkhet, NP12</div>
                    <div class="text-two">Birendranagar 06</div>
                  </div>
                  <div class="phone details">
                    <i class="fas fa-phone-alt"></i>
                    <div class="topic">Phone</div>
                    <div class="text-one">+0098 9893 5647</div>
                    <div class="text-two">+0096 3434 5678</div>
                  </div>
                  <div class="email details">
                    <i class="fas fa-envelope"></i>
                    <div class="topic">Email</div>
                    <div class="text-one">codinglab@gmail.com</div>
                    <div class="text-two">info.codinglab@gmail.com</div>
                  </div>
                </div>
                <div class="right-side"><br /><br />
                  <div class="topic-text">Contact Us</div><br />
                  <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p><br />
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div class="input-box">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box message-box">
                    <input type="text" placeholder="Enter your message" />
                  </div>
                  <div class="button">
                    <input type="button" value="Send Now" />
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
          </section>     
  </div>
	          
  )
}

export default Header;




