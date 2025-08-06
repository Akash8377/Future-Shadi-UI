import React, { useEffect, useState } from "react";
import config from "../../../../config";
import SidebarFilterSort from "./SidebarFilterSort";
import { useSelector } from "react-redux";
import { timeAgo } from "../../../../utils/timeAgo";

const Requested = () => {
  const [receivers, setReceivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const [selectedFilter, setSelectedFilter] = useState("allRequest");
  const [selectedSort, setSelectedSort] = useState("mostRelevant");

  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchAcceptedReceivers = async () => {
      try {
        const response = await fetch(
          `${config.baseURL}/api/inbox/sender/${user.id}`
        );
        const data = await response.json();
        setReceivers(data.sentRequests);
      } catch (error) {
        console.error("Error fetching accepted receivers:", error);
      }
    };

    fetchAcceptedReceivers();
  }, [user.id]);

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // Filter and sort logic
  const applyFilterAndSort = (data) => {
    let filtered = [...data];

    // Filtering
    if (selectedFilter === "onlineNow") {
      filtered = filtered.filter((item) => item.receiver_online);
    } else if (selectedFilter === "withPhotos") {
      filtered = filtered.filter((item) => item.receiver_profile_image);
    }

    // Sorting
    if (selectedSort === "newestFirst") {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (selectedSort === "olderFirst") {
      filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }

    return filtered;
  };

  const filteredReceivers = applyFilterAndSort(receivers);
  const totalPages = Math.ceil(filteredReceivers.length / itemsPerPage);
  const currentReceiver = filteredReceivers[currentPage];

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="all-request-part">
      <div className="row">
        <div className="col-md-3">
          <SidebarFilterSort
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
              namespace="requested"
          />
        </div>

        <div className="col-md-9">
          <div className="tab-container">
            <div className="profile-request">
              {currentReceiver ? (
                <div className="card-profile">
                  <div className="row">
                    <div className="col-md-3 text-center">
                      {currentReceiver.receiver_profile_image ? (
                        <img
                          src={`${config.baseURL}/uploads/profiles/${currentReceiver.receiver_profile_image}`}
                          className="profile-img"
                          alt="Profile"
                        />
                      ) : (
                        <a href="#" className="request-photo-inbox">
                          Request a Photo
                        </a>
                      )}
                    </div>

                    <div className="col-md-7">
                      <div className="d-flex justify-content-between">
                        <div className="profile-part-inbox">
                          <div className="profile-nameinbox">
                            {currentReceiver.receiver_first_name}{" "}
                            {currentReceiver.receiver_last_name}
                          </div>

                          {currentReceiver.receiver_online ? (
                            <div className="text-success mb-2" style={{ fontSize: "14px" }}>
                              <i className="bi bi-circle-fill" style={{ color: "green", fontSize: "10px" }}></i>{" "}
                              Online now
                            </div>
                          ) : (
                            <div className="text-muted mb-2" style={{ fontSize: "14px" }}>
                              <i className="bi bi-clock"></i> Last seen{" "}
                              {timeAgo(currentReceiver.receiver_last_seen)}
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
                          currentReceiver.receiver_birth_day,
                          currentReceiver.receiver_birth_month,
                          currentReceiver.receiver_birth_year
                        )}{" "}
                        yrs, {currentReceiver.receiver_height} <br />
                        {currentReceiver.receiver_community},{" "}
                        {currentReceiver.receiver_religion} <br />
                        {currentReceiver.receiver_city},{" "}
                        {currentReceiver.receiver_living_in} <br />
                        {currentReceiver.receiver_qualification} <br />
                        {currentReceiver.receiver_profession}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>No sent requests found.</p>
              )}

              <div className="viwed-application">
                <img src="images/greencheck.png" alt="Green Check" />
                <p>View All Pending Invitations</p>
              </div>

              <div className="pagination-wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requested;
