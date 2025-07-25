import React from 'react';
import FilterSection from './FilterSection';

const RefineSearchSidebar = () => {
  const filterSections = [
    {
      title: "Verification Status",
      type: "checkbox",
      options: [
        { label: "All", count: null },
        { label: "Blue Tick Profiles", count: null, isNew: true }
      ]
    },
    {
      title: "Photo Settings",
      type: "checkbox",
      options: [
        { label: "All", count: null },
        { label: "Visible to all", count: 62 },
        { label: "Protected Photos", count: 62 }
      ]
    },
    {
      title: "Recently Joined",
      type: "radio",
      options: [
        { label: "All", count: null },
        { label: "Within a day", count: 62 },
        { label: "Within a week", count: 62 },
        { label: "Within a month", count: 62 }
      ]
    },
    {
      title: "Active Members",
      type: "radio",
      options: [
        { label: "All", count: null },
        { label: "Within a day", count: 62 },
        { label: "Within a week", count: 62 },
        { label: "Within a month", count: 62 }
      ]
    },
    {
      title: "Annual Income",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "All", count: null },
        { label: "upto INR 1Lakh", count: 30 },
        { label: "INR 1-5 Lakh", count: 45 },
        { label: "INR 5-10 Lakh", count: 28 }
      ]
    },
    {
      title: "Marital Status",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Never married" },
        { label: "Divorced" },
        { label: "Widowed" }
      ]
    },
    {
      title: "Religion",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Hindu" }
      ]
    },
    {
      title: "Community",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Jat" },
        { label: "Thakur" },
        { label: "Other" }
      ]
    },
    {
      title: "Mother Tongue",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Hindi" },
        { label: "Punjabi" },
        { label: "Other" }
      ]
    },
    {
      title: "Country Live In",
      type: "checkbox",
      options: [
        { label: "India" },
        { label: "UK" },
        { label: "Kenya" },
        { label: "Other" }
      ]
    },
    {
      title: "State Live In",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "UP" },
        { label: "MP" },
        { label: "Delhi NCR" }
      ]
    },
    {
      title: "Country Grew Up In",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "India" }
      ]
    },
    {
      title: "Working With",
      type: "checkbox",
      options: [
        { label: "Private Company" },
        { label: "Government" },
        { label: "Non Working" }
      ]
    },
    {
      title: "Profession Area",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "Bank" },
        { label: "IT" },
        { label: "Education" }
      ]
    },
    {
      title: "Profile Managed By",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Self" },
        { label: "Parents" }
      ]
    },
    {
      title: "Eating habits",
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Veg" },
        { label: "Non Veg" }
      ]
    },
    {
      title: "Education Level",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Bachelor" },
        { label: "Master" }
      ]
    },
    {
      title: "Education Area",
      showMore: true,
      type: "checkbox",
      options: [
        { label: "All" },
        { label: "Arts" },
        { label: "Science" }
      ]
    }
  ];

  return (
    <div className="left-sidebar">
      <div className="bg-gray border rounded">
        <div className="side-heading p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 fw-semibold text-dark">Refine Search</h6>
          </div>
        </div>

        {filterSections.map((section, index) => (
          <FilterSection 
            key={index}
            title={section.title}
            type={section.type}
            options={section.options}
            showMore={section.showMore}
          />
        ))}
      </div>
    </div>
  );
};

export default RefineSearchSidebar;
