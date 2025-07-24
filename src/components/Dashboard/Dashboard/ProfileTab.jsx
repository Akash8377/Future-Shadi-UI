import React, { useState } from "react";
import Profile from "./phototabcomponents/Profile";
import PartnerPrefer from "./phototabcomponents/PartnerPrefer";
import './styles.css'
import AboutMyself from "./phototabcomponents/AboutMyself";
import ContactDetails from "./phototabcomponents/ContactDetails";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import config from "../../../config";
import { toast } from "../../Common/Toast";
import { setUser } from "../../../features/user/userSlice";

const ProfileTab = ({onChangeTab}) => {
  const { userInfo, token } = useSelector(state => state.user);
  const [editingSection, setEditingSection] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const dispatch = useDispatch()
  

  const handleEditClick = (section) => {
    setEditingSection(section);
  };

const handleSaveClick = async (section) => {
  try {
    // Create a deep copy of the original userInfo
    const updatedUserInfo = JSON.parse(JSON.stringify(userInfo));
    
    // Merge the updatedData with the userInfo copy
    Object.keys(updatedData).forEach(key => {
      if (section === 'about' || section === 'contact' || section === 'description') {
        // For simple fields (AboutMyself, ContactDetails and description)
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
    
    // Prepare the data to send to the server
    const dataToSend = {
      ...updatedUserInfo,
      hobbies: updatedUserInfo.hobbies ? 
        JSON.parse(updatedUserInfo.hobbies) : null,
      family_details: updatedUserInfo.family_details ? 
        JSON.parse(updatedUserInfo.family_details) : null,
      verificationData: updatedUserInfo.verificationData ? 
        JSON.parse(updatedUserInfo.verificationData) : null
    };

    console.log("dataToSend", dataToSend)

    // Make API call to update profile using Axios
    const response = await axios.put(`${config.baseURL}/api/profile/update`, dataToSend, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // Axios response data is in response.data - no need for .json()
    const result = response.data;

    // Handle successful update
    console.log('Profile updated successfully:', result);
    dispatch(setUser({
      userInfo: updatedUserInfo,
      token: token, // ← do NOT change token
    }));
    
    // Update local state if needed
    setEditingSection(null);
    setUpdatedData({});

    // Show success message
    toast.success('Profile updated successfully!');
    
  } catch (error) {
    console.error('Error updating profile:', error);
    // Handle error (show error message to user)
    toast.error(`Error updating profile: ${error.response?.data?.message || error.message}`);
  }
};

  const handleDataChange = (section, field, value) => {
    console.log(value)
    setUpdatedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = ()=>{
    setEditingSection(null);
  }

  return (
    <div>
      <Profile onChangeTab={onChangeTab}/>
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
          {editingSection === 'description' ? (
            <div>
              <a  href="#" 
                onClick={() => handleSaveClick('description')}
                className="mini-edit-link text-primary pe-2"
              >
                Save
              </a>
              <a 
               href="#" 
                onClick={handleCancel}
                className="mini-edit-link text-primary"
              >
                Cancel
              </a>
            </div>
          ) : (
            <a 
              href="#" 
              className="mini-edit-link text-primary"
              onClick={(e) => {
                e.preventDefault();
                setEditingSection('description');
                // Initialize with current description if not already in updatedData
                if (!updatedData.profile_description) {
                  handleDataChange('description', 'profile_description', userInfo?.profile_description || "");
                }
              }}
            >
              Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
            </a>
          )}
        </div>
        {editingSection === 'description' ? (
          <textarea
            className="form-control mt-2"
            value={updatedData.profile_description || userInfo?.profile_description || ""}
            onChange={(e) => handleDataChange('description', 'profile_description', e.target.value)}
            rows="4"
          />
        ) : (
          <p className="mt-2">
            {userInfo?.profile_description || "Thanks for visiting my profile. I put relationships above all. I seek a compatible life partner, someone who is understanding and has good values. Thank you for your valuable time!"}
          </p>
        )}
      </div>
      <AboutMyself 
        isEditing={editingSection === 'about'} 
        onEditClick={() => handleEditClick('about')}
        onSaveClick={() => handleSaveClick('about')}
        onCancelClick={()=> handleCancel()}
        onDataChange={(field, value) => handleDataChange('about', field, value)}
        updatedData={updatedData}
      />
      <PartnerPrefer
        onEditClick={() =>onChangeTab("partner")} 
        isEditing={editingSection === 'partner'} 
        // onEditClick={() => handleEditClick('partner')}
        onSaveClick={() => handleSaveClick('partner')}
        onCancelClick={()=> handleCancel()}
        onDataChange={(field, value) => handleDataChange('partner', field, value)}
        updatedData={updatedData}
      />
      <ContactDetails 
        isEditing={editingSection === 'contact'} 
        onEditClick={() => handleEditClick('contact')}
        onSaveClick={() => handleSaveClick('contact')}
        onCancelClick={()=> handleCancel()}
        onDataChange={(field, value) => handleDataChange('contact', field, value)}
        updatedData={updatedData}
      />
    </div>
  );
};

export default ProfileTab;