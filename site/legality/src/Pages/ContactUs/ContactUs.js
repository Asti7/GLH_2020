import React, { Component } from "react";
import style from "./ContactUs.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class ContactUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["contact-us-page-main-div"]}>
          <div className={style["contact-us-page-mind-image"]}>
            <div className={style["contact-us-page-main-heading"]}>
              Contact Us
            </div>
            <div className={style["contact-us-details-div"]}>
              <div className={style["map-div"]}>
                <img src={require("../../Assets/Images/map.png")} alt="" />
              </div>
              <div className={style["location-details-div"]}>
                <div className={style["heading"]}>Contact Details</div>
                <div className={style["address"]}>
                <strong>Address:</strong> 8 Whiteman St, Southbank VIC
                </div>
                <div className={style["Phone-number"]}>
                  <strong>Phone Number:</strong>   (+61) 0470245599
                </div>
                <div className={style["fax-number"]}>
                  <strong>Fax Number:</strong> XXXXXXXXXXX
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

export default ContactUsPage;
