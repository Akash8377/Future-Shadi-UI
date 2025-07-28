// import React from 'react';
// import FilterSection from './FilterSection';

// const RefineSearchSidebar = () => {
//   const filterSections = [
//     {
//       title: "Verification Status",
//       type: "checkbox",
//       options: [
//         { label: "All", count: null },
//         { label: "Blue Tick Profiles", count: null, isNew: true }
//       ]
//     },
//     {
//       title: "Photo Settings",
//       type: "checkbox",
//       options: [
//         { label: "All", count: null },
//         { label: "Visible to all", count: 62 },
//         { label: "Protected Photos", count: 62 }
//       ]
//     },
//     {
//       title: "Recently Joined",
//       type: "radio",
//       options: [
//         { label: "All", count: null },
//         { label: "Within a day", count: 62 },
//         { label: "Within a week", count: 62 },
//         { label: "Within a month", count: 62 }
//       ]
//     },
//     {
//       title: "Active Members",
//       type: "radio",
//       options: [
//         { label: "All", count: null },
//         { label: "Within a day", count: 62 },
//         { label: "Within a week", count: 62 },
//         { label: "Within a month", count: 62 }
//       ]
//     },
//     {
//       title: "Annual Income",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "All", count: null },
//         { label: "upto INR 1Lakh", count: 30 },
//         { label: "INR 1-5 Lakh", count: 45 },
//         { label: "INR 5-10 Lakh", count: 28 }
//       ]
//     },
//     {
//       title: "Marital Status",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Never married" },
//         { label: "Divorced" },
//         { label: "Widowed" }
//       ]
//     },
//     {
//       title: "Religion",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Hindu" }
//       ]
//     },
//     {
//       title: "Community",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Jat" },
//         { label: "Thakur" },
//         { label: "Other" }
//       ]
//     },
//     {
//       title: "Mother Tongue",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Hindi" },
//         { label: "Punjabi" },
//         { label: "Other" }
//       ]
//     },
//     {
//       title: "Country Live In",
//       type: "checkbox",
//       options: [
//         { label: "India" },
//         { label: "UK" },
//         { label: "Kenya" },
//         { label: "Other" }
//       ]
//     },
//     {
//       title: "State Live In",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "UP" },
//         { label: "MP" },
//         { label: "Delhi NCR" }
//       ]
//     },
//     {
//       title: "Country Grew Up In",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "India" }
//       ]
//     },
//     {
//       title: "Working With",
//       type: "checkbox",
//       options: [
//         { label: "Private Company" },
//         { label: "Government" },
//         { label: "Non Working" }
//       ]
//     },
//     {
//       title: "Profession Area",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "Bank" },
//         { label: "IT" },
//         { label: "Education" }
//       ]
//     },
//     {
//       title: "Profile Managed By",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Self" },
//         { label: "Parents" }
//       ]
//     },
//     {
//       title: "Eating habits",
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Veg" },
//         { label: "Non Veg" }
//       ]
//     },
//     {
//       title: "Education Level",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Bachelor" },
//         { label: "Master" }
//       ]
//     },
//     {
//       title: "Education Area",
//       showMore: true,
//       type: "checkbox",
//       options: [
//         { label: "All" },
//         { label: "Arts" },
//         { label: "Science" }
//       ]
//     }
//   ];

//   return (
//     <div className="left-sidebar">
//       <div className="bg-gray border rounded">
//         <div className="side-heading p-2">
//           <div className="d-flex justify-content-between align-items-center">
//             <h6 className="mb-0 fw-semibold text-dark">Refine Search</h6>
//           </div>
//         </div>

//         {filterSections.map((section, index) => (
//           <FilterSection 
//             key={index}
//             title={section.title}
//             type={section.type}
//             options={section.options}
//             showMore={section.showMore}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RefineSearchSidebar;

import React from 'react';
import FilterSection from './FilterSection';

const RefineSearchSidebar = ({ setFilters }) => {
  const filterSections = [
    { 
      filterKey: "verificationStatus",
      title: "Verification Status", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "Blue Tick Profiles", value: "verified", isNew: true }
      ]
    },
    { 
      filterKey: "photoSettings",
      title: "Photo Settings", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "Visible to all", value: "public" },
        { label: "Protected Photos", value: "protected" }
      ]
    },
    { 
      filterKey: "recentlyJoined",
      title: "Recently Joined", 
      type: "radio",
      options: [
        { label: "All", value: "all" },
        { label: "Within a day", value: "1" },
        { label: "Within a week", value: "7" },
        { label: "Within a month", value: "30" }
      ]
    },
    { 
      filterKey: "maritalStatus",
      title: "Marital Status", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "Never married", value: "Never Married" },
        { label: "Divorced", value: "Divorced" },
        { label: "Widowed", value: "Widowed" }
      ]
    },
    { 
      filterKey: "religion",
      title: "Religion", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "Hindu", value: "Hindu" },
        { label: "Muslim", value: "Muslim" },
        { label: "Christian", value: "Christian" },
        { label: "Sikh", value: "Sikh" },
        { label: "Other", value: "Other" }
      ]
    },
    { 
      filterKey: "diet",
      title: "Eating habits", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "Veg", value: "Veg" },
        { label: "Non Veg", value: "Non Veg" }
      ]
    },
    { 
      filterKey: "country",
      title: "Country Live In", 
      type: "checkbox",
      options: [
        { label: "All", value: "all" },
        { label: "India", value: "India" },
        { label: "UK", value: "UK" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "Other", value: "Other" }
      ]
    },
    { 
      filterKey: "income",
      title: "Annual Income", 
      type: "checkbox",
      showMore: true,
      options: [
        { label: "All", value: "all" },
        { label: "Upto INR 1 Lakh", value: "0-1" },
        { label: "INR 1-5 Lakh", value: "1-5" },
        { label: "INR 5-10 Lakh", value: "5-10" },
        { label: "INR 10-20 Lakh", value: "10-20" },
        { label: "Above 20 Lakh", value: "20+" }
      ]
    }
  ];

  const handleFilterChange = (filterKey, values) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: values
    }));
  };

  return (
    <div className="left-sidebar">
      <div className="bg-light border rounded p-2">
        <div className="side-heading mb-2">
          <h6 className="fw-semibold text-dark mb-0">Refine Search</h6>
        </div>
        
        {filterSections.map((section, index) => (
          <FilterSection
            key={index}
            filterKey={section.filterKey}
            title={section.title}
            type={section.type}
            options={section.options}
            showMore={section.showMore || false}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default RefineSearchSidebar;