import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import style from "./ForumPage.module.scss";

class ForumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["forum-page-main-div"]}>
          <div className={style["forum-page-heading"]}>Forum</div>
          <div className={style["create-post-div"]}>
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Create Post"
                id={style["create-post-field"]}
              ></input>
            </div>
            <div className={style["create-post-button-div"]}>
              <button
                type="button"
                id={style["create-post-div-button"]}
                className="btn btn-outline-dark"
              >
                Create
              </button>
              <button
                type="button"
                id={style["create-post-div-button"]}
                className="btn btn-outline-dark"
              >
                Upload
              </button>
              <button
                type="button"
                id={style["create-post-div-button"]}
                className="btn btn-outline-dark"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className={style["list-post-div"]}>
            {/* Single Post */}
            <div className={style["single-post-selector"]}>
              <div className={style["post-poster-div"]}>
                <i id={style["poster-image"]} className="fas fa-user-circle"></i>
                <span className={style["poster-name"]}>Anmol Sarraf</span>
              </div>
              <div className={style["post-content-div"]}>
                <div className={style["post-question"]}>
                  <i
                    id={style["post-question-bullet-point"]}
                    className="fas fa-circle"
                  ></i>
                  <span className={style["question"]}>
                    My employer fired me without giving me any advance notice ?
                  </span>
                </div>
                <div className={style["post-text-div"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className={style["comment-section"]}>
                  <div className={style["create-comment-section"]}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Add Comment"
                        id={style["add-comment-field"]}
                      />
                      <button
                        id={style["add-comment-button"]}
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                  <div className={style["list-comments-div"]}>
                    <div className={style["list-comment-heading"]}>
                      Comments
                    </div>
                    {/* Single Comment */}
                    <div className={style["single-comment"]}>
                      <div className={style["commenter-info"]}>
                        <i
                          id={style["commenter-image"]}
                          className="fas fa-user-circle"
                        ></i>
                        <span className={style["commenter-name"]}>
                          Harvey Copper
                        </span>
                      </div>
                      <div className={style["comment-content"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      <div className={style["comment-option-button"]}>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Report
                        </button>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                    {/* Single Comment */}
                    {/* Single Comment */}
                    <div className={style["single-comment"]}>
                      <div className={style["commenter-info"]}>
                        <i
                          id={style["commenter-image"]}
                          className="fas fa-user-circle"
                        ></i>
                        <span className={style["commenter-name"]}>
                          Aman Sharma
                        </span>
                      </div>
                      <div className={style["comment-content"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      <div className={style["comment-option-button"]}>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Report
                        </button>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                    {/* Single Comment */}
                  </div>
                </div>
              </div>
            </div>
            {/* Single Post */}
            {/* Single Post */}
            <div className={style["single-post-selector"]}>
              <div className={style["post-poster-div"]}>
                <i id={style["poster-image"]} className="fas fa-user-circle"></i>
                <span className={style["poster-name"]}>Jessica James</span>
              </div>
              <div className={style["post-content-div"]}>
                <div className={style["post-question"]}>
                  <i
                    id={style["post-question-bullet-point"]}
                    className="fas fa-circle"
                  ></i>
                  <span className={style["question"]}>
                    My university increased my fees without any prior notice ?
                  </span>
                </div>
                <div className={style["post-text-div"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className={style["comment-section"]}>
                  <div className={style["create-comment-section"]}>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Add Comment"
                        id={style["add-comment-field"]}
                      />
                      <button
                        id={style["add-comment-button"]}
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                  <div className={style["list-comments-div"]}>
                    <div className={style["list-comment-heading"]}>
                      Comments
                    </div>
                    {/* Single Comment */}
                    <div className={style["single-comment"]}>
                      <div className={style["commenter-info"]}>
                        <i
                          id={style["commenter-image"]}
                          className="fas fa-user-circle"
                        ></i>
                        <span className={style["commenter-name"]}>
                          Brett Lee
                        </span>
                      </div>
                      <div className={style["comment-content"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      <div className={style["comment-option-button"]}>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Report
                        </button>
                        <button
                          id={style["comment-section-button"]}
                          type="button"
                          className="btn btn-outline-dark"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                    {/* Single Comment */}
                  </div>
                </div>
              </div>
            </div>
            {/* Single Post */}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ForumPage;
