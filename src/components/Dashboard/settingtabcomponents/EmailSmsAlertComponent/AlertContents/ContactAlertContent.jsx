import React from 'react'
import AlertBox from '../AlertBox';
import FormButtons from '../FormButtons';

const ContactAlertContent = () => {
  return (
    <AlertBox title="Contact Alert Email">
    <div className="mb-3">
      <label className="form-label">Email Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert7"
          id="instant7"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="instant7">
          Instant - A mail For every Response
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert7"
          id="daily7"
        />
        <label className="form-check-label" htmlFor="daily7">
          Daily - A Digest off all responses recieved in a day
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert7"
          id="unsubscribe7"
        />
        <label className="form-check-label" htmlFor="unsubscribe7">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default ContactAlertContent
