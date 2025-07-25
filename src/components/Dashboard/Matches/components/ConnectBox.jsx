import React from "react";
import check from "../../../assets/checked.png";

const ConnectBox = ({ handleConnectClick }) => (
  <div class="text-center" id="connectBox">
    <div class="small text-muted mb-2">Like this profile?</div>
    <img src={check} alt="Check" class="mb-2" style={{ width: "40px" }} />
    <div>
      <button class="btn btn-outline-success btn-sm" id="connectBtn">
        Connect Now
      </button>
    </div>
  </div>
);

export default ConnectBox;
