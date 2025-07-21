import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="profile-name">
        <h4>
          Akash Choudhary <small className="text-muted">(SH19430033)</small>
        </h4>
      </div>
      <div className="border p-4 bg-white mt-3">
        <div className="row g-4">
          <div className="col-md-3 col-lg-2">
            <div className="upload-box text-center d-flex flex-column justify-content-center align-items-center rounded">
              <label
                for="fileUpload"
                className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <p>
                  <span className="click-here">Click here</span>
                  <br />
                  to upload
                </p>
                <img src="images/camera.png" />
                <strong className="d-block mt-2">Photo</strong>
              </label>
              <input type="file" id="fileUpload" className="d-none" />
            </div>
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="row py-3">
              <div className="col-md-6 pe-md-4">
                <table className="table table-borderless table-sm mini-data mb-0 ">
                  <tbody>
                    <tr>
                      <td>Age/Height</td>
                      <td>: 25/5'11</td>
                    </tr>
                    <tr>
                      <td>Marital Status</td>
                      <td>: Never Married</td>
                    </tr>
                    <tr>
                      <td>Posted By</td>
                      <td>: Self</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
                <table className="table table-borderless table-sm mini-data mb-0">
                  <tbody>
                    <tr>
                      <td>Religion Community</td>
                      <td>: Hindu/Jat</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>: Faridabad</td>
                    </tr>
                    <tr>
                      <td>Mother Tongue</td>
                      <td>: Hindi </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-light p-3 rounded small">
              <div className="profile-management">
                <h4>
                  <strong>Manage your Profile</strong>
                </h4>
                <div className="profile-edit-list">
                  <div className="row mt-2">
                    <div className="col-6 col-md-4">
                      <a href="#">Edit Personal Profile</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">View Profile Stats</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">Set Contact Filters</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">Edit Partner Profile</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">Add Photos</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">Hide / Delete Profile</a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="#">Edit Contact Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
