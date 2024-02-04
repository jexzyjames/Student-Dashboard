import React from "react";
import "./Home.css";

function Aside() {
  return (
    <div className="aside">
      <div className="news">
        <div className="drop">
          <h3>Complete your course registration</h3>
          <h4>18 days left</h4>
          <hr className="lines" />
        </div>
        <div className="drop">
          <h3>Complete your payment</h3>
          <h4>8 days left</h4>
          <hr className="lines" />
        </div>
        <div className="drop">
          <h3>Edit your course registration</h3>
          <h4>48 days left</h4>
          <hr className="lines" />
        </div>
        <h4 className="nonewinfo">There is no new info</h4>
      </div>
    </div>
  );
}

export default Aside;
