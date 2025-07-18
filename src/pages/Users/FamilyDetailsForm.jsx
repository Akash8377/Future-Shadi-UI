import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import FamilyForm from "../../components/UserProfile/FamilyForm";
import FinancialForm from "../../components/UserProfile/FinancialForm";
import { toast } from "../../components/Common/Toast";

const FamilyDetailsForm = () => {
  const [familyDetails, setFamilyDetails] = useState({
    mother: "", father: "", sisters: "", brothers: ""
  });
  const [financialStatus, setFinancialStatus] = useState("");
  const [showFinancialForm, setShowFinancialForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFamilyChange = (e) => {
    const { name, value } = e.target;
    setFamilyDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleFinancialChange = (e) => setFinancialStatus(e.target.value);

  const handleFamilySubmit = (e) => {
    e.preventDefault();
    setShowFinancialForm(true);
  };

  const handleFinancialSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", { ...location.state, familyDetails, financialStatus });
    toast.success("Data saved successfully!");
    navigate("/partner-preferences", {state: { ...location.state, familyDetails, financialStatus }})
  };

  return (
    <>
      <Header />
      <section className="verfiy-profile">
        <div className="verfiy-profile-new">
          {!showFinancialForm ? (
            <FamilyForm 
              familyDetails={familyDetails}
              handleFamilyChange={handleFamilyChange}
              handleFamilySubmit={handleFamilySubmit}
            />
          ) : (
            <FinancialForm 
              financialStatus={financialStatus}
              handleFinancialChange={handleFinancialChange}
              handleFinancialSubmit={handleFinancialSubmit}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FamilyDetailsForm;