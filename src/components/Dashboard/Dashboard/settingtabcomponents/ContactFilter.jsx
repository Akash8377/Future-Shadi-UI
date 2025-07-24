import React, { useState } from "react";

const ContactFilter = () => {
  const [mainOpen, setMainOpen] = useState(false);
  const [subOpen, setSubOpen] = useState({
    age: false,
    height: false,
    country: false,
    religion: false,
    community: false,
    language: false,
    marital: false,
  });

  const toggleSub = (key) => {
    setSubOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className={`accordion-button ${mainOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => setMainOpen(!mainOpen)}
        >
          Contact Filters
        </button>
      </h2>

      {mainOpen && (
        <div className="accordion-collapse collapse show">
          <div className="accordion-body">
            <div className="container mt-5">
              <div className="border rounded shadow-sm bg-white">
                <div className="p-3 border-bottom">
                  <h5 className="mb-1">Who can contact me?</h5>
                  <small className="text-muted">
                    Only Members matching the below criteria will get to see your contact details.
                  </small>
                  <br />
                  <small className="text-muted fst-italic">Tap on the field to edit</small>
                </div>

                <div className="accordion" id="contactAccordion">
                  {[
                    { key: "age", label: "Age", value: "18 - 28", color: "text-success" },
                    { key: "height", label: "Height", value: "4' 5\" - 7' 0\"", color: "text-warning" },
                    { key: "country", label: "Country", value: "Open to all", color: "text-primary" },
                    { key: "religion", label: "Religion", value: "Hindu, Sikh, Jain", color: "text-warning" },
                    { key: "community", label: "Community", value: "Open to all", color: "text-danger" },
                    { key: "language", label: "Mother tongue", value: "Open to all", color: "text-info" },
                    { key: "marital", label: "Marital Status", value: "Open to all", color: "text-danger" },
                  ].map(({ key, label, value, color }) => (
                    <div className="accordion-item" key={key}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button d-flex align-items-center ${subOpen[key] ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => toggleSub(key)}
                        >
                          <span className={`icon-label ${color}`}>{label}</span>
                          <span className="value-label ms-auto">{value}</span>
                        </button>
                      </h2>
                      {subOpen[key] && (
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            <div className="box">
                              <label>Selected {label}</label>
                              <div className="select-container">
                                <span className="tag">
                                  Open to all{" "}
                                  <button onClick={() => alert("Remove logic not implemented")}>×</button>
                                </span>
                                <input className="select-input" type="text" placeholder={`Search ${label}...`} />
                                <span className="select-arrow">▼</span>
                              </div>
                              <div className="buttons mt-3">
                                <button className="btn btn-cancel me-2">Cancel</button>
                                <button className="btn btn-submit" disabled>
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFilter;
