import React from "react";
import logo from "../assets/3.png"
import './login.css'
export default function Footer() {

  return (
    <div className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Full logo" className="footer__logo logo" />
            </div>
            <div className="row footer-bottom">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <div><li className="footer_item">Company</li></div>
                            <div><li className="footer_item">Contact us</li></div>
                            <div><li className="footer_item">Privacy policy</li></div>
                            <div><li className="footer_item">Terms</li></div>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by Agaricus Systems Pvt. Ltd
                        Copyright &copy; by AGARICUS
                    </p>
                </div>
            </div>
        </div>
  );
}

        