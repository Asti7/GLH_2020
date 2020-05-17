import React, { Component } from "react";
import style from "./LoginPage.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const underlineStyling = `linear-gradient(0deg, black 2px, rgba(0, 150, 136, 0) 0),
        linear-gradient(0deg, rgba(0, 0, 0, 0.26) 1px, transparent 0)`;
    return (
      <>
        {/* Modal */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Success
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                You have successfully logged in / signed up for the website.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <Header />
        <div className={style["login-page-main-div"]}>
          <div className={style["login-box"]}>
            <div className={style["login-box-main-heading"]}>
              <img
                src={require("../../Assets/Images/Logo.png")}
                className={style["login-box-logo"]}
              />
            </div>
            <div className={style["login-box-login-options"]}>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <span className={style["email-title"]}>EMAIL</span>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        margin: "0 1rem",
                        backgroundImage: `${underlineStyling}`,
                      }}
                    />
                  </div>
                  <span className={style["password-title"]}>PASSWORD</span>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        margin: "0 1rem",
                        backgroundImage: `${underlineStyling}`,
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    id={style["login-button"]}
                    class="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    LOGIN
                  </button>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <span className={style["name-title"]}>NAME</span>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        margin: "0 1rem",
                        backgroundImage: `${underlineStyling}`,
                      }}
                    />
                  </div>
                  <span className={style["email-secondary-title"]}>EMAIL</span>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        margin: "0 1rem",
                        backgroundImage: `${underlineStyling}`,
                      }}
                    />
                  </div>
                  <span className={style["password-secondary-title"]}>
                    PASSWORD
                  </span>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        margin: "0 1rem",
                        backgroundImage: `${underlineStyling}`,
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    id={style["sign-up-button"]}
                    class="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LoginPage;
