import React, { useState } from "react";
import PrivacySection from "./privacyOptionsComponents/PrivacySection";
import DisplayNameSection from "./privacyOptionsComponents/DisplayNameSection";
import ContactSection from "./privacyOptionsComponents/ContactSection";
import DNDSection from "./privacyOptionsComponents/DNDSection";

const PrivacyOptions = () => {
  const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
  const [sections, setSections] = useState({
    displayName: false,
    phone: false,
    email: false,
    dob: false,
    income: false,
    shortlist: false,
    dnd: false,
    profilePrivacy: false,
  });

  const toggleMainAccordion = () => {
    setIsMainAccordionOpen(!isMainAccordionOpen);
  };

  const toggleSection = (key) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Configuration for contact-based sections
  const contactSections = [
    {
      key: "phone",
      title: "Phone",
      options: [
        { label: "Only Premium Members" },
        { label: "Only Premium Members you like" },
        { label: "No one (Matches won't be able to call you)" },
        { 
          label: "Only visible to all your Matches (Expires with Membership)", 
          tooltip: "Visible only while membership is active" 
        }
      ]
    },
    {
      key: "email",
      title: "Email",
      options: [
        { label: "Only Premium Members" },
        { label: "Only Premium Members you like" },
        { label: "Hide My Email Address" },
        { 
          label: "Only visible to all your Matches (Expires with Membership)", 
          tooltip: "Visible only while membership is active" 
        }
      ]
    },
    {
      key: "dob",
      title: "Date of Birth",
      options: [
        { label: "Show My Full date Of Birth" },
        { label: "Show Only Month's & year" }
      ]
    },
    {
      key: "income",
      title: "Annual Income",
      options: [
        { label: "Visible To all Members" },
        { label: "Keep This Private" }
      ]
    },
    {
      key: "shortlist",
      title: "Shortlist Setting",
      options: [
        { label: "Let Other Members know I Shortlisted Their Profile" },
        { label: "Do Not Let Other Members know I Shortlisted Their Profile" }
      ]
    },
    {
      key: "profilePrivacy",
      title: "Profile Privacy",
      options: [
        { label: "Visible To all unregistered visitors" },
        { label: "Visible To all registered visitors" }
      ]
    }
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button
          className={`accordion-button ${isMainAccordionOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMainAccordion}
        >
          Privacy Options
        </button>
      </h2>
      <div
        id="collapseSix"
        className={`accordion-collapse collapse ${isMainAccordionOpen ? "show" : ""}`}
        data-bs-parent="#settingsAccordion"
      >
        <div className="accordion-body">
          <div className="accordion" id="privacyAccordion">
            {/* Display Name Section */}
            <PrivacySection
              title="Display Name"
              isOpen={sections.displayName}
              toggle={() => toggleSection("displayName")}
            >
              <DisplayNameSection />
            </PrivacySection>

            {/* Contact-based Sections */}
            {contactSections.map((section) => (
              <PrivacySection
                key={section.key}
                title={section.title}
                isOpen={sections[section.key]}
                toggle={() => toggleSection(section.key)}
              >
                <ContactSection 
                  title={section.title} 
                  options={section.options} 
                />
              </PrivacySection>
            ))}

            {/* Do Not Disturb Section */}
            <PrivacySection
              title="Do Not Disturb"
              isOpen={sections.dnd}
              toggle={() => toggleSection("dnd")}
            >
              <DNDSection />
            </PrivacySection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyOptions;