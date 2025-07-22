import React from 'react'
import config from '../../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAge } from '../../../../utils/helpers';

const Profile = () => {
  const { userInfo, token } = useSelector(state => state.user);

  return (
    <div>
      <div className="profile-name">
        <h4>
          {userInfo.first_name} {userInfo.last_name} <small className="text-muted">(SH19430033)</small>
        </h4>
      </div>
      <div className="border p-4 bg-white mt-3">
        <div className="row g-4">
          <div className="col-md-3 col-lg-2">
            <div className="upload-box text-center d-flex flex-column justify-content-center align-items-center rounded">
              {userInfo?.profile_image ? (<label
                htmlFor="fileUpload"
                className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <img className="w-100 h-100 object-fit-cover" src={userInfo?.profile_image ?`${config.baseURL}/uploads/profiles/${userInfo.profile_image}`:"images/camera.png"}  />
              </label>):(<label
                htmlFor="fileUpload"
                className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <p>
                  <span className="click-here">Click here</span>
                  <br />
                  to upload
                </p>
                <img src={"images/camera.png"}  />
                <strong className="d-block mt-2">Photo</strong>
              </label>)}
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
                      <td>: {calculateAge(userInfo.birth_year, userInfo.birth_month, userInfo.birth_day)}/{userInfo.height}</td>
                    </tr>
                    <tr>
                      <td>Marital Status</td>
                      <td>: {userInfo.marital_status}</td>
                    </tr>
                    <tr>
                      <td>Posted By</td>
                      <td>: {userInfo.person}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
                <table className="table table-borderless table-sm mini-data mb-0">
                  <tbody>
                    <tr>
                      <td>Religion Community</td>
                      <td>: {userInfo.religion}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>: {userInfo.city}</td>
                    </tr>
                    <tr>
                      <td>Mother Tongue</td>
                      <td>: ------ </td>
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
