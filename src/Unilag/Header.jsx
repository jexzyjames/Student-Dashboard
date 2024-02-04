import React, { useState } from "react";
import logo from "../unilag.png";
import "./Home.css";
import james from '../james.HEIC'
function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="titles">
      <div className="logos">
        <img className="unilag" src={logo} alt="" />
        <h1>UNIVERSITY OF LAGOS</h1>
      </div>
      <div className="logos small">
        <img className="unilag" src={logo} alt="" />
        <h1>UNILAG</h1>
      </div>
      <div className="profile">
        <img onClick={() => setShow(!show)} className="oval" src={james} alt="" />

        <h4>James</h4>
      </div>
      {show ? (
        <div className={show? 'logs smooth': "logs"}>
          <div className="matric">
            <img className="big" src={james} alt="" />
            <h1>Mr JEGEDE JAMES AYO</h1>
            <p id="matricno">(180311074)</p>
          </div>
          <ul>
            <li>Change Password</li>
            <li>News & Updates</li>
            <li>Logout</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
