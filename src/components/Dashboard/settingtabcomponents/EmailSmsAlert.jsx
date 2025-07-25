import React, { useState } from "react";
import AccordionItem from "../settingtabcomponents/EmailSmsAlertComponent/AccordionItem";
import AlertBox from "../settingtabcomponents/EmailSmsAlertComponent/AlertBox";
import FormButtons from "../settingtabcomponents/EmailSmsAlertComponent/FormButtons";    
import MatchMailContent from "./EmailSmsAlertComponent/AlertContents/MatchMailContent";
import PremiumMatchContent from "./EmailSmsAlertComponent/AlertContents/PremiumMatchContent";
import RecentVisitorsContent from "./EmailSmsAlertComponent/AlertContents/RecentVisitorsContent";
import ShortlistedContent from "./EmailSmsAlertComponent/AlertContents/ShortlistedContent";
import ViewedProfileContent from "./EmailSmsAlertComponent/AlertContents/ViewedProfileContent";
import SimilarProfileContent from "./EmailSmsAlertComponent/AlertContents/SimilarProfileContent";
import ContactAlertContent from "./EmailSmsAlertComponent/AlertContents/ContactAlertContent";
import MessageReceivedContent from "./EmailSmsAlertComponent/AlertContents/MessageReceivedContent";
import SmsAlertContent from "./EmailSmsAlertComponent/AlertContents/SmsAlertContent";
import ProfileBlasterContent from "./EmailSmsAlertComponent/AlertContents/ProfileBlasterContent";
import ShadiSpecialsContent from "./EmailSmsAlertComponent/AlertContents/ShadiSpecialsContent";
import ShadiInsiteContent from "./EmailSmsAlertComponent/AlertContents/ShadiInsiteContent"





// Main Component
const EmailSmsAlert = () => {
  const [outerAccordionOpen, setOuterAccordionOpen] = useState(false);
  const [activeInnerAccordion, setActiveInnerAccordion] = useState(null);

  const toggleOuterAccordion = () => {
    setOuterAccordionOpen(!outerAccordionOpen);
  };

  const toggleInnerAccordion = (id) => {
    setActiveInnerAccordion(activeInnerAccordion === id ? null : id);
  };

  const alertSections = [
    { id: "MatchMail", title: "Match Mail & Photo Match Mail", content: <MatchMailContent /> },
    { id: "PremiumMatch", title: "Premium Match Mail", content: <PremiumMatchContent /> },
    { id: "RecentVisitors", title: "Recent Visitors Email", content: <RecentVisitorsContent /> },
    { id: "Shortlisted", title: "Members Who Shortlisted Your Email", content: <ShortlistedContent /> },
    { id: "ViewedProfile", title: "Viewed Profile Email", content: <ViewedProfileContent /> },
    { id: "SimilarProfile", title: "Similar Profile Email", content: <SimilarProfileContent /> },
    { id: "ContactAlert", title: "Contact Alert", content: <ContactAlertContent /> },
    { id: "MessageReceived", title: "Message Received Alert", content: <MessageReceivedContent /> },
    { id: "SmsAlert", title: "SMS Alert", content: <SmsAlertContent /> },
    { id: "ProfileBlaster", title: "Future Shadi Profile Blaster", content: <ProfileBlasterContent /> },
  ];

  const newsletterSections = [
    { id: "ShadiSpecials", title: "Shadi Specials", content: <ShadiSpecialsContent /> },
    { id: "ShadiInsite", title: "Shadi Insite", content: <ShadiInsiteContent /> }
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button
          className={`accordion-button ${outerAccordionOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleOuterAccordion}
        >
          Email / SMS Alerts
        </button>
      </h2>
      <div
        id="collapseFive"
        className={`accordion-collapse collapse ${outerAccordionOpen ? "show" : ""}`}
      >
        <div className="accordion-body">
          <div className="accordion">
            {alertSections.map((section) => (
              <AccordionItem
                key={section.id}
                id={section.id}
                title={section.title}
                isOpen={activeInnerAccordion === section.id}
                toggle={toggleInnerAccordion}
              >
                {section.content}
              </AccordionItem>
            ))}

             <h4 className="mt-4">Future Shadi Newsletter</h4>

             {newsletterSections.map((section) => (
              <AccordionItem
                key={section.id}
                id={section.id}
                title={section.title}
                isOpen={activeInnerAccordion === section.id}
                toggle={toggleInnerAccordion}
              >
                {section.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSmsAlert;