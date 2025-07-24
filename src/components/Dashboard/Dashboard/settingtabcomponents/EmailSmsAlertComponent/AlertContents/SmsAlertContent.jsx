import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const SmsAlertContent = () => {
  return (
     <AlertBox title="SMS Alert">
    <div className="mb-3">
      <label className="form-label">SMS Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="smsAlert1"
          id="invitations"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="invitations">
          For every invitations received
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          name="smsAlert1"
          id="acceptInvitations"
        />
        <label className="form-check-label" htmlFor="acceptInvitations">
          For every accept invitations received
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default SmsAlertContent
