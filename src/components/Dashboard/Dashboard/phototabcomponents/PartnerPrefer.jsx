import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { scrollToTop } from '../../../../utils/helpers';

const PartnerPrefer = ({ isEditing, onEditClick, onSaveClick, onDataChange, updatedData }) => {
    const { userInfo, token } = useSelector(state => state.user);
    const partnerPrefrence = JSON.parse(userInfo.partner_preference)
    
    const getPrefValue = (section, field) => {
        if (updatedData[section] && updatedData[section][field] !== undefined) {
            return updatedData[section][field];
        }
        return partnerPrefrence?.[section]?.[field] || '';
    };

    const handlePrefChange = (section, field, value) => {
        const newSectionData = {
            ...(updatedData[section] || partnerPrefrence[section] || {}),
            [field]: value
        };
        onDataChange(section, newSectionData);
    };

    return (
        <div>
            <div id="partnerPref" className="">
                <div className="section-title partners">Partner Preferences</div>
                
                {/* Basic Info Section */}
                <div className="section-title">
                    Basic Info{" "}
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
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('basic', 'ageRange')} 
                                            onChange={(e) => handlePrefChange('basic', 'ageRange', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.basic?.ageRange
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('basic', 'heightRange')} 
                                            onChange={(e) => handlePrefChange('basic', 'heightRange', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.basic?.heightRange
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Religion Community</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('community', 'community')} 
                                            onChange={(e) => handlePrefChange('community', 'community', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.community?.community
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
                        <table className="table table-borderless table-sm mini-data mb-0">
                            <tbody>
                                <tr>
                                    <td>Mother Tongue</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('community', 'motherTongue')} 
                                            onChange={(e) => handlePrefChange('community', 'motherTongue', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.community?.motherTongue
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Marital Status</td>
                                    <td>: {isEditing ? (
                                        <select 
                                            value={getPrefValue('basic', 'maritalStatus')} 
                                            onChange={(e) => handlePrefChange('basic', 'maritalStatus', e.target.value)}
                                            className="form-select form-select-sm d-inline-block w-auto"
                                        >
                                            <option value="Never Married">Never Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                        </select>
                                    ) : (
                                        partnerPrefrence?.basic?.maritalStatus
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Location Details Section */}
                <div className="section-title">
                    Location Details{" "}
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
                                    <td>Country Living In</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('location', 'country')} 
                                            onChange={(e) => handlePrefChange('location', 'country', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.location?.country
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>State Living In</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('location', 'state')} 
                                            onChange={(e) => handlePrefChange('location', 'state', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.location?.state
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('location', 'city') || ''} 
                                            onChange={(e) => handlePrefChange('location', 'city', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.location?.city || '-----'
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0"></div>
                </div>

                {/* Education Career Section */}
                <div className="section-title">
                    Education Career{" "}
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
                                    <td>Education</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('education', 'qualification')} 
                                            onChange={(e) => handlePrefChange('education', 'qualification', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.education?.qualification
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Working With</td>
                                    <td>: {isEditing ? (
                                        <select 
                                            value={getPrefValue('education', 'workingWith')} 
                                            onChange={(e) => handlePrefChange('education', 'workingWith', e.target.value)}
                                            className="form-select form-select-sm d-inline-block w-auto"
                                        >
                                            <option value="Private Company">Private Company</option>
                                            <option value="Government">Government</option>
                                            <option value="Business">Business</option>
                                            <option value="Self Employed">Self Employed</option>
                                        </select>
                                    ) : (
                                        partnerPrefrence?.education?.workingWith
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Working Area</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('education', 'workingArea') || ''} 
                                            onChange={(e) => handlePrefChange('education', 'workingArea', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.education?.workingArea || '-----'
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
                        <table className="table table-borderless table-sm mini-data mb-0">
                            <tbody>
                                <tr>
                                    <td>Working As</td>
                                    <td>: {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={getPrefValue('education', 'profession')} 
                                            onChange={(e) => handlePrefChange('education', 'profession', e.target.value)}
                                            className="form-control form-control-sm d-inline-block w-auto"
                                        />
                                    ) : (
                                        partnerPrefrence?.education?.profession
                                    )}</td>
                                </tr>
                                <tr>
                                    <td>Annual Income</td>
                                    <td>: {isEditing ? (
                                        <select 
                                            value={getPrefValue('education', 'annualIncome')} 
                                            onChange={(e) => handlePrefChange('education', 'annualIncome', e.target.value)}
                                            className="form-select form-select-sm d-inline-block w-auto"
                                        >
                                            <option value="Not Working">Not Working</option>
                                            <option value="Below 1 Lakh">Below 1 Lakh</option>
                                            <option value="1-2 Lakhs">1-2 Lakhs</option>
                                            <option value="2-5 Lakhs">2-5 Lakhs</option>
                                            <option value="5-10 Lakhs">5-10 Lakhs</option>
                                            <option value="Above 10 Lakhs">Above 10 Lakhs</option>
                                        </select>
                                    ) : (
                                        partnerPrefrence?.education?.annualIncome
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Other Details Section */}
                <div className="section-title">
                    Other Details{" "}
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
                                    <td>Profile Managed By</td>
                                    <td>: {isEditing ? (
                                        <select 
                                            value={getPrefValue('otherDetails', 'profileManagedBy')} 
                                            onChange={(e) => handlePrefChange('otherDetails', 'profileManagedBy', e.target.value)}
                                            className="form-select form-select-sm d-inline-block w-auto"
                                        >
                                            <option value="Self">Self</option>
                                            <option value="Parents">Parents</option>
                                            <option value="Sibling">Sibling</option>
                                            <option value="Relative">Relative</option>
                                        </select>
                                    ) : (
                                        partnerPrefrence?.otherDetails?.profileManagedBy
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
                                            value={getPrefValue('otherDetails', 'diet')} 
                                            onChange={(e) => handlePrefChange('otherDetails', 'diet', e.target.value)}
                                            className="form-select form-select-sm d-inline-block w-auto"
                                        >
                                            <option value="Vegetarian">Vegetarian</option>
                                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                                            <option value="Vegan">Vegan</option>
                                        </select>
                                    ) : (
                                        partnerPrefrence?.otherDetails?.diet
                                    )}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-end mt-4">
                <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
                    Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default PartnerPrefer



// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { scrollToTop } from '../../../../utils/helpers';

// const PartnerPrefer = () => {
//     const { userInfo, token } = useSelector(state => state.user);
//     const partnerPrefrence = JSON.parse(userInfo.partner_preference)
//   return (
//     <div>
//       <div id="partnerPref" className="">
//         <div className="section-title partners">Partner Preferences</div>
//         <div className="section-title">
//           {" "}
//           Basic Info{" "}
//           <a href="#" className="small float-end cursor-pointer">
//             Edit
//           </a>
//         </div>
//         <div className="row py-3 border-top">
//           <div className="col-md-6 pe-md-4">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Age</td>
//                   <td>: {partnerPrefrence?.basic?.ageRange}</td>
//                 </tr>
//                 <tr>
//                   <td>Height</td>
//                   <td>: {partnerPrefrence?.basic?.heightRange}</td>
//                 </tr>
//                 <tr>
//                   <td>Religion Community</td>
//                   <td>: {partnerPrefrence?.community?.community}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Mother Tongue</td>
//                   <td>: {partnerPrefrence?.community?.motherTongue}</td>
//                 </tr>
//                 <tr>
//                   <td>Marital Status</td>
//                   <td>: {partnerPrefrence?.basic?.maritalStatus}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="section-title">
//           {" "}
//           Location Details{" "}
//           <a href="#" className="small float-end cursor-pointer">
//             Edit
//           </a>
//         </div>
//         <div className="row py-3 border-top">
//           <div className="col-md-6 pe-md-4">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Country Living In</td>
//                   <td>: {partnerPrefrence?.location?.country}</td>
//                 </tr>
//                 <tr>
//                   <td>State Living In</td>
//                   <td>: {partnerPrefrence?.location?.state}</td>
//                 </tr>
//                 <tr>
//                   <td>City</td>
//                   <td>: -----</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0"></div>
//         </div>

//         <div className="section-title">
//           {" "}
//           Education Career{" "}
//           <a href="#" className="small float-end cursor-pointer">
//             Edit
//           </a>
//         </div>
//         <div className="row py-3 border-top">
//           <div className="col-md-6 pe-md-4">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Education</td>
//                   <td>: {partnerPrefrence?.education?.qualification}</td>
//                 </tr>
//                 <tr>
//                   <td>Working With</td>
//                   <td>: {partnerPrefrence?.education?.workingWith}</td>
//                 </tr>
//                 <tr>
//                   <td>Working Area</td>
//                   <td>: -----</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Working As</td>
//                   <td>: {partnerPrefrence?.education?.profession}</td>
//                 </tr>
//                 <tr>
//                   <td>Annual Income</td>
//                   <td>: {partnerPrefrence?.education?.annualIncome}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="section-title">
//           {" "}
//           Other Details
//           <a href="#" className="small float-end cursor-pointer">
//             Edit
//           </a>
//         </div>

//         <div className="row py-3 border-top">
//           <div className="col-md-6 pe-md-4">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Profile Managed By</td>
//                   <td>: {partnerPrefrence?.otherDetails?.profileManagedBy}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//             <table className="table table-borderless table-sm mini-data mb-0">
//               <tbody>
//                 <tr>
//                   <td>Diet</td>
//                   <td>: {partnerPrefrence?.otherDetails?.diet}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="text-end mt-4">
//         <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
//           {" "}
//           Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PartnerPrefer
