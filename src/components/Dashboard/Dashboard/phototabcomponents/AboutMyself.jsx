import React, { useState } from 'react';
import { calculateAge, scrollToTop } from '../../../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import BasicInfoSection from './BasicInfoSection';
import ReligiousBackgroundSection from './ReligiousBackgroundSection';
import FamilyDetailsSection from './FamilyDetailsSection';
import EducationCareerSection from './EducationCareerSection';
import HobbiesSection from './HobbiesSection';

const AboutMyself = ({ isEditing, onEditClick, onSaveClick, onCancelClick, onDataChange, updatedData }) => {
  const { userInfo } = useSelector(state => state.user);
  const familyDetails = JSON.parse(userInfo.family_details || '{}');
  const hobbies = userInfo?.hobbies ? JSON.parse(userInfo.hobbies) : [];
  const [selectedHobbies, setSelectedHobbies] = useState(hobbies || []);
  const [editingFields, setEditingFields] = useState("");

  const handleCheckboxChange = (hobbyValue) => {
    if (typeof hobbyValue === 'string') {
      setSelectedHobbies(prev => {
        const newHobbies = prev.includes(hobbyValue)
          ? prev.filter(item => item !== hobbyValue)
          : [...prev, hobbyValue];
        onDataChange('hobbies', JSON.stringify(newHobbies));
        return newHobbies;
      });
    } else if (hobbyValue.target) {
      const options = Array.from(hobbyValue.target.selectedOptions).map(option => option.value);
      setSelectedHobbies(options);
      onDataChange('hobbies', options);
    }
  };

  const getValue = (field) => {
    return updatedData[field] !== undefined ? updatedData[field] : userInfo[field];
  };

  const getFamilyValue = (field) => {
    return updatedData[field] !== undefined ? updatedData[field] : familyDetails[field];
  };

  return (
    <div>
      <div className="section-title">
        Basics & Lifestyle{" "}
        {isEditing && editingFields === "basic" ? (
          <>
            <a onClick={onCancelClick} className="small float-end cursor-pointer">Cancel</a>
            <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">Save</a>
          </>
        ) : (
          <a onClick={() => { onEditClick(); setEditingFields("basic") }} className="small float-end cursor-pointer">Edit</a>
        )}
      </div>
      <BasicInfoSection 
        isEditing={isEditing} 
        getValue={getValue} 
        onDataChange={onDataChange} 
        editingFields={editingFields} 
      />

      <ReligiousBackgroundSection 
        isEditing={isEditing} 
        getValue={getValue} 
        onDataChange={onDataChange} 
        editingFields={editingFields}
        setEditingFields={setEditingFields} 
        onEditClick={onEditClick} 
        onSaveClick={onSaveClick} 
        onCancelClick={onCancelClick} 
      />

      <div className="section-title">
        Family Details{" "}
        {isEditing && editingFields === "family" ? (
          <>
            <a onClick={onCancelClick} className="small float-end cursor-pointer">Cancel</a>
            <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">Save</a>
          </>
        ) : (
          <a onClick={() => { onEditClick(); setEditingFields("family") }} className="small float-end cursor-pointer">Edit</a>
        )}
      </div>
      <FamilyDetailsSection 
        isEditing={isEditing} 
        getValue={getValue} 
        getFamilyValue={getFamilyValue} 
        onDataChange={onDataChange} 
        editingFields={editingFields} 
      />

      <div className="section-title">
        Education & Career{" "}
        {isEditing && editingFields === "career" ? (
          <>
            <a onClick={onCancelClick} className="small float-end cursor-pointer">Cancel</a>
            <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">Save</a>
          </>
        ) : (
          <a onClick={() => { onEditClick(); setEditingFields("career") }} className="small float-end cursor-pointer">Edit</a>
        )}
      </div>
      <EducationCareerSection 
        isEditing={isEditing} 
        getValue={getValue} 
        onDataChange={onDataChange} 
        editingFields={editingFields} 
      />

      <div className="section-title">
        Hobbies & Interests{" "}
        {isEditing && editingFields === "hobbies" ? (
          <>
            <a onClick={onCancelClick} className="small float-end cursor-pointer">Cancel</a>
            <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">Save</a>
          </>
        ) : (
          <a onClick={() => { onEditClick(); setEditingFields("hobbies") }} className="small float-end cursor-pointer">Edit</a>
        )}
      </div>
      <HobbiesSection 
        isEditing={isEditing} 
        editingFields={editingFields} 
        selectedHobbies={selectedHobbies} 
        handleCheckboxChange={handleCheckboxChange} 
      />

      <div className="row py-3 border-top"></div>
      <div className="text-end">
        <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
          Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutMyself;



// import React, {useState} from 'react'
// import { calculateAge } from '../../../../utils/helpers'
// import { useDispatch, useSelector } from 'react-redux';
// import { scrollToTop } from '../../../../utils/helpers';
// import { MARITAL_STATUS, RELIGIONS, COMMUNITIES,SUBCOMMUNITIES, LANGUAGES, COUNTRIES, STATE, PROFESSIONS, DIET, PROFILEMANAGEDBY, QUALIFICATIONS, OCCUPATIONS, HEIGHTS, BLOODGROUP, NUMOFSIBLINGS,FATHERDETAILS,MOTHERDETAILS,FINANCIALSTATUS, HOBBIES  } from "../../../../constants/formData";

// const AboutMyself = ({ isEditing, onEditClick, onSaveClick, onCancelClick, onDataChange, updatedData }) => {
//   const { userInfo, token } = useSelector(state => state.user);
//   const familyDetails = JSON.parse(userInfo.family_details || '{}');
//   const hobbies = userInfo?.hobbies ? JSON.parse(userInfo.hobbies) : [];
//   const allProfessions = Object.values(PROFESSIONS).flat();
//   const [selectedHobbies, setSelectedHobbies] = useState(
//     hobbies ? hobbies : []
//   );
//   const [editingFields, setEditingFields] = useState("");

//  const handleCheckboxChange = (hobbyValue) => {
//   console.log("Hobby Value", typeof hobbyValue, hobbyValue)
//   // For checkbox-style usage
//   if (typeof hobbyValue === 'string') {
//     setSelectedHobbies(prev => {
//       const newHobbies = prev.includes(hobbyValue)
//         ? prev.filter(item => item !== hobbyValue) // Remove if exists
//         : [...prev, hobbyValue]; // Add if new
      
//       // Update the main state
//       console.log("Updating Main state", newHobbies)
//       onDataChange('hobbies', JSON.stringify(newHobbies));
//       return newHobbies;
//     });
//   } 
//   // For multi-select usage
//   else if (hobbyValue.target) {
//     const options = Array.from(hobbyValue.target.selectedOptions).map(option => option.value);
//     setSelectedHobbies(options);
//     onDataChange('hobbies', options);
//   }
// };
  
//   const getValue = (field) => {
//     return updatedData[field] !== undefined ? updatedData[field] : userInfo[field];
//   };

//   const getFamilyValue = (field) => {
//     return updatedData[field] !== undefined ? updatedData[field] : familyDetails[field];
//   };

//   return (
//     <div>
//       <div className="section-title">
//         Basics & Lifestyle{" "}
//         {isEditing && editingFields === "basic" ? (
//           <>
//           <a onClick={onCancelClick} className="small float-end cursor-pointer">
//             Cancel 
//           </a>
//           <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">
//             Save
//           </a>
//           </>
//         ) : (
//           <a onClick={()=>{onEditClick(); setEditingFields("basic")}} className="small float-end cursor-pointer">
//             Edit
//           </a>
//         )}
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Age</td>
//                 <td>: {calculateAge(
//                   getValue('birth_year'), 
//                   getValue('birth_month'), 
//                   getValue('birth_day')
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>DOB</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <div className="d-flex gap-1 w-75">
//                     <input 
//                       type="text" 
//                       value={getValue('birth_day') || ''} 
//                       onChange={(e) => onDataChange('birth_day', e.target.value)}
//                       className="form-control form-control-sm"
//                       placeholder="Day"
//                     />
//                     <input 
//                       type="text" 
//                       value={getValue('birth_month') || ''} 
//                       onChange={(e) => onDataChange('birth_month', e.target.value)}
//                       className="form-control form-control-sm "
//                       placeholder="Month"
//                     />
//                     <input 
//                       type="text" 
//                       value={getValue('birth_year') || ''} 
//                       onChange={(e) => onDataChange('birth_year', e.target.value)}
//                       className="form-control form-control-sm "
//                       placeholder="Year"
//                     />
//                   </div>
//                 ) : (
//                   `${userInfo.birth_day}-${userInfo.birth_month}-${userInfo.birth_year}`
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Marital Status</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <select 
//                     value={getValue('marital_status') || ''} 
//                     onChange={(e) => onDataChange('marital_status', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {MARITAL_STATUS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.marital_status
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Height</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                    <select 
//                     value={getValue('height') || ''} 
//                     onChange={(e) => onDataChange('height', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {HEIGHTS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.height
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Grow Up</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                    <select 
//                     value={getValue('country') || ''} 
//                     onChange={(e) => onDataChange('country', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {COUNTRIES.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.country
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Diet</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <select 
//                     value={getValue('diet') || ''} 
//                     onChange={(e) => onDataChange('diet', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {DIET.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.diet
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Blood Group</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <select 
//                     value={getValue('blood_group') || ''} 
//                     onChange={(e) => onDataChange('blood_group', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {BLOODGROUP.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.blood_group || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Health Information</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <input 
//                     type="text" 
//                     value={getValue('health_info') || ''} 
//                     onChange={(e) => onDataChange('health_info', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.health_info || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Disability</td>
//                 <td>: {isEditing && editingFields === "basic" ? (
//                   <input 
//                     type="text" 
//                     value={getValue('disability') || ''} 
//                     onChange={(e) => onDataChange('disability', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.disability || '------'
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <h6 className="mini-section-title mb-2">Religious Background</h6>
//             {isEditing && editingFields === "religious" ? (
//               <sapn className="d-flex gap-2"><a onClick={onSaveClick} className="mini-edit-link text-primary cursor-pointer">
//                 Save
//               </a><a onClick={onCancelClick} className="mini-edit-link text-primary cursor-pointer">
//                 Cancel
//               </a></sapn>
//             ) : (
//               <a onClick={()=>{onEditClick(); setEditingFields("religious")}} className="mini-edit-link text-primary cursor-pointer">
//                 Edit
//               </a>
//             )}
//           </div>

//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Religion</td>
//                 <td>: {isEditing && editingFields === "religious"  ? (
//                   <select 
//                     value={getValue('religion') || ''} 
//                     onChange={(e) => onDataChange('religion', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {RELIGIONS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.religion
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Community</td>
//                 <td>: {isEditing && editingFields === "religious"  ? (
//                   <select 
//                     value={getValue('community') || ''} 
//                     onChange={(e) => onDataChange('community', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {COMMUNITIES.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.community
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Sub community</td>
//                 <td>: {isEditing && editingFields === "religious"  ? (
//                   <select 
//                     value={getValue('sub_community') || ''} 
//                     onChange={(e) => onDataChange('sub_community', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {/* Frequently Used Communities */}
//                     <optgroup label="FREQUENTLY USED">
//                       {SUBCOMMUNITIES["FREQUENTLY USED"].map((community) => (
//                         <option key={community.value} value={community.value}>
//                           {community.label}
//                         </option>
//                       ))}
//                     </optgroup>
      
//                     {/* All Communities */}
//                     <optgroup label="ALL COMMUNITIES">
//                       {SUBCOMMUNITIES["ALL COMMUNITIES"].map((community) => (
//                         <option key={community.value} value={community.value}>
//                           {community.label}
//                         </option>
//                       ))}
//                     </optgroup>
//                   </select>
//                 ) : (
//                   userInfo.sub_community
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Gothra / Gothram</td>
//                 <td>: {isEditing && editingFields === "religious"  ? (
//                   <input 
//                     type="text" 
//                     value={getValue('gothra') || ''} 
//                     onChange={(e) => onDataChange('gothra', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.gothra || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Mother Tongue</td>
//                 <td>: {isEditing && editingFields === "religious"  ? (
//                   <select 
//                     value={getValue('community') || ''} 
//                     onChange={(e) => onDataChange('community', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {LANGUAGES.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.mother_tongue || '------'
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <div className="d-flex justify-content-between align-items-center">
//             <h6 className="mini-section-title mb-2">Astro Details</h6>
//             {isEditing && editingFields === "astro" ? (
//               <sapn className="d-flex gap-2"><a onClick={onSaveClick} className="mini-edit-link text-primary cursor-pointer">
//                 Save
//               </a><a onClick={onCancelClick} className="mini-edit-link text-primary cursor-pointer">
//                 Cancel
//               </a></sapn>
//             ) : (
//               <a onClick={()=>{onEditClick(); setEditingFields("astro")}} className="mini-edit-link text-primary cursor-pointer">
//                 Edit
//               </a>
//             )}
//           </div>

//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Manglik/Chevvai dosham</td>
//                 <td>: {isEditing && editingFields === "astro" ? (
//                   <select 
//                     value={getValue('manglik') || ''} 
//                     onChange={(e) => onDataChange('manglik', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     <option value="Manglik">Manglik</option>
//                     <option value="Non-Manglik">Non-Manglik</option>
//                     <option value="Partial Manglik">Partial Manglik</option>
//                     <option value="Not Sure">Not Sure</option>
//                   </select>
//                 ) : (
//                   userInfo.manglik || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Date of Birth</td>
//                 <td>: {userInfo.birth_day}-{userInfo.birth_month}-{userInfo.birth_year}</td>
//               </tr>
//               <tr>
//                 <td>Time of Birth</td>
//                 <td>: {isEditing && editingFields === "astro" ? (
//                   <input 
//                     type="time" step="1"
//                     value={getValue('birth_time') || ''} 
//                     onChange={(e) => onDataChange('birth_time', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-75"
//                   />
//                 ) : (
//                   userInfo.birth_time ? (
//                     userInfo.birth_time
//                   ) : (
//                     <a href="#">Enter Now</a>
//                   )
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>City of Birth</td>
//                 <td>: {isEditing && editingFields === "astro" ? (
//                   <input 
//                     type="text" 
//                     value={getValue('birth_city') || ''} 
//                     onChange={(e) => onDataChange('birth_city', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.birth_city ? (
//                     userInfo.birth_city
//                   ) : (
//                     <a href="#">Enter Now</a>
//                   )
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="section-title">
//         Family Details{" "}
//         {isEditing && editingFields==="family" ? (
//           <><a onClick={onCancelClick} className="small float-end cursor-pointer">
//             Cancel
//           </a>
//           <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">
//             Save
//           </a></>
//         ) : (
//           <a onClick={()=>{onEditClick(); setEditingFields("family")}} className="small float-end cursor-pointer">
//             Edit
//           </a>
//         )}
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Mother's Details</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                   <select 
//                     value={getFamilyValue('mother') || ''} 
//                     onChange={(e) => onDataChange('mother', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {MOTHERDETAILS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   familyDetails?.mother || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Father's Details</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                   <select 
//                     value={getFamilyValue('father') || ''} 
//                     onChange={(e) => onDataChange('father', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {FATHERDETAILS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   familyDetails?.father || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Family Location</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                   <input 
//                     type="text" 
//                     value={getValue('city') || ''} 
//                     onChange={(e) => onDataChange('city', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   `${userInfo.city}, ${userInfo.country}`
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>No. of Sisters</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                   <select 
//                     value={getFamilyValue('sisters') || ''} 
//                     onChange={(e) => onDataChange('sisters', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {NUMOFSIBLINGS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   familyDetails?.sisters || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>No. of Brothers</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                    <select 
//                     value={getFamilyValue('brothers') || ''} 
//                     onChange={(e) => onDataChange('brothers', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {NUMOFSIBLINGS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   familyDetails?.brothers || '------'
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Family Financial Status</td>
//                 <td>: {isEditing && editingFields==="family"  ? (
//                   <select 
//                     value={getValue('financial_status') || ''} 
//                     onChange={(e) => onDataChange('financial_status', e.target.value )}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {FINANCIALSTATUS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo?.financial_status || '------'
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="section-title">
//         Education & Career{" "}
//         {isEditing && editingFields==="career" ? (
//           <><a onClick={onCancelClick} className="small float-end cursor-pointer">
//             Cancel
//           </a>
//           <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">
//             Save
//           </a></>
//         ) : (
//           <a onClick={()=>{onEditClick(); setEditingFields("career")}} className="small float-end cursor-pointer">
//             Edit
//           </a>
//         )}
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-6 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Highest Qualification</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <input 
//                     type="text" 
//                     value={getValue('education') || ''} 
//                     onChange={(e) => onDataChange('education', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.education
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>College</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <input 
//                     type="text" 
//                     value={getValue('college') || ''} 
//                     onChange={(e) => onDataChange('college', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.college
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Annual Income</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <select 
//                     value={getValue('income') || ''} 
//                     onChange={(e) => onDataChange('income', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                             {Array.from({ length: 99 }, (_, i) => (
//                       <option key={i} value={`${i + 1} Lakh`}>
//                         {i + 1} Lakh
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.income
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>Working With</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <select 
//                     value={getValue('work_type') || ''} 
//                     onChange={(e) => onDataChange('work_type', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                     {OCCUPATIONS.map((item)=>(
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.work_type
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Working as</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <select 
//                     value={getValue('profession') || ''} 
//                     onChange={(e) => onDataChange('profession', e.target.value)}
//                     className="form-select form-select-sm d-inline-block w-75"
//                   >
//                     <option value="">Select</option>
//                    {allProfessions.map((item) => (
//                       <option key={item.value} value={item.value}>{item.label}</option>
//                     ))}
//                   </select>
//                 ) : (
//                   userInfo.profession
//                 )}</td>
//               </tr>
//               <tr>
//                 <td>Employer Name</td>
//                 <td>: {isEditing && editingFields==="career"  ? (
//                   <input 
//                     type="text" 
//                     value={getValue('employer') || ''} 
//                     onChange={(e) => onDataChange('employer', e.target.value)}
//                     className="form-control form-control-sm d-inline-block w-auto"
//                   />
//                 ) : (
//                   userInfo.employer || '------'
//                 )}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="section-title">
//         Hobbies & Interests{" "}
//         {isEditing && editingFields==="hobbies" ? (
//           <><a onClick={onCancelClick} className="small float-end cursor-pointer">
//             Cancel
//           </a>
//           <a onClick={onSaveClick} className="small float-end cursor-pointer pe-2">
//             Save
//           </a></>
//         ) : (
//           <a onClick={()=>{onEditClick(); setEditingFields("hobbies")}} className="small float-end cursor-pointer">
//             Edit
//           </a>
//         )}
//       </div>
//       <div className="row py-3 border-top">
//         <div className="col-md-12 pe-md-4">
//           <table className="table table-borderless table-sm mini-data mb-0">
//             <tbody>
//               <tr>
//                 <td>
//                   {isEditing && editingFields==="hobbies"  ? (
//                     <div className='d-flex flex-wrap gap-2'>{HOBBIES.map((hobby) => (
//                     <div key={hobby.value} className="form-check ">
//                       <input
//                         type="checkbox"
//                         id={`hobby-${hobby.value}`}
//                         checked={selectedHobbies.includes(hobby.value)}
//                         onChange={() => handleCheckboxChange(hobby.value)}
//                         className="form-check-input"
//                         disabled={selectedHobbies.includes(hobby.value) || selectedHobbies.length < 5 ? false : true}
//                       />
//                       <label htmlFor={`hobby-${hobby.value}`} className="form-check-label">
//                         {hobby.label}
//                       </label>
//                     </div>
//                   ))}</div>
//                   ) : hobbies.length > 0 ? (
//                     hobbies.join(", ")
//                   ) : (
//                     <>Add Hobbies & Interests</>
//                   )}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="row py-3 border-top"></div>
//       <div className="text-end">
//         <button type='button' onClick={scrollToTop} className="btn btn-link back-to-top">
//           Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AboutMyself