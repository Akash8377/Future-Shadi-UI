import React from 'react'

const PartnerPrefer = () => {
  return (
    <div>
      <div id="partnerPref" className="">
        <div className="section-title partners">Partner Preferences</div>
        <div className="section-title">
          {" "}
          Basic Info{" "}
          <a href="#" className="small float-end">
            Edit
          </a>
        </div>
        <div className="row py-3 border-top">
          <div className="col-md-6 pe-md-4">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>: 21 to 26</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>: 5'0</td>
                </tr>
                <tr>
                  <td>Religion Community</td>
                  <td>: Jat</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Mother Tongue</td>
                  <td>: Hindi</td>
                </tr>
                <tr>
                  <td>Marital Status</td>
                  <td>: Never Married</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="section-title">
          {" "}
          Location Details{" "}
          <a href="#" className="small float-end">
            Edit
          </a>
        </div>
        <div className="row py-3 border-top">
          <div className="col-md-6 pe-md-4">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Country Living In</td>
                  <td>: Living In India</td>
                </tr>
                <tr>
                  <td>State Living In</td>
                  <td>: Haryana</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>: Does not matter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0"></div>
        </div>

        <div className="section-title">
          {" "}
          Education Career{" "}
          <a href="#" className="small float-end">
            Edit
          </a>
        </div>
        <div className="row py-3 border-top">
          <div className="col-md-6 pe-md-4">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Education</td>
                  <td>: Does not matter</td>
                </tr>
                <tr>
                  <td>Working With</td>
                  <td>: Does not matter</td>
                </tr>
                <tr>
                  <td>Working Area</td>
                  <td>: Does not matter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Working As</td>
                  <td>: Does not matter</td>
                </tr>
                <tr>
                  <td>Annual Income</td>
                  <td>: Does not matter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="section-title">
          {" "}
          Other Details
          <a href="#" className="small float-end">
            Edit
          </a>
        </div>

        <div className="row py-3 border-top">
          <div className="col-md-6 pe-md-4">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Profile Managed By</td>
                  <td>: Does not matter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
            <table className="table table-borderless table-sm mini-data mb-0">
              <tbody>
                <tr>
                  <td>Diet</td>
                  <td>: Does not matter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-end mt-4">
        <button className="btn btn-link back-to-top">
          {" "}
          Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default PartnerPrefer
