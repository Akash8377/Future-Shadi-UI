import React from "react";
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const MatchMailContent = () => (
   <AlertBox 
    title="My Alerts" 
    description="Match Mail & Photo Match Mail"
  >
    <div className="mb-3">
      <label className="form-label">Email Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert1"
          id="daily1"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="daily1">
          Daily
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert1"
          id="triweekly1"
        />
        <label className="form-check-label" htmlFor="triweekly1">
          Tri-Weekly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert1"
          id="weekly1"
        />
        <label className="form-check-label" htmlFor="weekly1">
          Weekly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert1"
          id="unsubscribe1"
        />
        <label className="form-check-label" htmlFor="unsubscribe1">
          Unsubscribe
        </label>
      </div>
    </div>

    <div className="form-check mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="broaderMatches"
        defaultChecked
      />
      <label className="form-check-label" htmlFor="broaderMatches">
        Send me Broader Matches if there are no new Preferred Matches
      </label>
    </div>
    <FormButtons />
  </AlertBox>
);

export default MatchMailContent;