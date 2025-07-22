import React from 'react'
import { calculateAge } from '../../../../utils/helpers'
import { useDispatch, useSelector } from 'react-redux';
import { scrollToTop } from '../../../../utils/helpers';

const AboutMyself = ({ isEditing, onEditClick, onSaveClick, onDataChange, updatedData }) => {
  const { userInfo, token } = useSelector(state => state.user);
  const familyDetails = JSON.parse(userInfo.family_details || '{}');
  const financialStatus = JSON.parse(userInfo.financial_status || '{}');
  const hobbies = userInfo?.hobbies ? JSON.parse(userInfo.hobbies) : [];
  
  const getValue = (field) => {
    return updatedData[field] !== undefined ? updatedData[field] : userInfo[field];
  };

  const getFamilyValue = (field) => {
    return updatedData[field] !== undefined ? updatedData[field] : familyDetails[field];
  };

  const getFinancialValue = (field) => {
    return updatedData[field] !== undefined ? updatedData[field] : financialStatus[field];
  };

  const handleHobbiesChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map(option => option.value);
    onDataChange('hobbies', options);
  };

  return (
    <div>
      <div className="section-title">
        Basics & Lifestyle{" "}
        {isEditing ? (
          <a onClick={onSaveClick} className="small float-end cursor-pointer">
            Save
          </a>
        ) : (
          <a onClick={onEditClick} className="small float-end cursor-pointer">
            Edit
          </a>
        )}
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Age</td>
                <td>: {calculateAge(
                  getValue('birth_year'), 
                  getValue('birth_month'), 
                  getValue('birth_day')
                )}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>: {isEditing ? (
                  <div className="d-inline-flex gap-1">
                    <input 
                      type="text" 
                      value={getValue('birth_day') || ''} 
                      onChange={(e) => onDataChange('birth_day', e.target.value)}
                      className="form-control form-control-sm w-50"
                      placeholder="Day"
                    />
                    <input 
                      type="text" 
                      value={getValue('birth_month') || ''} 
                      onChange={(e) => onDataChange('birth_month', e.target.value)}
                      className="form-control form-control-sm w-50"
                      placeholder="Month"
                    />
                    <input 
                      type="text" 
                      value={getValue('birth_year') || ''} 
                      onChange={(e) => onDataChange('birth_year', e.target.value)}
                      className="form-control form-control-sm w-75"
                      placeholder="Year"
                    />
                  </div>
                ) : (
                  `${userInfo.birth_day}-${userInfo.birth_month}-${userInfo.birth_year}`
                )}</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('marital_status') || ''} 
                    onChange={(e) => onDataChange('marital_status', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                ) : (
                  userInfo.marital_status
                )}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('height') || ''} 
                    onChange={(e) => onDataChange('height', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.height
                )}</td>
              </tr>
              <tr>
                <td>Grow Up</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('country') || ''} 
                    onChange={(e) => onDataChange('country', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.country
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Diet</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('diet') || ''} 
                    onChange={(e) => onDataChange('diet', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Jain">Jain</option>
                    <option value="Eggetarian">Eggetarian</option>
                  </select>
                ) : (
                  userInfo.diet
                )}</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('blood_group') || ''} 
                    onChange={(e) => onDataChange('blood_group', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                ) : (
                  userInfo.blood_group || '------'
                )}</td>
              </tr>
              <tr>
                <td>Health Information</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('health_info') || ''} 
                    onChange={(e) => onDataChange('health_info', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.health_info || '------'
                )}</td>
              </tr>
              <tr>
                <td>Disability</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('disability') || ''} 
                    onChange={(e) => onDataChange('disability', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.disability || '------'
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mini-section-title">Religious Background</h6>
            {isEditing ? (
              <a onClick={onSaveClick} className="mini-edit-link text-primary cursor-pointer">
                Save&nbsp;<i className="bi bi-caret-right-fill"></i>
              </a>
            ) : (
              <a onClick={onEditClick} className="mini-edit-link text-primary cursor-pointer">
                Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
              </a>
            )}
          </div>

          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Religion</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('religion') || ''} 
                    onChange={(e) => onDataChange('religion', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  userInfo.religion
                )}</td>
              </tr>
              <tr>
                <td>Community</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('community') || ''} 
                    onChange={(e) => onDataChange('community', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.community
                )}</td>
              </tr>
              <tr>
                <td>Sub community</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('sub_community') || ''} 
                    onChange={(e) => onDataChange('sub_community', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.sub_community
                )}</td>
              </tr>
              <tr>
                <td>Gothra / Gothram</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('gothra') || ''} 
                    onChange={(e) => onDataChange('gothra', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.gothra || '------'
                )}</td>
              </tr>
              <tr>
                <td>Mother Tongue</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('mother_tongue') || ''} 
                    onChange={(e) => onDataChange('mother_tongue', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.mother_tongue || '------'
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mini-section-title">Astro Details</h6>
            {isEditing ? (
              <a onClick={onSaveClick} className="mini-edit-link text-primary cursor-pointer">
                Save&nbsp;<i className="bi bi-caret-right-fill"></i>
              </a>
            ) : (
              <a onClick={onEditClick} className="mini-edit-link text-primary cursor-pointer">
                Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
              </a>
            )}
          </div>

          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Manglik/Chevvai dosham</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('manglik') || ''} 
                    onChange={(e) => onDataChange('manglik', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Manglik">Manglik</option>
                    <option value="Non-Manglik">Non-Manglik</option>
                    <option value="Partial Manglik">Partial Manglik</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                ) : (
                  userInfo.manglik || '------'
                )}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>: {userInfo.birth_day}-{userInfo.birth_month}-{userInfo.birth_year}</td>
              </tr>
              <tr>
                <td>Time of Birth</td>
                <td>: {isEditing ? (
                  <input 
                    type="time" 
                    value={getValue('birth_time') || ''} 
                    onChange={(e) => onDataChange('birth_time', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.birth_time ? (
                    userInfo.birth_time
                  ) : (
                    <a href="#">Enter Now</a>
                  )
                )}</td>
              </tr>
              <tr>
                <td>City of Birth</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('birth_city') || ''} 
                    onChange={(e) => onDataChange('birth_city', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.birth_city ? (
                    userInfo.birth_city
                  ) : (
                    <a href="#">Enter Now</a>
                  )
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-title">
        Family Details{" "}
        {isEditing ? (
          <a onClick={onSaveClick} className="small float-end cursor-pointer">
            Save
          </a>
        ) : (
          <a onClick={onEditClick} className="small float-end cursor-pointer">
            Edit
          </a>
        )}
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Mother's Details</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getFamilyValue('mother') || ''} 
                    onChange={(e) => onDataChange('mother', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  familyDetails?.mother || '------'
                )}</td>
              </tr>
              <tr>
                <td>Father's Details</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getFamilyValue('father') || ''} 
                    onChange={(e) => onDataChange('father', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  familyDetails?.father || '------'
                )}</td>
              </tr>
              <tr>
                <td>Family Location</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('city') || ''} 
                    onChange={(e) => onDataChange('city', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  `${userInfo.city}, ${userInfo.country}`
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>No. of Sisters</td>
                <td>: {isEditing ? (
                  <input 
                    type="number" 
                    value={getFamilyValue('sisters') || 0} 
                    onChange={(e) => onDataChange('sisters', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                    min="0"
                  />
                ) : (
                  familyDetails?.sisters || '------'
                )}</td>
              </tr>
              <tr>
                <td>No. of Brothers</td>
                <td>: {isEditing ? (
                  <input 
                    type="number" 
                    value={getFamilyValue('brothers') || 0} 
                    onChange={(e) => onDataChange('brothers', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                    min="0"
                  />
                ) : (
                  familyDetails?.brothers || '------'
                )}</td>
              </tr>
              <tr>
                <td>Family Financial Status</td>
                <td>: {isEditing ? (
                  <select 
                    value={getFinancialValue('status') || ''} 
                    onChange={(e) => onDataChange('financial_status', JSON.stringify({ status: e.target.value }))}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Affluent">Affluent</option>
                    <option value="Upper Middle Class">Upper Middle Class</option>
                    <option value="Middle Class">Middle Class</option>
                    <option value="Lower Middle Class">Lower Middle Class</option>
                  </select>
                ) : (
                  financialStatus?.status || '------'
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-title">
        Education & Career{" "}
        {isEditing ? (
          <a onClick={onSaveClick} className="small float-end cursor-pointer">
            Save
          </a>
        ) : (
          <a onClick={onEditClick} className="small float-end cursor-pointer">
            Edit
          </a>
        )}
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Highest Qualification</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('education') || ''} 
                    onChange={(e) => onDataChange('education', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.education
                )}</td>
              </tr>
              <tr>
                <td>College</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('college') || ''} 
                    onChange={(e) => onDataChange('college', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.college
                )}</td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('income') || ''} 
                    onChange={(e) => onDataChange('income', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Below 1 Lakh">Below 1 Lakh</option>
                    <option value="1-2 Lakhs">1-2 Lakhs</option>
                    <option value="2-5 Lakhs">2-5 Lakhs</option>
                    <option value="5-10 Lakhs">5-10 Lakhs</option>
                    <option value="10-20 Lakhs">10-20 Lakhs</option>
                    <option value="20-50 Lakhs">20-50 Lakhs</option>
                    <option value="50 Lakhs & above">50 Lakhs & above</option>
                  </select>
                ) : (
                  userInfo.income
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Working With</td>
                <td>: {isEditing ? (
                  <select 
                    value={getValue('work_type') || ''} 
                    onChange={(e) => onDataChange('work_type', e.target.value)}
                    className="form-select form-select-sm d-inline-block w-auto"
                  >
                    <option value="">Select</option>
                    <option value="Private Company">Private Company</option>
                    <option value="Government/PSU">Government/PSU</option>
                    <option value="Defense/Civil Services">Defense/Civil Services</option>
                    <option value="Business/Self Employed">Business/Self Employed</option>
                    <option value="Not Working">Not Working</option>
                  </select>
                ) : (
                  userInfo.work_type
                )}</td>
              </tr>
              <tr>
                <td>Working as</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('profession') || ''} 
                    onChange={(e) => onDataChange('profession', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.profession
                )}</td>
              </tr>
              <tr>
                <td>Employer Name</td>
                <td>: {isEditing ? (
                  <input 
                    type="text" 
                    value={getValue('employer') || ''} 
                    onChange={(e) => onDataChange('employer', e.target.value)}
                    className="form-control form-control-sm d-inline-block w-auto"
                  />
                ) : (
                  userInfo.employer || '------'
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-title">
        Hobbies & Interests{" "}
        {isEditing ? (
          <a onClick={onSaveClick} className="small float-end cursor-pointer">
            Save
          </a>
        ) : (
          <a onClick={onEditClick} className="small float-end cursor-pointer">
            Edit
          </a>
        )}
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-12 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>
                  {isEditing ? (
                    <select 
                      multiple
                      value={updatedData.hobbies || hobbies} 
                      onChange={handleHobbiesChange}
                      className="form-select"
                    >
                      <option value="Reading">Reading</option>
                      <option value="Traveling">Traveling</option>
                      <option value="Music">Music</option>
                      <option value="Sports">Sports</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Dancing">Dancing</option>
                      <option value="Photography">Photography</option>
                      <option value="Gardening">Gardening</option>
                      <option value="Painting">Painting</option>
                      <option value="Writing">Writing</option>
                    </select>
                  ) : hobbies.length > 0 ? (
                    hobbies.join(", ")
                  ) : (
                    "Adding Hobbies & Interests <a href='#'>Add Here</a>"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row py-3 border-top"></div>
      <div className="text-end">
        <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
          Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default AboutMyself



// import React from 'react'
// import { calculateAge } from '../../../../utils/helpers'
// import { useDispatch, useSelector } from 'react-redux';
// import { scrollToTop } from '../../../../utils/helpers';

// const AboutMyself = () => {
//   const { userInfo, token } = useSelector(state => state.user);
//   const familyDetails = JSON.parse(userInfo.family_details)
//   return (
//     <div>
//       <div className="section-title">
//         Basics & Lifestyle{" "}
//         <a href="#" className="small float-end cursor-pointer">
//           Edit
//         </a>
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Age</td>
//                 <td>: {calculateAge(userInfo.birth_year, userInfo.birth_month, userInfo.birth_day)}</td>
//               </tr>
//               <tr>
//                 <td>DOB</td>
//                 <td>: {userInfo.birth_day}-{userInfo.birth_month}-{userInfo.birth_year}</td>
//               </tr>
//               <tr>
//                 <td>Marital Status</td>
//                 <td>: {userInfo.marital_status}</td>
//               </tr>
//               <tr>
//                 <td>Height</td>
//                 <td>: {userInfo.height}</td>
//               </tr>
//               <tr>
//                 <td>Grow Up</td>
//                 <td>: {userInfo.country}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Diet</td>
//                 <td>: {userInfo.diet}</td>
//               </tr>
//               <tr>
//                 <td>Blood Group</td>
//                 <td>: ------</td>
//               </tr>
//               <tr>
//                 <td>Health Information</td>
//                 <td>: ------</td>
//                 {/* <td>: Not Specified</td> */}
//               </tr>
//               <tr>
//                 <td>Disability</td>
//                 <td>: ------</td>
//                 {/* <td>: None</td> */}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h6 className="mini-section-title">Religious Background</h6>
//             <a href="#" className="mini-edit-link text-primary">
//               Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
//             </a>
//           </div>

//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Religion</td>
//                 <td>: {userInfo.religion}</td>
//               </tr>
//               <tr>
//                 <td>Community</td>
//                 <td>: {userInfo.community}</td>
//               </tr>
//               <tr>
//                 <td>Sub community</td>
//                 <td>: {userInfo.sub_community}</td>
//               </tr>
//               <tr>
//                 <td>
//                   Gothra / Gothram&nbsp;
//                   {/* <i className="bi bi-question-circle text-secondary"></i> */}
//                 </td>
//                 <td>: ------</td>
//               </tr>
//               <tr>
//                 <td>Mother Tongue</td>
//                 <td>: ------</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <div className="d-flex justify-content-between align-items-center">
//             <h6 className="mini-section-title">Astro Details</h6>
//             <a href="#" className="mini-edit-link text-primary">
//               Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
//             </a>
//           </div>

//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>
//                   Manglik/Chevvai dosham&nbsp;
//                   <i className="bi bi-question-circle text-secondary"></i>
//                 </td>
//                 <td>: ------</td>
//               </tr>
//               <tr>
//                 <td>Date of Birth</td>
//                 <td>: {userInfo.birth_day}-{userInfo.birth_month}-{userInfo.birth_year}</td>
//               </tr>
//               <tr>
//                 <td>Time of Birth</td>
//                 <td>
//                   : <a href="#">Enter Now</a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>City of Birth</td>
//                 <td>
//                   : <a href="#">Enter Now</a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="section-title">
//         {" "}
//         Family Details{" "}
//         <a href="#" className="small float-end cursor-pointer">
//           Edit
//         </a>
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Mother's Details</td>
//                 <td>: {familyDetails?.mother}</td>
//               </tr>
//               <tr>
//                 <td>Father's Details</td>
//                 <td>: {familyDetails?.father}</td>
//               </tr>
//               <tr>
//                 <td>Family Location</td>
//                 <td>: {userInfo.city}, {userInfo.country}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>No. of Sisters</td>
//                 <td>: {familyDetails?.sisters}</td>
//               </tr>
//               <tr>
//                 <td>No. of Brothers</td>
//                 <td>: {familyDetails?.brothers}</td>
//               </tr>
//               <tr>
//                 <td>Family Financial Status</td>
//                 <td>: {JSON.parse(userInfo.financial_status)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="section-title">
//         {" "}
//         Education & Career{" "}
//         <a href="#" className="small float-end cursor-pointer">
//           Edit
//         </a>
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Highest Qualification</td>
//                 <td>: {userInfo.education}</td>
//               </tr>
//               <tr>
//                 <td>College</td>
//                 <td>: {userInfo.college}</td>
//               </tr>
//               <tr>
//                 <td>Annual Income</td>
//                 <td>: {userInfo.income}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Working With</td>
//                 <td>: {userInfo.work_type}</td>
//               </tr>
//               <tr>
//                 <td>Working as</td>
//                 <td>: {userInfo.profession}</td>
//               </tr>
//               <tr>
//                 <td>Employer Name</td>
//                 <td>: ------</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="section-title">Hobbies & Interets</div>
//       <div className="row py-3 border-top">
//         <div className="col-md-12 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 {userInfo?.hobbies ? (<td>{JSON.parse(userInfo.hobbies).join(", ")}</td>):(<td>
//                   Adding Hobbies & Interets <a href="#">Add Here</a>
//                 </td>)}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="row py-3 border-top"></div>
//       <div className="text-end">
//         <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
//           {" "}
//           Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AboutMyself
