import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const SimilarProfileContent = () => {
  return (
    <AlertBox title="Similar Profile Email">
    <div className="mb-3">
      <label className="form-label">Email Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert6"
          id="biweekly6"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="biweekly6">
          Bi-Weekly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert6"
          id="unsubscribe6"
        />
        <label className="form-check-label" htmlFor="unsubscribe6">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default SimilarProfileContent
