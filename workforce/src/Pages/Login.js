import React from 'react'
import {Link} from 'react-router-dom';

const Login = () => {

    return (
      <div>
          <section class="login-form">
          <form id="login" class="form">
              <h1>Login</h1>
              <div class="form-group">
                  <label for="loginUsername">Username</label>
                  <i class="fas fa-user"></i>
                  <input type="text" id="loginUsername" class="form__input" required />
                  <div class="form__input-error-message"></div>
              </div>
              <div class="form-group">
                  <label for="loginPassword">Password</label>
                  <i class="fas fa-lock"></i> 
                  <input type="password" id="loginPassword" class="form__input" required />
                  <div class="form__input-error-message"></div>
              </div>
              <button type="submit" class="btn">Login</button>
              <p class="info-content">
                  Don't have an account? <Link to="/register">Create New Account</Link>
              </p>
          </form>
          <form id="createAccount" class="form form--hidden">
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
      </div>
    )
  }
  
  
  export default Login;