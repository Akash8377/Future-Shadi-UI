import React from 'react';

function DetailedFilteredOut() {
  return (
    <div className="filtred-out">
      <div className="profile-request">
        <div className="card-profile">
          <div className="Filtered-out text-center p-5">
            <img src="images/filtredout.jpg" alt="Filtered Out" className="mb-4" />
            <h4 className="mb-4">There is no filtered out invitations</h4>
            <a href="#" className="text-decoration-none" style={{ color: '#d61962' }}>
              View All Matches <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedFilteredOut;