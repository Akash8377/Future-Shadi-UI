import React, { useState, useEffect } from "react";
import config from "../../config";
import axios from "axios";
import { useSelector } from "react-redux";

const Notification = ({ onChangeTab }) => {
  const user = useSelector((state) => state.user.userInfo);
  const currentUserId = user?.id;
  const [notifications, setNotifications] = useState([]);

  const handleNotificationRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notificationId ? { ...n, is_read: true } : n))
    );
  };

  const handleNotificationClick = async (notificationId) => {
    try {
      const response = await axios.put(
        `${config.baseURL}/api/notifications/read/${notificationId}`
      );
      handleNotificationRead(notificationId);
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/notifications/${currentUserId}`
        );
        if (response.data.success) {
          setNotifications(response.data.notifications);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    if (currentUserId) fetchNotifications();
  }, [currentUserId]);

  return (
    <div className="all-request-part mt-5">
      <div className="row">
        <div className="col-md-3">
          {/* Sidebar with dummy button */}
          <div className="sidebar-filter-sort">
            <div className="bg-light p-3 rounded small">
              <div className="profile-management">
                <h4>
                  <strong>Manage your Profile</strong>
                </h4>
                <div className="profile-edit-list">
                  <div className="row mt-2">
                    <div className="col-12 col-md-12">
                      <a href="#" onClick={() => onChangeTab("settings")}>
                        My Contact Details
                      </a>
                    </div>
                    <div className="col-12 col-md-12">
                      <a href="#" onClick={() => onChangeTab("settings")}>
                        Add Horoscope Details
                      </a>
                    </div>
                    <div className="col-12 col-md-12">
                      <a href="#" onClick={() => onChangeTab("settings")}>
                        My Orders
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <h5>Notifications</h5>
          <div className="tab-container">
            <div className="profile-request">
              {notifications.length === 0 ? (
                <div className="card-profile">
                  <p className="text-center">No notifications found.</p>
                </div>
              ) : (
                <div className="notification-list">
                  <div className="row">
                    <div className="card-profile d-flex flex-column gap-3">
                      {notifications.map((n, idx) => (
                        <div
                          key={idx}
                          className={`${
                            n.is_read ? "" : "unread-notification"
                          }`}
                          onClick={() => handleNotificationClick(n.id)}
                        >
                          <div className="d-flex justify-content-between">
                            <div className="profile-part-inbox">
                              <div className="small-text fw-semibold">
                                {n.message}
                              </div>
                            </div>
                            <div
                              className="text-muted"
                              style={{ fontSize: "12px" }}
                            >
                              {new Date(n.created_at).toLocaleDateString()}{" "}
                              {new Date(n.created_at).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

// import React, { useState, useEffect } from "react";
// import config from "../../config";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const Notification = () => {
//   const user = useSelector((state) => state.user.userInfo);
//   const currentUserId = user?.id;
//   const [notifications, setNotifications] = useState([]);
//   const handleNotificationRead = (notificationId) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === notificationId ? { ...n, is_read: true } : n))
//     );
//   };

//   const handleNotificationClick = async (notificationId) => {
//     console.log("Handle notification clicked ",notificationId )
//     try {
//       const response = await axios.put(
//         `${config.baseURL}/api/notifications/read/${notificationId}`
//       );
//       console.log("response",response)
//       handleNotificationRead(notificationId);
//     } catch (error) {
//       console.error("Failed to mark notification as read:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get(
//           `${config.baseURL}/api/notifications/${currentUserId}`
//         );
//         if (response.data.success) {
//           setNotifications(response.data.notifications);
//         }
//       } catch (error) {
//         console.error("Failed to fetch notifications:", error);
//       }
//     };

//     if (currentUserId) fetchNotifications();
//   }, [currentUserId]);
//   return (
//     <div className="notification-container">
//       <div className="notification-dropdown">
//         {notifications.length === 0 ? (
//           <div className="notification-item">No notifications</div>
//         ) : (
//           notifications.map((n, idx) => (
//             <div
//               key={idx}
//               className={`notification-item ${n.is_read ? "" : "unread"}`}
//               onClick={() => handleNotificationClick(n.id)}
//             >
//               <div>{n.message}</div>
//               <small>{new Date(n.created_at).toLocaleString()}</small>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notification;
