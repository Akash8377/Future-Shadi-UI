// import React, { useState } from "react";

// // Reusable Accordion Section Component
// const PrivacySection = ({ 
//   title, 
//   isOpen, 
//   toggle, 
//   children 
// }) => (
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button
//         className={`accordion-button ${isOpen ? "" : "collapsed"}`}
//         type="button"
//         onClick={toggle}
//       >
//         {title}
//       </button>
//     </h2>
//     <div
//       className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
//     >
//       <div className="accordion-body">
//         {children}
//       </div>
//     </div>
//   </div>
// );

// // Reusable Form Footer Component
// const FormFooter = () => (
//   <div className="d-flex gap-2 button-privacy">
//     <button className="btn btn-cancel px-4" type="button">
//       Cancel
//     </button>
//     <button className="btn btn-submit px-4" type="button">
//       Submit
//     </button>
//   </div>
// );

// // Individual Privacy Sections
// const DisplayNameSection = () => (
//   <div className="privacy-part1">
//     <div className="mb-3">
//       <strong>Full Name</strong>
//       <span className="ms-2">Akash Choudhary</span>
//       <a href="#" className="edit-link">Edit</a>
//     </div>

//     <div className="mb-3">
//       <strong>Display Name as</strong>
//       <div className="form-check mt-2 radio-option">
//         <input
//           className="form-check-input"
//           type="radio"
//           name="displayName"
//           id="hideLast"
//           defaultChecked
//         />
//         <label className="form-check-label" htmlFor="hideLast">
//           Hide my last name <small>(Akash C)</small>
//           <span className="recommended-badge">Recommended</span>
//         </label>
//       </div>
//       <div className="form-check mt-2 radio-option">
//         <input
//           className="form-check-input"
//           type="radio"
//           name="displayName"
//           id="hideFirst"
//         />
//         <label className="form-check-label" htmlFor="hideFirst">
//           Hide my first name <small>(A Choudhary)</small>
//           <a href="#" className="edit-link">More</a>
//         </label>
//       </div>
//     </div>

//     <div className="note-text mb-3">
//       <em>Note:</em> All Premium Members will be able to see your full name.
//     </div>
    
//     <FormFooter />
//   </div>
// );

// const ContactSection = ({ title, options }) => (
//   <div className="privacy-part1">
//     <div className="fw-semibold mb-2">{title}</div>
//     {options.map((option, index) => (
//       <div key={index} className="form-check">
//         <input
//           className="form-check-input"
//           type="radio"
//           name="contactStatus"
//           id={`option-${title}-${index}`}
//           defaultChecked={index === 0}
//         />
//         <label 
//           className="form-check-label" 
//           htmlFor={`option-${title}-${index}`}
//         >
//           {option.label}
//           {option.tooltip && (
//             <span 
//               className="ms-1 text-muted"
//               data-bs-toggle="tooltip"
//               data-bs-original-title={option.tooltip}
//             >
//               ⓘ
//             </span>
//           )}
//         </label>
//       </div>
//     ))}
//     <FormFooter />
//   </div>
// );

// const DNDSection = () => (
//   <div className="privacy-part1">
//     <div className="fw-semibold mb-2">Do Not Disturb</div>
//     <div className="form-check">
//       <input
//         className="form-check-input"
//         type="checkbox"
//         name="dndSetting"
//         id="dndOption"
//         defaultChecked
//       />
//       <label className="form-check-label" htmlFor="dndOption">
//         Future Shadi can Call Me Related Premium Offer
//       </label>
//     </div>
//     <FormFooter />
//   </div>
// );

// // Main Privacy Options Component
// const PrivacyOptions = () => {
//   const [isMainAccordionOpen, setIsMainAccordionOpen] = useState(false);
//   const [sections, setSections] = useState({
//     displayName: false,
//     phone: false,
//     email: false,
//     dob: false,
//     income: false,
//     shortlist: false,
//     dnd: false,
//     profilePrivacy: false,
//   });

//   const toggleMainAccordion = () => {
//     setIsMainAccordionOpen(!isMainAccordionOpen);
//   };

//   const toggleSection = (key) => {
//     setSections(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   // Configuration for contact-based sections
//   const contactSections = [
//     {
//       key: "phone",
//       title: "Phone",
//       options: [
//         { label: "Only Premium Members" },
//         { label: "Only Premium Members you like" },
//         { label: "No one (Matches won't be able to call you)" },
//         { 
//           label: "Only visible to all your Matches (Expires with Membership)", 
//           tooltip: "Visible only while membership is active" 
//         }
//       ]
//     },
//     {
//       key: "email",
//       title: "Email",
//       options: [
//         { label: "Only Premium Members" },
//         { label: "Only Premium Members you like" },
//         { label: "Hide My Email Address" },
//         { 
//           label: "Only visible to all your Matches (Expires with Membership)", 
//           tooltip: "Visible only while membership is active" 
//         }
//       ]
//     },
//     {
//       key: "dob",
//       title: "Date of Birth",
//       options: [
//         { label: "Show My Full date Of Birth" },
//         { label: "Show Only Month's & year" }
//       ]
//     },
//     {
//       key: "income",
//       title: "Annual Income",
//       options: [
//         { label: "Visible To all Members" },
//         { label: "Keep This Private" }
//       ]
//     },
//     {
//       key: "shortlist",
//       title: "Shortlist Setting",
//       options: [
//         { label: "Let Other Members know I Shortlisted Their Profile" },
//         { label: "Do Not Let Other Members know I Shortlisted Their Profile" }
//       ]
//     },
//     {
//       key: "profilePrivacy",
//       title: "Profile Privacy",
//       options: [
//         { label: "Visible To all unregistered visitors" },
//         { label: "Visible To all registered visitors" }
//       ]
//     }
//   ];

//   return (
//     <div className="accordion-item">
//       <h2 className="accordion-header" id="headingSix">
//         <button
//           className={`accordion-button ${isMainAccordionOpen ? "" : "collapsed"}`}
//           type="button"
//           onClick={toggleMainAccordion}
//         >
//           Privacy Options
//         </button>
//       </h2>
//       <div
//         id="collapseSix"
//         className={`accordion-collapse collapse ${isMainAccordionOpen ? "show" : ""}`}
//         data-bs-parent="#settingsAccordion"
//       >
//         <div className="accordion-body">
//           <div className="accordion" id="privacyAccordion">
//             {/* Display Name Section */}
//             <PrivacySection
//               title="Display Name"
//               isOpen={sections.displayName}
//               toggle={() => toggleSection("displayName")}
//             >
//               <DisplayNameSection />
//             </PrivacySection>

//             {/* Contact-based Sections */}
//             {contactSections.map((section) => (
//               <PrivacySection
//                 key={section.key}
//                 title={section.title}
//                 isOpen={sections[section.key]}
//                 toggle={() => toggleSection(section.key)}
//               >
//                 <ContactSection 
//                   title={section.title} 
//                   options={section.options} 
//                 />
//               </PrivacySection>
//             ))}

//             {/* Do Not Disturb Section */}
//             <PrivacySection
//               title="Do Not Disturb"
//               isOpen={sections.dnd}
//               toggle={() => toggleSection("dnd")}
//             >
//               <DNDSection />
//             </PrivacySection>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyOptions;

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