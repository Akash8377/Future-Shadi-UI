import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const ShadiSpecialsContent = () => {
  return (
    <AlertBox title="Shadi Specials">
    <div className="mb-3">
      <label className="form-label">Newsletter</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="newsletterAlert"
          id="occasionally10"
        />
        <label className="form-check-label" htmlFor="occasionally10">
          Occasionally - Not more than twice a month
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="newsletterAlert"
          id="unsubscribe10"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="unsubscribe10">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default ShadiSpecialsContent
