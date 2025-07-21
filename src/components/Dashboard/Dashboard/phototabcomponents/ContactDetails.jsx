import React from 'react'

const ContactDetails = () => {
  return (
    <div>
      <div className="section-title ">
        {" "}
        Contact Details{" "}
        <a href="#" className="small float-end">
          Edit
        </a>
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Mobile</td>
                <td>: +919223456745</td>
              </tr>
              <tr>
                <td>Display Options</td>
                <td>: Only Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6 pe-md-4"></div>
      </div>
      <div className="text-end mt-0">
        <button className="btn btn-link back-to-top">
          {" "}
          Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default ContactDetails
