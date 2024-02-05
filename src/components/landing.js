import Logo from "../assets/img/logo.svg";
import Banner from "../assets/img/banner.svg";
import "../assets/css/shortcode.css";
import "../assets/css/styles.css";
// import "../assets/css/responsive.css";

// import BannerShape1 from "../assets/img/icon/svg/shape01.svg";
const LandingPage = () => {
  return (
    <>
      <div className="main-page landing-page">
        {/* <!-- header Start --> */}
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <div className="nav-main">
                {/* <a className="navbar-brand" href="#"> */}
                <img src={Logo} alt="logo" />
                {/* </a> */}
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
                        // value=""
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
                        // value=""
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
                      <a href="code" className="btn btn-mcolor login-btn">
                        Log in
                      </a>
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
