import React, { useState, useCallback } from "react";
import { Modal } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { camelCaseToNormalText } from "../../utils/helpers";
import { MARITAL_STATUS, RELIGIONS, COMMUNITIES, LANGUAGES, COUNTRIES, STATE, PROFESSIONS, DIET, PROFILEMANAGEDBY, QUALIFICATIONS, OCCUPATIONS } from "../../constants/formData";
import PreferenceCard from "../../components/PartnerPreferences/PreferenceCard";
import SliderModal from "../../components/PartnerPreferences/SliderModal";
import CheckboxModal from "../../components/PartnerPreferences/CheckboxModal";
import InputModal from "../../components/PartnerPreferences/InputModal";
import { PREFERENCE_SECTIONS, INITIAL_PREFS } from "../../constants/formData";
import { useNavigate } from "react-router-dom";


// Map field names to their corresponding data arrays
const FIELD_OPTIONS_MAP = {
  maritalStatus: MARITAL_STATUS,
  religion: RELIGIONS,
  community: COMMUNITIES,
  motherTongue: LANGUAGES,
  country: COUNTRIES,
  profession: Object.values(PROFESSIONS).flat(), // Flatten the grouped professions into a single array
  diet: DIET,
  profileManagedBy: PROFILEMANAGEDBY,
  workingWith: OCCUPATIONS,
  qualification: QUALIFICATIONS,
  state: Object.values(STATE).flat(),
};

const PartnerPreferences = () => {
  const [showExtraCards, setShowExtraCards] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Edit");
  const [inputValue, setInputValue] = useState("");
  const [currentField, setCurrentField] = useState(null);
  const [ranges, setRanges] = useState({ age: [20, 23], height: [59, 67], income: [1, 5] });
  const [selectedOptions, setSelectedOptions] = useState({});
  const [preferences, setPreferences] = useState(INITIAL_PREFS);
  const navigate = useNavigate();


  const convertToFeet = useCallback((inches) => {
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    return `${feet}′ ${remainingInches}″`;
  }, []);

  const handleItemClick = useCallback((section, field) => {
    setCurrentField({ section, field });
    setModalTitle(field === "title"
      ? `${section.charAt(0).toUpperCase() + section.slice(1)} Preferences`
      : camelCaseToNormalText(field)
    );

    // Handle checkbox fields
    if (FIELD_OPTIONS_MAP[field]) {
      const currentValue = preferences[section][field];
      setSelectedOptions(prev => ({
        ...prev,
        [field]: currentValue === "Open to All" ? ["Open to All"] :
          currentValue.includes(",") ? currentValue.split(",").map(s => s.trim()) :
            currentValue ? [currentValue] : []
      }));
    } else {
      setInputValue(
        field === "ageRange" ? ranges.age.join("-") :
          field === "heightRange" ? ranges.height.join("-") :
            preferences[section][field]
      );
    }
    setShowModal(true);
  }, [preferences, ranges]);

  const handleSave = useCallback(() => {
    if (!currentField) return;
    const { section, field } = currentField;

    const isCheckboxField = FIELD_OPTIONS_MAP[field];
    const newValue = isCheckboxField
      ? selectedOptions[field].includes("Open to All") ||
        selectedOptions[field].length === FIELD_OPTIONS_MAP[field].length
        ? "Open to All"
        : selectedOptions[field].join(", ")
      : inputValue;

    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: newValue
      }
    }));

    setShowModal(false);


  }, [currentField, inputValue, selectedOptions, navigate]);


  const handleRangeChange = useCallback((type, value) => {
    setRanges(prev => ({ ...prev, [type]: value }));
    const formatValue = type === "height"
      ? `${convertToFeet(value[0])} – ${convertToFeet(value[1])}`
      : type === "income"
        ? `INR ${value[0]} lakh to ${value[1]} lakhs`
        : `${value[0]} – ${value[1]}`;

    setPreferences(prev => ({
      ...prev,
      [type === "income" ? "education" : "basic"]: {
        ...prev[type === "income" ? "education" : "basic"],
        [type === "income" ? "annualIncome" : type + "Range"]: formatValue
      }
    }));
  }, [convertToFeet]);

  const handleCheckboxChange = useCallback((field, value) => {
    setSelectedOptions(prev => {
      const currentSelections = prev[field] || [];

      if (value === "Open to All") {
        return {
          ...prev,
          [field]: currentSelections.includes("Open to All") ? [] : ["Open to All"]
        };
      }

      let newSelected = currentSelections.filter(v => v !== "Open to All");
      const index = newSelected.indexOf(value);

      index > -1 ? newSelected.splice(index, 1) : newSelected.push(value);

      if (newSelected.length === FIELD_OPTIONS_MAP[field].length) {
        newSelected = ["Open to All"];
      }

      return {
        ...prev,
        [field]: newSelected
      };
    });
  }, []);
  const handleNext=()=>{
    navigate("/dashboard")
  }


  const renderModalContent = useCallback(() => {
    if (!currentField) return null;
    const { field } = currentField;

    // Check if it's a slider field
    if (field === "ageRange" || field === "heightRange" || field === "annualIncome") {
      const type = field === "annualIncome" ? "income" : field.replace("Range", "");
      return (
        <SliderModal
          title={camelCaseToNormalText(field)}
          value={ranges[type]}
          min={type === "age" ? 20 : type === "height" ? 48 : 1}
          max={type === "age" ? 73 : type === "height" ? 84 : 20}
          onChange={(v) => handleRangeChange(type, v)}
          formatValue={type === "height" ?
            (val) => `${convertToFeet(val[0])} - ${convertToFeet(val[1])}` :
            undefined}
        />
      );
    }

    // Check if it's a checkbox field
    if (FIELD_OPTIONS_MAP[field]) {
      return (
        <CheckboxModal
          title={camelCaseToNormalText(field)}
          options={[{ value: "Open to All", label: "Open to All" }, ...FIELD_OPTIONS_MAP[field]]}
          selectedValues={selectedOptions[field] || []}
          onChange={(value) => handleCheckboxChange(field, value)}
        />
      );
    }

    // Default to input field
    return <InputModal value={inputValue} onChange={setInputValue} />;
  }, [currentField, ranges, inputValue, selectedOptions, handleRangeChange, handleCheckboxChange, convertToFeet]);

  const visibleSections = showExtraCards
    ? PREFERENCE_SECTIONS
    : PREFERENCE_SECTIONS.slice(0, 2);


  return (
    <>
      <Header />
      <div className="verfiy-profile">
        <div className="partner-perfrence">
          <div className="container">
            <h2>Recommended Partner Preferences</h2>
            <p className="note">Tap on the field to edit</p>

            {visibleSections.map(section => (
              <PreferenceCard
                key={section.section}
                {...section}
                preferences={preferences}
                onItemClick={handleItemClick}
              />
            ))}

            {!showExtraCards && (
              <button id="btn-more" className="btn" onClick={() => setShowExtraCards(true)}>
                More
              </button>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{renderModalContent()}</Modal.Body>
              <Modal.Footer>
                <button className="btn btn-primary" onClick={handleSave}>
                  {/* {currentField?.field === "ageRange" ||
                  currentField?.field === "heightRange" ||
                  currentField?.field === "annualIncome" ? "Close" : "Save"} */}
                  Save

                </button>
              </Modal.Footer>
            </Modal>
             <button
              className="btn btn-primary"
              style={{ background: "var(--color-primary)", color: "white" }}
              onClick={handleNext}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartnerPreferences;