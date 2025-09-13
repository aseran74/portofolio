import React from 'react';
import './IronMan.css';
import './animations.css';
import './suit-animations.css';
import './flame-animations.css';

export function IronMan() {
  return (
    <div className="wrapper">
      <div className="iron-man-wrapper">
        <div className="tony-stark">
          <img src="/Images/ironman-sintraje.png" alt="Tony Stark" />
        </div>

        <div className="arc-reactor">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Arc_Reactor.svg" alt="Arc Reactor" />
        </div>

        <div className="iron-man-helmet">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Helmet.svg" alt="Iron Man Helmet" />
        </div>

        <div className="iron-man-left-arm">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Left_Arm.svg" alt="Iron Man Left Arm" />
          <div className="flame-left-hand"></div>
        </div>

        <div className="iron-man-right-arm">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Right_Arm.svg" alt="Iron Man Right Arm" />
          <div className="flame-right-hand"></div>
        </div>

        <div className="iron-man-left-leg">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Left_Leg.svg" alt="Iron Man Left Leg" />
          <div className="flame-left-leg"></div>
        </div>

        <div className="iron-man-right-leg">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Right_Leg.svg" alt="Iron Man Right Leg" />
          <div className="flame-right-leg"></div>
        </div>

        <div className="iron-man-chest">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/651105/Iron_Man_Chest.svg" alt="Iron Man Chest" />
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
