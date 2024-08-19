import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Logo from "../assets/img/logo.svg";
import Profile from "../assets/img/profile.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const GeneratePage = () => {
  function removeClass() {
    const element = document.getElementById("sidebar");
    element.classList.remove("close");
  }

  const [userInput, setUserInput] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        "What you want your business rule to do?  Please mention tone of code, any attribute or contraints that you want it  to consider.",
      isUser: false,
    },
  ]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("user_input", userInput);
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { message: userInput, isUser: true },
    ]);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    setIsLoader(true);
    await fetch("http://13.126.43.149/back/api/chat", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setUserInput("");
        let res = JSON.parse(result);
        setIsLoader(false);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { message: res.assistant_reply, isUser: false },
        ]);
      })
      .catch((error) => console.log("error", error));
  };
  const handleKeyPress = (event) => {
    // Check if the key is 'Enter'
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {/* <!-- Sidebar STart --> */}
      <nav id="sidebar" className="sidebar">
        <header>
          <div className="side-brand">
            {/* <!-- logo  --> */}
            <Link to="/code" className="image">
              <img src={Logo} className="logo" alt="logo" />
            </Link>
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
              <li className="nav-link ">
                <Link to="/code">
                  <span className="text nav-text">Code lab</span>
                </Link>
              </li>
              {/* <!-- Generate Code  --> */}
              <li className="nav-link active">
                <Link to="/generate_code">
                  <span className="text nav-text">Generate Code </span>
                </Link>
              </li>
              {/* <!-- bug detector --> */}
              <li className="nav-link">
                <Link to="#">
                  <span className="text nav-text">bug detector</span>
                </Link>
              </li>
              {/* <!-- refactor --> */}
              <li className="nav-link">
                <Link to="#">
                  <span className="text nav-text">refactor</span>
                </Link>
              </li>
              {/* <!-- explainer --> */}
              <li className="nav-link">
                <Link to="#">
                  <span className="text nav-text">explainer</span>
                </Link>
              </li>
              {/* <!-- logout --> */}
              <li className="nav-link">
                <Link to="/">
                  <span className="text nav-text">logout</span>
                </Link>
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
                        <Link className="dropdown-item" to="#">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Logout
                        </Link>
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
          {/* <!-- main-page-title Row  --> */}
          <div className="row">
            <div className="col-12">
              {/* <!-- chat-wrapper Start  --> */}
              <div className="chat-wrapper">
                <div className="usertalk-wrapper">
                  {chatMessages.map(({ message, isUser }, index) => (
                    <div key={index}>
                      {isUser ? (
                        <div className="usertalk-inner reply-inner">
                          <div className="userleft-msg">
                            <span>{message}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="usertalk-inner ">
                          <div className="userleft-msg">
                            <span>{message}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoader && (
                    <div className="usertalk-inner ">
                      <div className="userleft-msg">
                        <span>
                          <div className="typing">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                          </div>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="chattype-wrapper">
                    <div className="typeinput-wrapper">
                      <div className="input-main-input order-md-1 ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type"
                          value={userInput}
                          onChange={handleUserInput}
                        />
                      </div>
                      <div className="chatsend-btn order-md-2">
                        <Link type="submit">
                          <i>
                            <RiSendPlaneFill />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* <!-- chat-wrapper END  --> */}
            </div>
          </div>
        </div>
        {/* <!-- main-content END --> */}
      </section>
      {/* <!-- page-layout END --> */}
      {/*  */}
    </>
  );
};

export default GeneratePage;
