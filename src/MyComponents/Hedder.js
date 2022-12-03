import React from 'react'
// import { Outlet, Link } from "react-router-dom";

export default function Hedder() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: "#4f1f2f" }}>
        <div className="container">
          <a className="navbar-brand" href=""><img src='https://static.momspresso.com/mymo/mymo-logo2.jpg'></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Brands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Already Registered</a>
              </li>
            </ul>
            <button className='navbar-btn'>Get your card</button>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  )
}
