import React, { useState } from "react";
import Profile from "./phototabcomponents/Profile";
import PartnerPrefer from "./phototabcomponents/PartnerPrefer";
import './styles.css'
import AboutMyself from "./phototabcomponents/AboutMyself";
import ContactDetails from "./phototabcomponents/ContactDetails";
import { useDispatch, useSelector } from 'react-redux';

const ProfileTab = () => {
  const { userInfo, token } = useSelector(state => state.user);
  const [editingSection, setEditingSection] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const handleEditClick = (section) => {
    setEditingSection(section);
  };

  const handleSaveClick = (section) => {
    // Create a deep copy of the original userInfo
    const updatedUserInfo = JSON.parse(JSON.stringify(userInfo));
    
    // Merge the updatedData with the userInfo copy
    Object.keys(updatedData).forEach(key => {
      if (section === 'about' || section === 'contact') {
        // For simple fields (AboutMyself and ContactDetails)
        updatedUserInfo[key] = updatedData[key];
      } else if (section === 'partner') {
        // For partner preferences which is stored as JSON string
        const partnerPref = JSON.parse(updatedUserInfo.partner_preference || '{}');
        updatedUserInfo.partner_preference = JSON.stringify({
          ...partnerPref,
          ...updatedData
        });
      }
    });

    console.log("Complete updated userInfo:", updatedUserInfo);
    
    // Here you would typically dispatch an action to update the user info
    // dispatch(updateUserProfile({ token, updatedData: updatedUserInfo }));
    
    setEditingSection(null);
    setUpdatedData({});
  };

  const handleDataChange = (section, field, value) => {
    setUpdatedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div>
      <Profile/>
      <div className="mt-4">
        <div className="d-flex about-mysleft" style={{ gap: "16px" }}>
          <h5>About Myself</h5>
          <h5 style={{ backgroundColor: "#f7f7f7" }}>
            <a
              href="#partnerPref"
              className=""
              style={{ color: "#000", textDecoration: "none" }}
            >
              Partner Preferences{" "}
              <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </a>
          </h5>
        </div>
        <div className="d-flex justify-content-between align-items-center border-top career-top1">
          <h6 className="mini-section-title ">
            Personality,Family Details, Career,Partner Expectations etc.
          </h6>
          <a href="#" className="mini-edit-link text-primary">
            Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
          </a>
        </div>
        <p className="mt-2">
          {userInfo?.profile_description || "Thanks for visiting my profile. I put relationships above all. I seek a compatible life partner, someone who is understanding and has good values. Thank you for your valuable time!"}
        </p>
      </div>
      <AboutMyself 
        isEditing={editingSection === 'about'} 
        onEditClick={() => handleEditClick('about')}
        onSaveClick={() => handleSaveClick('about')}
        onDataChange={(field, value) => handleDataChange('about', field, value)}
        updatedData={updatedData}
      />
      <PartnerPrefer 
        isEditing={editingSection === 'partner'} 
        onEditClick={() => handleEditClick('partner')}
        onSaveClick={() => handleSaveClick('partner')}
        onDataChange={(field, value) => handleDataChange('partner', field, value)}
        updatedData={updatedData}
      />
      <ContactDetails 
        isEditing={editingSection === 'contact'} 
        onEditClick={() => handleEditClick('contact')}
        onSaveClick={() => handleSaveClick('contact')}
        onDataChange={(field, value) => handleDataChange('contact', field, value)}
        updatedData={updatedData}
      />
    </div>
  );
};

export default ProfileTab;


// import React from "react";
// import Profile from "./phototabcomponents/Profile";
// import PartnerPrefer from "./phototabcomponents/PartnerPrefer";
// import './styles.css'
// import AboutMyself from "./phototabcomponents/AboutMyself";
// import ContactDetails from "./phototabcomponents/ContactDetails";
// import { useDispatch, useSelector } from 'react-redux';

// const ProfileTab = () => {
//   const { userInfo, token } = useSelector(state => state.user);
//   return (
//     <div>
//       <Profile/>
//       <div className="mt-4">
//         <div className="d-flex about-mysleft" style={{ gap: "16px" }}>
//           <h5>About Myself</h5>
//           <h5 style={{ backgroundColor: "#f7f7f7" }}>
//             <a
//               href="#partnerPref"
//               className=""
//               style={{ color: "#000", textDecoration: "none" }}
//             >
//               Partner Preferences{" "}
//               <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
//             </a>
//           </h5>
//         </div>
//         <div className="d-flex justify-content-between align-items-center border-top career-top1">
//           <h6 className="mini-section-title ">
//             Personality,Family Details, Career,Partner Expectations etc.
//           </h6>
//           <a href="#" className="mini-edit-link text-primary">
//             Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
//           </a>
//         </div>
//         <p className="mt-2">
//           {userInfo?.profile_description || "Thanks for visiting my profile. I put relationships above all. I seek a compatible life partner, someone who is understanding and has good values. Thank you for your valuable time!"}
//         </p>
//       </div>
//       <AboutMyself/>
//       <PartnerPrefer/>
//       <ContactDetails/>
//     </div>
//   );
// };

// export default ProfileTab;