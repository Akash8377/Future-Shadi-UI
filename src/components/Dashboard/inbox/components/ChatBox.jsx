import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import config from '../../../../config';
import { connectSocket, getSocket } from '../../../../utils/socket';
import { calculateAge } from '../../../../utils/helpers';

const ChatBox = () => {
  const user = useSelector((state) => state.user.userInfo);
  const currentUserId = user?.id ? String(user.id) : null;
  const lookingFor = user?.looking_for;
  const searchFor = lookingFor === "Bride" ? "Groom" : "Bride";

  const [allUsers, setAllUsers] = useState([]);
  const [alertItems, setAlertItems] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('tab-alerts');
  const [showChatbox, setShowChatbox] = useState(false);
  const [showHoverBox, setShowHoverBox] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [hoverItem, setHoverItem] = useState({})

    // Store messages per conversation
  const [conversations, setConversations] = useState({});
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);


  const fetchFilteredProfiles = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/api/inbox/chat-users`,
        {
          params: {
            user_id: user.id,
            looking_for: searchFor,
          },
        }
      );
      const users = response.data.users || [];
      // console.log("All Users",users)
      setAllUsers(users);
      setAlertItems(users.filter(u => u.connectionRequest === true));
      setActiveUsers(users.filter(u => u.online === true));
    } catch (error) {
      console.error("Error fetching profiles", error);
    }
  };

  // useEffect(() => {
  // if (user?.id && searchFor) {
  //   fetchFilteredProfiles();
  // }
  // }, []);
  useEffect(() => {
  if (user?.id && searchFor) {
    // Call immediately on mount
    fetchFilteredProfiles();

    // Set up an interval to call every second (3000ms)
    const intervalId = setInterval(() => {
      fetchFilteredProfiles();
    }, 3000);

    // Clean up the interval on unmount or dependency change
    return () => clearInterval(intervalId);
  }
}, [user?.id, searchFor]); // Add dependencies to avoid stale closures

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const openChatbox = (user) => {
    console.log("Open chat box")
    setSelectedUser(user);
    setShowChatbox(true);
  };

  const closeChatbox = () => {
    setShowChatbox(false);
  };

  const toggleHoverBox = (show, userItem={}) => {
    setHoverItem(userItem)
    setShowHoverBox(show);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Connect socket when component mounts
  useEffect(() => {
    if (!user?.token) return;
    
    connectSocket(user.token);
    socketRef.current = getSocket();
    
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [user?.token]);

  useEffect(() => {
    const fetchMessageHistory = async () => {
      if (!selectedUser || !currentUserId) return;
      
      try {
        const response = await axios.get(
          `${config.baseURL}/api/messages/history`,
          {
            params: {
              user1: currentUserId,
              user2: selectedUser.id
            }
          }
        );
        
        setConversations(prev => ({
          ...prev,
          [selectedUser.id]: response.data.messages || []
        }));
      } catch (error) {
        console.error("Error fetching message history", error);
      }
    };

    fetchMessageHistory();
  }, [selectedUser, currentUserId]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations[selectedUser?.id]]);

// Update the sendMessage function
 const sendMessage = async () => {
    if (!inputMessage.trim() || !selectedUser || !currentUserId) return;

    try {
      // Send via HTTP API
      const response = await axios.post(`${config.baseURL}/api/messages/send`, {
        sender_id: currentUserId,
        receiver_id: selectedUser.id,
        content: inputMessage.trim()
      });

      // Add to local state immediately for instant UI update
      setConversations(prev => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), response.data.message]
      }));
      
      setInputMessage('');
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

// Handle incoming messages
  useEffect(() => {
    if (!socketRef.current) return;
    
    const handleReceiveMessage = (msg) => {
      console.log("Received message:", msg);
      if (!msg || !msg.sender_id || !msg.receiver_id) return;
      
      setConversations(prev => {
        // Determine conversation partner ID
        const partnerId = 
          msg.sender_id === currentUserId ? msg.receiver_id : msg.sender_id;
        
        return {
          ...prev,
          [partnerId]: [...(prev[partnerId] || []), msg]
        };
      });
    };

    socketRef.current.on('receive-message', handleReceiveMessage);
    
    return () => {
      if (socketRef.current) {
        socketRef.current.off('receive-message', handleReceiveMessage);
      }
    };
  }, [currentUserId]);


  const currentMessages = selectedUser ? conversations[selectedUser.id] || [] : [];

  return (
    <div className="col-md-3">
      <div className="chat-box">
        <div className="header">
          <div className="status comment">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
            I am Online ▼
          </div>
          <div className="status">
            <i className="fa fa-volume-up" aria-hidden="true"></i>
          </div>
          <div className="drop-box" onClick={toggleMinimize}>
            <i className={`fa ${isMinimized ? 'fa-plus' : 'fa-minus'} cursor-pointer`} aria-hidden="true"></i>
          </div>
        </div>
        {!isMinimized && (
          <div className="tab-container">
            <input type="radio" name="tab" id="tab-alerts" checked={activeTab === 'tab-alerts'} onChange={() => handleTabChange('tab-alerts')} />
            <input type="radio" name="tab" id="tab-chats" checked={activeTab === 'tab-chats'} onChange={() => handleTabChange('tab-chats')} />
            <input type="radio" name="tab" id="tab-active" checked={activeTab === 'tab-active'} onChange={() => handleTabChange('tab-active')} />

            <div className="tab-content content">
              {alertItems.map((item, index) => (
                <div id="alerts" key={item.id} className="chat-box-tab" style={{ display: activeTab === 'tab-alerts' ? 'block' : 'none' }}>
                  <div className="online-box">
                    <div className="user-item" key={index}>
                      <img src={`${config.baseURL}/uploads/profiles/${item.profile_image}`} alt={item.name} className="user-img" />
                      <div className="user-info">
                        <div><strong>{item.first_name}{" "}{item.last_name}</strong> {" "}
                        {/* {item.notification_message} */}
                        wants to connect with you
                        </div>
                        <div className="date">{item.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeUsers.map((item, index) => (
                <div id="chats" className="chat-box-tab" style={{ display: activeTab === 'tab-chats' ? 'block' : 'none' }}>
                  <div className="online-box">
                    {/* <div className="user-list-chat-box"> */}
                    <div className={`chat-item ${item.online === false ? "offline":""}`} key={index}>
                      <div className="chat-info" key={item.id}>
                        <img src={item.profile_image ? `${config.baseURL}/uploads/profiles/${item.profile_image}` : "images/womenpic.jpg"} className="chat-img" alt={item.name} />
                        <div className="chat-text">
                          <strong>{item.first_name}</strong><br />
                          <small>{item.last_name}</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="msg-date">{item.date}</div>
                        {item.online && (<div className="online-dot"></div>)}
                      </div>
                    {/* </div> */}
                    </div>
                  </div>
                </div>
              ))}

              <div id="active" className="chat-box-tab" style={{ display: activeTab === 'tab-active' ? 'block' : 'none' }}>
                <div className="online-box">
                  <div className="user-list-chat-box">
                    <div className="p-2 fw-bold border-bottom">My Matches ({activeUsers.length})</div>
                    {allUsers.map((userItem, index) => (
                      <div
                        className={`user-item ${userItem.online === false ? "offline":""}`}
                        key={userItem.id}
                        onClick={() => openChatbox(userItem)}
                        onMouseEnter={() => toggleHoverBox(true, userItem)}
                        onMouseLeave={() => toggleHoverBox(false)}
                      >
                        <img src={userItem.profile_image ? `${config.baseURL}/uploads/profiles/${userItem.profile_image}` : "images/womenpic.jpg"} alt={userItem.name} />
                        <span>{userItem.first_name} {userItem.last_name}</span>
                        {userItem.online && (<div className="online-dot"></div>)}
                      </div>
                    ))}
                  </div>
                </div>

                {showChatbox && (
                  <div className="chatbox" id="chatbox">
                    <div className="chat-header d-flex justify-content-between align-items-center">
                      <span>{selectedUser?.name || 'Chat'}</span>
                      <button className="btn-close btn-close-white" onClick={closeChatbox}></button>
                    </div>
                    <div className="chat-body">
                        <div className="chat-messages">
                          {currentMessages.map((msg, idx) => (
                            <div className={` ${msg.sender_id === currentUserId ? 'sent' : 'received'}`}>
                              <div key={idx} className={`chat-msg`}>
                              {msg.content}
                              <div className="text-end text-muted" style={{fontSize:"11px"}}>
                                {new Date(msg.sent_at).toLocaleTimeString()}
                              </div>
                              </div>
                            </div>
                          ))}
                      <div ref={messagesEndRef} />
                    </div>
                    </div>
                    <div className="chat-footer d-flex">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Type a message"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <button className="btn" onClick={sendMessage}>➤</button>
                    </div>
                  </div>
                )}

                {showHoverBox && (
                  <div id="himanshi-hover-box" className="hover-box">
                    <div className="chat-hover" id="chatHover">
                      <div className="profile-card">
                        <div className="profile-left">
                          <img src={hoverItem.profile_image ? `${config.baseURL}/uploads/profiles/${hoverItem.profile_image}` : "images/womenpic.jpg"} alt={hoverItem.name} className="hover-box-profile-img" />
                          {/* <button className="photo-btn">Request a Photo</button> */}
                        </div>
                        <div className="profile-right">
                          <h5 className="name">{hoverItem?.first_name} {hoverItem?.last_name}</h5>
                          <table className="profile-details">
                            <tbody>
                              <tr><td>Age / Height</td><td>: {calculateAge(hoverItem?.birth_year,hoverItem?.birth_month,hoverItem?.birth_day)}, {hoverItem?.height}</td></tr>
                              <tr><td>Religion/Community</td><td>: {hoverItem?.religion}, {hoverItem?.community}</td></tr>
                              <tr><td>Mother Tongue</td><td>: {hoverItem?.mother_tongue}</td></tr>
                              <tr><td>Profession</td><td>: {hoverItem?.profession}</td></tr>
                              <tr><td>Location</td><td>: {hoverItem?.city}, {hoverItem?.country}</td></tr>
                            </tbody>
                          </table>
                          {/* <div className="profile-actions">
                            <button className="accept-btn">Accept</button>
                            <button className="decline-btn">Decline</button>
                          </div> */}
                          {/* <div className="upgrade-text">
                            <a href="#">Upgrade Now to start Chatting</a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="tabs">
              <label htmlFor="tab-alerts" onClick={() => handleTabChange('tab-alerts')}>
                <i className="fa fa-bell-o" aria-hidden="true"></i> Alerts
              </label>
              <label htmlFor="tab-chats" onClick={() => handleTabChange('tab-chats')}>
                <i className="fa fa-comments" aria-hidden="true"></i> Chats
              </label>
              <label htmlFor="tab-active" onClick={() => handleTabChange('tab-active')}>
                <i className="fa fa-bell-o" aria-hidden="true"></i> Active
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;



// import React, { useState } from 'react';

// const ChatBox = () => {
//   const [activeTab, setActiveTab] = useState('tab-alerts');
//   const [showChatbox, setShowChatbox] = useState(false);
//   const [showHoverBox, setShowHoverBox] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(true);

//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const openChatbox = () => {
//     console.log("openChatbox")
//     setShowChatbox(true);
//   };

//   const closeChatbox = () => {
//     console.log("closeChatbox")
//     setShowChatbox(false);
//   };

//   const toggleHoverBox = (show) => {
//     setShowHoverBox(show);
//   };

//   const toggleMinimize = () => {
//     setIsMinimized(!isMinimized);
//   };

//   // Chat data for alerts tab
//   const alertItems = [
//     { name: "Anjali C", message: "has sent you an Invitation to Connect.", date: "Yesterday" },
//     { name: "Manisha S", message: "has sent you an Invitation to Connect.", date: "Yesterday" },
//     { name: "Priya M", message: "has viewed your invitation.", date: "29 Jul" },
//     { name: "Sapna M", message: "has sent you an Invitation to Connect.", date: "23 Jul" }
//   ];

//   // Chat data for chats tab
//   const chatItems = [
//     { name: "Anjali Choudhary", message: "Contact no. 96343774...", date: "Yesterday", badge: 1 },
//     { name: "Manisha S", message: "Has messaged you", date: "Yesterday", badge: 1 },
//     { name: "Shivani K", message: "Has messaged you", date: "11/07/2025", badge: 1 }
//   ];

//   // User data for active tab
//   const activeUsers = [
//     { name: "Neha S" },
//     { name: "Himanshi P" },
//     { name: "Bubble G" }
//   ];

//   return (
//     <div className="col-md-3">
//       <div className="chat-box">
//         <div className="header">
//                   <div className="status comment">
//                     <i className="fa fa-comments-o" aria-hidden="true"></i>
//                     I am Online ▼
//                   </div>
//                   <div className="status">
//                     <i className="fa fa-volume-up" aria-hidden="true"></i>
//                   </div>
//                   <div className="drop-box" onClick={toggleMinimize}>
//                     <i className={`fa ${isMinimized ? 'fa-plus' : 'fa-minus'} cursor-pointer`} aria-hidden="true"></i>
//                   </div>
//                 </div>
//                 {!isMinimized && (<div className="tab-container" >
//           {/* Hidden radio buttons */}
//           <input 
//             type="radio" 
//             name="tab" 
//             id="tab-alerts" 
//             checked={activeTab === 'tab-alerts'}
//             onChange={() => handleTabChange('tab-alerts')}
//           />
//           <input 
//             type="radio" 
//             name="tab" 
//             id="tab-chats" 
//             checked={activeTab === 'tab-chats'}
//             onChange={() => handleTabChange('tab-chats')}
//           />
//           <input 
//             type="radio" 
//             name="tab" 
//             id="tab-active" 
//             checked={activeTab === 'tab-active'}
//             onChange={() => handleTabChange('tab-active')}
//           />

//           {/* Content Area */}
//           <div className="tab-content content">
//             {/* Alerts Tab */}
//             {!isMinimized && alertItems.map((item, index) => (
//             <div id="alerts" className="chat-box-tab" style={{ display: activeTab === 'tab-alerts' ? 'block' : 'none' }}>
//               <div className="online-box">
//                 {/* Users */}
//                   <div className="user-item" key={index}>
//                     <img src="images/matchesprofile.jpg" alt={item.name} className="user-img" />
//                     <div className="user-info">
//                       <div><strong>{item.name}</strong> {item.message}</div>
//                       <div className="date">{item.date}</div>
//                     </div>
//                   </div>
//               </div>
//             </div>
//                 ))}

//             {/* Chats Tab */}
//             {!isMinimized && chatItems.map((item, index) => (
//             <div id="chats" className="chat-box-tab" style={{ display: activeTab === 'tab-chats' ? 'block' : 'none' }}>
//               <div className="online-box">
//                   <div className="chat-item" key={index}>
//                     <div className="chat-info">
//                       <img src="images/matchesprofile.jpg" className="chat-img" alt={item.name} />
//                       <div className="chat-text">
//                         <strong>{item.name}</strong><br />
//                         <small>{item.message}</small>
//                       </div>
//                     </div>
//                     <div className="text-end">
//                       <div className="msg-date">{item.date}</div>
//                       <div className="badge-circle mt-1">{item.badge}</div>
//                     </div>
//                   </div>
//               </div>
//             </div>
//                 ))}

//             {/* Active Tab */}
//             <div id="active" className="chat-box-tab" style={{ display: activeTab === 'tab-active' ? 'block' : 'none' }}>
//               {!isMinimized && (
//               <div className="online-box">
//                   <>
//                     {/* Sidebar */}
//                     <div className="user-list-chat-box">
//                       <div className="p-2 fw-bold border-bottom">My Matches (20)</div>
//                       {activeUsers.map((user, index) => (
//                         <div 
//                           className="user-item" 
//                           key={index}
//                         //   onClick={openChatbox}
//                           onClick={index === 0 ? openChatbox : undefined}
//                           onMouseEnter={() => index === 1 && toggleHoverBox(true)}
//                           onMouseLeave={() => index === 1 && toggleHoverBox(false)}
//                         >
//                           <img src="images/matchesprofile.jpg" alt={user.name} />
//                           <span>{user.name}</span>
//                           <div className="online-dot"></div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//               </div>
//                 )}

//               {/* Chatbox */}
//               {!isMinimized && showChatbox && (
//                 <div className="chatbox" id="chatbox">
//                   <div className="chat-header d-flex justify-content-between align-items-center">
//                     <span>Anjali C</span>
//                     <button className="btn-close btn-close-white" onClick={closeChatbox}></button>
//                   </div>
//                   <div className="chat-body">
//                     <div className="chat-box2">
//                       <div className="chat-img1">
//                         <img src="images/matchesprofile.jpg" alt="Neha S" />
//                       </div>
//                       <div className="chat-para">
//                         <p className="mb-0">
//                           <strong>25, 5' 3"</strong><br />
//                           Hindu, Jat,<br />
//                           Human Resources Pr...<br />
//                           Meerut, Uttar Pradesh.
//                         </p>
//                         <div className="chat-actions">
//                           <button className="btn btn-success btn-sm">Accept</button>
//                           <button className="btn btn-outline-secondary btn-sm">Decline</button>
//                         </div>
//                       </div>
//                     </div>
//                     <hr />
//                     <small className="text-muted">05 Aug 2025</small>
//                     <div className="chat-msg">
//                       Contact no. - 9634377472 (Devendra kumar)<br />
//                       Time 10-12noon and 6-10pm
//                       <div className="text-end text-muted small mt-1">10:33 PM</div>
//                     </div>
//                     <div className="chat-img1">
//                       <img src="images/matchesprofile.jpg" alt="Neha S" />
//                     </div>
//                   </div>
//                   <div className="chat-footer d-flex">
//                     <input type="text" className="form-control me-2" placeholder="Type a message" />
//                     <button className="btn">➤</button>
//                   </div>
//                 </div>
//                 )}

//               {!isMinimized && showHoverBox && (
//                 <div id="himanshi-hover-box" className="hover-box">
//                   <div className="chat-hover" id="chatHover">
//                     <div className="profile-card">
//                       <div className="profile-left">
//                         <img src="images/matchesprofile.jpg" alt="Tanu C" className="hover-box-profile-img" />
//                         <button className="photo-btn">Request a Photo</button>
//                       </div>
//                       <div className="profile-right">
//                         <h5 className="name">Tanu C</h5>
//                         <table className="profile-details">
//                           <tbody>
//                             <tr>
//                               <td>Age / Height</td>
//                               <td>: 22, 5' 6"</td>
//                             </tr>
//                             <tr>
//                               <td>Religion/Community</td>
//                               <td>: Hindu, Jat</td>
//                             </tr>
//                             <tr>
//                               <td>Mother Tongue</td>
//                               <td>: Hindi</td>
//                             </tr>
//                             <tr>
//                               <td>Profession</td>
//                               <td>: Not working</td>
//                             </tr>
//                             <tr>
//                               <td>Location</td>
//                               <td>: Delhi, Delhi-NCR</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                         <div className="profile-actions">
//                           <button className="accept-btn">Accept</button>
//                           <button className="decline-btn">Decline</button>
//                         </div>
//                         <div className="upgrade-text">
//                           <a href="#">Upgrade Now to start Chatting</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Tabs at the Bottom */}
//           {!isMinimized && (
//             <div className="tabs">
//               <label htmlFor="tab-alerts" onClick={() => handleTabChange('tab-alerts')}>
//                 <i className="fa fa-bell-o" aria-hidden="true"></i> Alerts
//               </label>
//               <label htmlFor="tab-chats" onClick={() => handleTabChange('tab-chats')}>
//                 <i className="fa fa-comments" aria-hidden="true"></i> Chats
//               </label>
//               <label htmlFor="tab-active" onClick={() => handleTabChange('tab-active')}>
//                 <i className="fa fa-bell-o" aria-hidden="true"></i> Active
//               </label>
//             </div>
//           )}
//         </div>)}
//       </div>
//     </div>
//   );
// };

// export default ChatBox;