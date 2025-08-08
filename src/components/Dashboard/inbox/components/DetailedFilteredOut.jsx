// import React from "react";

// function DetailedFilteredOut({ filteredOut = [], prefErrorMessage = null }) {
//   const hasPreferenceIssue =
//     prefErrorMessage && prefErrorMessage.toLowerCase().includes("preference");

//   return (
//     <div className="filtred-out">
//       <div className="profile-request">
//         <div className="card-profile">
//           <div className="Filtered-out text-center p-5">
//             <img
//               src="images/filtredout.jpg"
//               alt="Filtered Out"
//               className="mb-4"
//             />
//             {hasPreferenceIssue ? (
//               <>
//                 <h4 className="mb-2">Preference not found</h4>
//                 <p className="mb-4">{prefErrorMessage}</p>
//                 <p className="text-muted">
//                   Please set your partner preferences or verify the data.
//                 </p>
//               </>
//             ) : filteredOut.length === 0 ? (
//               <>
//                 <h4 className="mb-4">There is no filtered out invitations</h4>
//                 <a
//                   href="#"
//                   className="text-decoration-none"
//                   style={{ color: "#d61962" }}
//                 >
//                   View All Matches{" "}
//                   <i className="fa fa-angle-right" aria-hidden="true"></i>
//                 </a>
//               </>
//             ) : (
//               <>
//                 <h4 className="mb-3">Filtered Out Invitations</h4>
//                 <p>{`Found ${filteredOut.length} items filtered out by preference.`}</p>
//                 {/* You can map over filteredOut to show a summary if desired */}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailedFilteredOut;


import React, { useState } from "react";
import config from "../../../../config";
import { timeAgo } from "../../../../utils/timeAgo";
import { Link } from "react-router-dom";

function DetailedFilteredOut({ filteredOut , fetchPreferenceData }) {
  const [currentPage, setCurrentPage] = useState(0);

  // console.log("Receiver Data:", filteredOut);
  const totalPages = filteredOut.length;

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentReceiver = filteredOut[currentPage];

  function calculateAge(day, month, year) {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  }
  
  const handleAccept = async (notificationId) => {
    try {
        const response = await fetch(`${config.baseURL}/api/inbox/accept/${notificationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        });
    const result = await response.json();

    if (response.ok && result.success) {
      console.log("Invitation accepted successfully!");
      await fetchPreferenceData();
    } else {
      console.error(result.message || "Failed to accept invitation.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    console.error("Something went wrong.");
  }
};

const handleReject = async (notificationId) => {
    try {
        const response = await fetch(`${config.baseURL}/api/inbox/deleted/${notificationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        });
    const result = await response.json();

    if (response.ok && result.success) {
      console.log("Invitation Deleted successfully!");
    await fetchPreferenceData();
    } else {
      console.error(result.message || "Failed to delete invitation.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    console.error("Something went wrong.");
  }
};

  if (!currentReceiver) return (<div class="mt-2 filtred-out">
								<div class="profile-request">
									<div class="card-profile">
										<div class="Filtered-out">
											<img src="images/filtredout.jpg"/>
											<h4>There is no filtered out invitations</h4>
											<Link to="/matches" class=" text-decoration-none" style={{color:"#d61962"}}>View All
												Matches <i class="fa fa-angle-right" aria-hidden="true"></i></Link>
										</div>
									</div>
								</div>
							</div>);

  return (
    <div className="profile-request">
      <div className="card-profile">
        <div className="row">
          <div className="col-md-3 text-center">
            { currentReceiver.sender_profile_image ? (
                 <img
              src={`${config.baseURL}/uploads/profiles/${currentReceiver.sender_profile_image}`}
              className="profile-img"
              alt="Profile"
            />) : (
                <a href="#" className="request-photo-inbox">
              Request a Photo
            </a>
            )}
          </div>
          <div className="col-md-7">
            <div className="d-flex justify-content-between">
              <div className="profile-part-inbox">
                <div className="profile-nameinbox">
                  {currentReceiver.sender_first_name}{" "}
                  {currentReceiver.sender_last_name}
                </div>
                {currentReceiver.sender_online ? (
                <div className="text-success mb-2" style={{ fontSize: "14px" }}>
                    <i className="bi bi-circle-fill" style={{ color: "green", fontSize: "10px" }}></i> Online now
                </div>
                ) : (
                <div className="text-muted mb-2" style={{ fontSize: "14px" }}>
                    <i className="bi bi-clock"></i> Last seen {timeAgo(currentReceiver.sender_last_seen)}
                </div>
                )}
              </div>
              <div className="text-muted" style={{ fontSize: "14px" }}>
                {new Date(currentReceiver.created_at).toLocaleDateString()}
              </div>
            </div>
            <hr />
            <div className="profile-info">
              {calculateAge(
                currentReceiver.sender_birth_day,
                currentReceiver.sender_birth_month,
                currentReceiver.sender_birth_year
              )}{" "}
              yrs, {currentReceiver.sender_height} <br />
              {currentReceiver.sender_height} <br />
              {currentReceiver.community}, {currentReceiver.sender_religion}{" "}
              <br />
              {currentReceiver.sender_city}, {currentReceiver.sender_living_in}{" "}
              <br />
              {currentReceiver.sender_qualification} <br />
              {currentReceiver.sender_profession}
            </div>

            <div className="message-box mt-3">
              <div className="meesgae-envlope">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <strong>
                <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                {currentReceiver.sender_first_name}{" "}
                {currentReceiver.sender_last_name}
              </strong>{" "}
              has sent you a message. In the interest of our Premium Members, we
              allow only Premium users to read messages.
              <br />
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#d61962" }}
              >
                Upgrade Now{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 text-center connect-now">
            <div className="text-muted mb-2" style={{ fontSize: "11px" }}>
              {currentReceiver.sender_first_name} invited you to
              <br />
              Connect
            </div>
            <button className="accept-btn mb-3"
                 onClick={() => handleAccept(currentReceiver.id)}
            >
              <img
                src="images/checked.png"
                alt="Check"
                className="mb-2"
                style={{ width: "40px" }}
              />
              <br />
              Accept
            </button>
            <button className="decline-btn"
                onClick={() => handleReject(currentReceiver.id)}
            >
              <img
                src="images/decline.jpg"
                alt="Decline"
                className="mb-2"
                style={{ width: "40px" }}
              />
              <br />
              Decline
            </button>
          </div>
        </div>
      </div>

      <div className="viwed-application">
        <img src="images/greencheck.png" alt="Green Check" />
        <p>View All Received Invitations</p>
      </div>
{totalPages>1 && (<div className="pagination-wrapper">
        <button
          className="pagination-button"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          &larr; Prev
        </button>
        <span className="pagination-info">
          Showing {currentPage + 1} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          Next &rarr;
        </button>
      </div>)}
    </div>
  );
}

export default DetailedFilteredOut;
