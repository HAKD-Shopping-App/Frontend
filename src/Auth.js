
import React, { useState } from "react"
import Navbar from "./component/Navbar";
import axios from "axios";

import { json, Link } from "react-router-dom";


// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  let [uEmail, setUEmail] = useState('');
  let [uPassword, setPassword] = useState('');
  let [fName, setFName] = useState('');

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const signUp = () => {
    axios.post('http://localhost:5000/userSignup', { email: uEmail, password: uPassword, fullName: fName }).then(console.log('fck'))
  }

  const signIn = () => {
    axios.post('http://localhost:5000/userLogin', JSON.stringify({ email: uEmail, password: uPassword }))
      .then((token) => { if (token) { window.location.href = "./Advertise" } })


  }

  if (authMode === "signin") {
    return (
      <div>
        <Navbar />
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"

                  onChange={e => setUEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"

                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={signIn}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"

                onChange={e => setFName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"

                onChange={e => setUEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"

                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={signUp}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
