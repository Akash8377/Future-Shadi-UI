import React from 'react';

const RecentSearches = () => {
  return (
    <>
      <h2>Recent Searches</h2>
      <div className="recent-search-box">
        <div className="search-item">
          <div>
            <i className="fa fa-clock-o me-1" aria-hidden="true"></i>
            Hindu, Jat, English +2, 20-26yrs
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
          </div>
        </div>
        <hr />
        <div className="search-item">
          <div className="w-100 d-flex justify-content-between">
            <div className="view-more">
              View More <i className="fa fa-angle-down" aria-hidden="true"></i>
              <div className="hover-box">
                <table>
                  <tbody>
                    <tr>
                      <th>Gender</th>
                      <th>: Female</th>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <th>: 20-26</th>
                    </tr>
                    <tr>
                      <th>Height</th>
                      <th>: 5ft</th>
                    </tr>
                    <tr>
                      <th>Religion/Community</th>
                      <th>: Hindu/Jat</th>
                    </tr>
                    <tr>
                      <th>Country Living In</th>
                      <th>: India</th>
                    </tr>
                    <tr>
                      <th>Mother Tongue</th>
                      <th>: English,Hindi</th>
                    </tr>
                    <tr>
                      <th>Profiles</th>
                      <th>: That me Filtered Me Out</th>
                    </tr>
                    <tr>
                      <th>Account Type</th>
                      <th>: Does Not Matter</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <a href="#" className="delete-btn">Delete</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentSearches;