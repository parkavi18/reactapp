import React from 'react'
import {Link} from 'react-router-dom';

const Contact = () => {
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
        <h1 class="text-white font-weight-bold">CONTACT</h1>
        </div>
        </div>
      </form>
      </div>
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

export default Contact;