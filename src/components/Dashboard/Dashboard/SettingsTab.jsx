import React from "react";
import AccountSetting from "./settingtabcomponents/AccountSetting";
import MyContactSetting from "./settingtabcomponents/MyContactSetting";
import ContactFilter from "./settingtabcomponents/ContactFilter";
import AstroDetails from "./settingtabcomponents/AstroDetails";
import EmailSmsAlert from "./settingtabcomponents/EmailSmsAlert";
import PrivacyOptions from "./settingtabcomponents/PrivacyOptions";
import ShadiLive from "./settingtabcomponents/ShadiLive";
import HideAndDeleteProfile from "./settingtabcomponents/HideAndDeleteProfile";
import Messages from "./settingtabcomponents/Messages";

const SettingsTab = () => {
  return (
    <div id="settings" role="tabpanel" aria-labelledby="settings-tab">
      <div className="setting-part">
        <h4>Settings</h4>
        <div class="accordian-setting">
          <div class="mt-4">
            <div class="accordion" id="settingsAccordion">
              <AccountSetting />
              <MyContactSetting />
              <ContactFilter />
              <AstroDetails/>
              <EmailSmsAlert />
              <PrivacyOptions />    
              <ShadiLive />
              <HideAndDeleteProfile />
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
