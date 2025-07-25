import React, { useState } from 'react'

const Advertise = () => {
    
    const [showAllNotifications, setShowAllNotifications] = useState(false);
    
    const handleToggleNotifications = () => {
    setShowAllNotifications((prev) => !prev);
        };
        
  return (
    <div>
       <div className="row g-4 mt-4">
          <div className="col-lg-4">
            <div className="card-lite p-0">
              <img src="images/limitedseat.jpg" className="w-100" />
              <div className="p-3">
                <div className="d-flex">
                  <div className="me-3 text-center">
                    <span className="d-block" style={{ backgroundColor: "#DF8525", color: "#fff", padding: "5px" }}>
                      Jul<br />21
                    </span>
                  </div>
                  <div>
                    <p className="small fw-semibold mb-1">Hindi Singles</p>
                    <p className="small mb-1"><i className="bi bi-clock"></i> 7:59 pm – 9:00 pm</p>
                    <p className="small text-muted mb-0"><i className="bi bi-people"></i> 999 interested • <span className="text-danger">5 Days Left</span></p>
                  </div>
                </div>
                <p className="small text-muted text-center mt-2">To attend this event download the app</p>
                <div className="d-flex justify-content-center gap-2">
                  <button type="button"><img src="images/gpaybutton.jpg" height="28" /></button>
                  <button type="button"><img src="images/applestroe.jpg" height="28" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card-lite p-0">
              <img src="images/futureshadi.jpg" className="w-100" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-lite p-3">
              <h6 className="mb-3">
                <i className="fa fa-bell" aria-hidden="true"></i> Notifications <span className="notif-dot"></span>
              </h6>
              <div className="notif-card" id="noteBox">
                <div className="notif-row">
                  <img src="images/womenpic.jpg" alt="" />
                  <div className="smallnew">
                    <a href="#" className="notif-name">Shivani K</a> has sent you an<br />Interest
                    <div className="text-muted mt-1">11 Jul</div>
                  </div>
                </div>
                {showAllNotifications && (
                    <>
                        <div className="notif-row extra-note">
                        <img src="images/womenpic.jpg" alt="" />
                        <div className="smallnew">
                            <a href="#" className="notif-name">Riya M</a> viewed your profile<br />
                            <div className="text-muted mt-1">9 Jul</div>
                        </div>
                        </div>
                        <div className="notif-row extra-note">
                        <img src="images/womenpic.jpg" alt="" />
                        <div className="smallnew">
                            <a href="#" className="notif-name">Aasha H</a> liked your photo<br />
                            <div className="text-muted mt-1">8 Jul</div>
                        </div>
                        </div>
                    </>
                    )}
                    <span className="view-toggle cursor-pointer text-blue-600" onClick={handleToggleNotifications}>
                        {showAllNotifications ? 'View Less' : 'View All'}
                    </span>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Advertise
