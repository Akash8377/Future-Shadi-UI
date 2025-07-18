import React from "react";
import PreferenceItem from "./PreferenceItem";

const PreferenceCard = ({ 
  section, 
  title, 
  iconClass, 
  preferences, 
  fields, 
  onItemClick 
}) => {
  return (
    <section className="pref-card">
      <div className="pref-head" onClick={() => onItemClick(section, "title")}>
        <i className={iconClass} aria-hidden="true"></i>
        <span className="title">{title}</span>
      </div>
      <ul className="pref-body">
        {fields.map((field) => (
          <PreferenceItem
            key={field}
            section={section}
            field={field}
            value={preferences[section][field]}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default PreferenceCard;