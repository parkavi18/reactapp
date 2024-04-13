import React from 'react'
import { Link } from 'react-router-dom'

const Postjob = () => {
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
      <form method="post" class="pages">
        <div class="row mb-5">
        <div class="mb-5 text-center">
        <h1 class="text-white font-weight-bold">JOB POST</h1>
        </div>
        </div>
      </form>
      </div>
    <div class="postjob-form">
                <label for="company-website-tw d-block">Upload Image </label> 
                <button class="btn btn-primary btn-md btn-file">
                  Browse File<input type="file" hidden />
                </button>
              </div>

              <div class="postjob-form">
                <label for="email">Email  </label>
                <input type="text" class="form-control" id="email" placeholder="you@yourdomain.com" />
              </div>
              
              <div class="postjob-form">
                <label for="job-title">Job Title  </label>
                <input type="text" class="form-control" id="job-title" placeholder="Product Designer" />
              </div>
              
              <div class="postjob-form">
                <label for="job-location">Location  </label>
                <input type="text" class="form-control" id="job-location" placeholder="e.g. New York" />
              </div>
              
              <div class="postjob-form">
                <label for="job-type">Job Type  </label>
                <select class="selectpicker border rounded" id="job-type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Job Type">
                  <option>Part Time</option>
                  <option>Full Time</option>
                </select>
              </div>
              
              <div class="postjob-form">
                <label for="job-description">Job Description </label><br />
                  <input type="text" class="editor" id="editor-2" />
              </div>
              <h3 class="postjob-form">Company Details</h3>
              <div class="postjob-form">
                <label for="company-name">Company Name</label>
                <input type="text" class="form-control" id="company-name" placeholder="e.g. New York" />
              </div>
              
              <div class="postjob-form">
                <label for="job-description"> Company Description </label><br />
                <input type="text" class="editor" id="editor-2" />
              </div>
              
              <div class="postjob-form">
                <label for="company-website">Website :</label>
                <input type="text" class="form-control" id="company-website" placeholder="https://" />
              </div>
              
              <div class="postjob-form">
                <label for="company-website-fb">Facebook Username  </label>
                <input type="text" class="form-control" id="company-website-fb" placeholder="companyname" />
              </div>
              
              <div class="postjob-form">
                <label for="company-website-tw">Twitter Username  </label>
                <input type="text" class="form-control" id="company-website-tw" placeholder="@companyname" />
              </div>
              
              <div class="postjob-form">
                <label for="company-website-tw">Linkedin Username  </label>
                <input type="text" class="form-control" id="company-website-tw" placeholder="companyname" />
              </div>
              
              <div class="postjob-form">
              <Link to="/home"><button class="btn btn-primary btn-md btn-file" > postjob </button></Link>
              </div>
    </div>
  )
}

export default Postjob