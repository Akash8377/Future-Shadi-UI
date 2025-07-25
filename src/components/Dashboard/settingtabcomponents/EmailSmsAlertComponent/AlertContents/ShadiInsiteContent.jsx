import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const ShadiInsiteContent = () => {
  return (
     <AlertBox title="Shadi Insite">
    <div className="mb-3">
      <label className="form-label">Insite Updates</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="insiteAlert"
          id="monthly11"
        />
        <label className="form-check-label" htmlFor="monthly11">
          Monthly
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="insiteAlert"
          id="unsubscribe11"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="unsubscribe11">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default ShadiInsiteContent
