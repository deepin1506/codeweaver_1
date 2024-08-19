import React from "react";
import Logo from "../assets/img/logo.svg";
import Banner from "../assets/img/banner.svg";
import "../assets/css/shortcode.css";
import "../assets/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../assets/css/responsive.css";

// import BannerShape1 from "../assets/img/icon/svg/shape01.svg";
const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="main-page landing-page">
        {/* <!-- header Start --> */}
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <div className="nav-main">
                {/* <Link className="navbar-brand" to="#"> */}
                <img src={Logo} alt="logo" />
                {/* </Link> */}
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- header END --> */}
        {/* <!-- banner-section-Start --> */}
        <section className="banner-section full-height-section">
          {/* <img
            src={BannerShape1}
            className="banner-shape shape_one"
            alt="svg/shape01"
          /> */}
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-10 col-12 mx-auto order-lg-2">
                {/* <!-- banner-img --> */}
                <div className="banner-img text-center text-md-end">
                  <img
                    src={Banner}
                    alt="banner-img"
                    className="responsive-img"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-md-10 col-xxl-6 col-lg-6 mx-auto">
                {/* <!-- banner-content --> */}
                <div className="banner-content text-center text-lg-start">
                  {/* <!-- banner Title --> */}
                  <h2>
                    Empower Your Projects, Ignite Your Code : Unleash the Future
                    with <span>CodeGenerator.</span>{" "}
                  </h2>
                  {/* <!-- banner Desc --> */}
                  <p>
                    Ready to experience the future of coding? Sign up for a free
                    trial or explore our feature-packed plans to elevate your
                    development game with <span>CodeGenerator</span>. Welcome to
                    a new era of coding excellence!
                  </p>
                </div>
                <div className="login-form">
                  <form>
                    {/* <!-- Email id --> */}
                    <div className="form-group mail-input">
                      <input
                        type="text"
                        name=""
                        value={email}
                        onChange={handleEmail}
                        placeholder="Email id"
                        className="form-control"
                        required=""
                      />
                      <span className="input-icon">
                        <i className="ri-mail-line"></i>
                      </span>
                    </div>
                    {/* <!-- password --> */}
                    <div className="form-group">
                      <input
                        type="text"
                        name=""
                        value={password}
                        onChange={handlePassword}
                        placeholder="Password"
                        className="form-control"
                        required=""
                      />
                      <span className="input-icon">
                        <i className="ri-lock-line"></i>
                      </span>
                    </div>
                    <div className="">
                      {/* <!-- Button  --> */}
                      <Link to="code" className="btn btn-mcolor login-btn">
                        Log in
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- banner-section-End --> */}
      </div>
    </>
  );
};

export default LandingPage;
