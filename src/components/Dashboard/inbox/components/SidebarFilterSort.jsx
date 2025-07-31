import React from "react";

const SidebarFilterSort = () => {
  return (
    <div className="left-sidebar">
      {/* Sort Section */}
      <div className="bg-gray border rounded mb-3">
        <div className="d-flex justify-content-between align-items-center p-2 bg-light">
          <strong className="text-dark small">Sort</strong>
          <span style={{ cursor: 'pointer' }}>−</span>
        </div>
        <div className="p-2">
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="sort" id="mostRelevant" defaultChecked />
            <label className="form-check-label" htmlFor="mostRelevant">Most Relevant</label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="sort" id="newestFirst" />
            <label className="form-check-label" htmlFor="newestFirst">Newest First</label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="sort" id="olderFirst" />
            <label className="form-check-label" htmlFor="olderFirst">Older First</label>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gray border rounded">
        <div className="d-flex justify-content-between align-items-center p-2 bg-light">
          <strong className="text-dark small">Filter</strong>
          <span style={{ cursor: 'pointer' }}>−</span>
        </div>
        <div className="p-2">
          {[
            { id: 'allRequest', label: 'All Request', defaultChecked: true },
            { id: 'blueTick', label: <>Blue Tick Members <span className="badge bg-primary rounded-pill ms-1" style={{ fontSize: '10px' }}>NEW</span></> },
            { id: 'superConnects', label: 'Super Connects' },
            { id: 'premiumMembers', label: 'Premium Members' },
            { id: 'onlineNow', label: 'Members Online Now' },
            { id: 'photosVerified', label: 'Photos Verified Members' },
            { id: 'withPhotos', label: 'Members With Photos' },
          ].map(option => (
            <div className="form-check mt-2" key={option.id}>
              <input
                className="form-check-input"
                type="radio"
                name="filter"
                id={option.id}
                defaultChecked={option.defaultChecked || false}
              />
              <label className="form-check-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilterSort;
