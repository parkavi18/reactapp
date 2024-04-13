import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
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
        <h1 class="text-white font-weight-bold">ABOUT US</h1>
        </div>
        </div>
      </form>
      </div>
      <main>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <section class="about">
<div class="about-us">
<div class="box">
<div class="row">
<div class="flex">
<h2>About Us</h2>
<h3>Discover Our Team's Story</h3>
<p>We are a team of passionate individuals who are dedicated to providing high-quality products and services to our customers. Our company was founded in 2015 with the mission of making people's lives easier and more enjoyable. Since then, we have been working hard to develop innovative solutions that meet the needs of our customers.</p>
<div class="social-links">
<a href="/"><i class="fab fa-facebook"></i></a>
<a href="/"><i class="fab fa-twitter"></i></a>
<a href="/"><i class="fab fa-instagram"></i></a>
</div>
<a href="/" class="btn">Learn More</a>
</div>
<div class="about-us">
  
</div>
</div>
</div>
</div>
</section>
</main>

  </div>
  )
}

export default About;