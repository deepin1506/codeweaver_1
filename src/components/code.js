import { RiStarFill, RiCalendarLine, RiFileCopy2Line } from "react-icons/ri";
import Logo from "../assets/img/logo.svg";
import Profile from "../assets/img/profile.png";
function removeClass() {
  const element = document.getElementById("sidebar");
  element.classList.remove("close");
}
const CodePage = () => {
  return (
    <>
      {/* <!-- Sidebar STart --> */}
      <nav id="sidebar" className="sidebar">
        <header>
          <div className="side-brand">
            {/* <!-- logo  --> */}
            <a href="code" className="image">
              <img src={Logo} className="logo" alt="logo" />
            </a>
            <button onClick={removeClass} className="ctoggle">
              <i className="ri-close-line "></i>
            </button>
          </div>
        </header>
        {/* <!-- menu-bar --> */}
        <div className="menu-bar">
          <div id="sidebar-menu" className="menu">
            <ul className="menu-links">
              {/* <!-- Code lab --> */}
              <li className="nav-link active">
                <a href="code">
                  <span className="text nav-text">Code lab</span>
                </a>
              </li>
              {/* <!-- Generate Code  --> */}
              <li className="nav-link">
                <a href="generate_code">
                  <span className="text nav-text">Generate Code </span>
                </a>
              </li>
              {/* <!-- bug detector --> */}
              <li className="nav-link">
                <a href="#">
                  <span className="text nav-text">bug detector</span>
                </a>
              </li>
              {/* <!-- refactor --> */}
              <li className="nav-link">
                <a href="#">
                  <span className="text nav-text">refactor</span>
                </a>
              </li>
              {/* <!-- explainer --> */}
              <li className="nav-link">
                <a href="#">
                  <span className="text nav-text">explainer</span>
                </a>
              </li>
              {/* <!-- logout --> */}
              <li className="nav-link">
                <a href="/">
                  <span className="text nav-text">logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Sidebar END --> */}

      {/* <!-- page-layout Start --> */}
      <section className="page-layout">
        {/* <!-- header Start --> */}
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="nav-main">
                <div className="top_left_content">
                  <i className="ri-indent-decrease toggle"></i>
                  <div className="page-title">
                    <h2>Generated Code</h2>
                  </div>
                </div>
                <div className="top_right_content">
                  <div className="dropdown profile-dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton1"
                    >
                      <img src={Profile} alt="" />
                      John
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- <div className="container"> */}
            {/* </div> --> */}
          </nav>
        </header>
        {/* <!-- header END --> */}
        {/* <!-- main-content start  --> */}
        <div className="main-content">
          {/* <!-- main-page-title Row END --> */}
          <div className="card no-padding-card grey-card">
            <div className="card-header">
              <h3 className="card-title text-success">recent created code</h3>
            </div>
            <div className="card-body">
              <div className="g-4 row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4">
                {/* <!-- loop start  --> */}
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                {/* <!-- loop END  --> */}
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main-page-title Row  --> */}
          <div className="row">
            <div className="col-12">
              {/* <!-- main-page-title --> */}
              <div className="main-page-title">
                <h2 className="title">generated code</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="g-4 row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4">
                {/* <!-- loop start  --> */}
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                {/* <!-- loop END  --> */}
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Q-learning</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Deep Q Network</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col">
                  {/* <!-- code-wrap --> */}
                  <a href="generate_code" className="code-wrap">
                    {/* <!-- code-head --> */}
                    <div className="code-head">
                      <div className="code-info">
                        <h5>Q-learning</h5>
                        <span className="badge bg-light-success">
                          starred: 8
                        </span>
                      </div>
                      {/* <!-- star --> */}
                      <div className="star">
                        <i className="ri ri-star-fill">
                          <RiStarFill />
                        </i>
                      </div>
                    </div>
                    <div className="code-footer">
                      <ul>
                        <li>
                          <i className="ri ri-calendar-line">
                            <RiCalendarLine />
                          </i>
                          <span>25th Nov 23</span>
                        </li>
                        <li>
                          <i className="ri ri-file-copy-2-line">
                            <RiFileCopy2Line />
                          </i>
                          <span>Copy 8</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- main-content END --> */}
      </section>
      {/* <!-- page-layout END --> */}
    </>
  );
};

export default CodePage;
