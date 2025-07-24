import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const ShortlistedContent = () => {
  return (
     <AlertBox title="Members Who Shortlisted Your Email">
    <div className="mb-3">
      <label className="form-label">Email Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert4"
          id="weekly4"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="weekly4">
          Weekly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert4"
          id="unsubscribe4"
        />
        <label className="form-check-label" htmlFor="unsubscribe4">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default ShortlistedContent
