import React from 'react'
import AlertBox from "../AlertBox";
import FormButtons from "../FormButtons";

const MessageReceivedContent = () => {
  return (
    <AlertBox title="Message Received Alert">
    <div className="mb-3">
      <label className="form-label">Email Alert</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert8"
          id="daily8"
        />
        <label className="form-check-label" htmlFor="daily8">
          Daily - A Digest off all responses recieved in a day
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="emailAlert8"
          id="unsubscribe8"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="unsubscribe8">
          Unsubscribe
        </label>
      </div>
    </div>
    <FormButtons />
  </AlertBox>
  )
}

export default MessageReceivedContent
