import React from 'react'
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <main>
    <link rel="stylesheet" href="style.css" />
    <section class="login-form">
      <form id="login" class="form">
          <h1>Create Account</h1>
          <div class="form-group">
              <label for="signupUsername">Username</label>
              <input type="text" id="signupUsername" class="form__input" required />
              <div class="form__input-error-message"></div>
          </div>
          <div class="form-group">
              <label for="signupMailId">Email</label>
              <input type="text" id="signupMailId" class="form__input" required />
              <div class="form__input-error-message"></div>
          </div>
          <div class="form-group">
              <label for="signupPassword">Create Password</label>
              <input type="password" id="signupPassword" class="form__input" required />
              <div class="form__input-error-message"></div>
          </div>
          <div class="form-group">
              <label for="signupPassword">Confirm Password</label>
              <input type="password" id="signupPassword" class="form__input" required />
              <div class="form__input-error-message"></div>
          </div>
          <button type="submit" class="btn">Create Account</button>
          <p class="info-content">
              Already have an account? <Link to="/login">Sign in</Link>
          </p>
      </form>
  </section>
  </main>
    </div>
  )
}

export default Register