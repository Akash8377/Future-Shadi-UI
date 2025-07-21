import React, { useRef } from 'react'

const DashProfile = () => {
    const fileInputRef = useRef(null);

    const handleUploadClick  =() =>{
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }

  return (
    <div>
      <div className="row g-4">
          {/* Profile */}
          <div className="col-lg-3">
            <div className="prof-card">
              <input type="file" 
              accept="image/*" 
              id="photoInput" 
              ref={fileInputRef}
              className="d-none" />
              <div className="avatar-wrap">
                <img id="avatarPreview" src="images/userprofile.png" className="avatar-img" alt="avatar" />
                <span className="avatar-plus" id="uploadTrigger" onClick={handleUploadClick}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
              </div>
              <div className="section d-flex justify-content-between align-items-center">
                <div>
                  <div className="title">Akash Choudhary</div>
                  <div className="small text-muted">SH19430033</div>
                </div>
                <a href="#" className="small fw-semibold text-decoration-none" style={{ color: '#d61962' }}>Edit</a>
              </div>
              <div className="section d-flex justify-content-between align-items-center">
                <div>
                  <div className="small text-muted mb-1">Account Type</div>
                  <div className="fw-semibold" style={{ fontSize: '14px' }}>Free Membership</div>
                </div>
                <a href="#" className="small fw-semibold text-decoration-none" style={{ color: '#d61962' }}>Upgrade</a>
              </div>
              <div className="section d-flex justify-content-between">
                <div>
                  <div className="title" style={{ fontSize: '14px' }}>Blue Tick Verified</div>
                  <div className="small text-muted">Valid till 4‑July‑26</div>
                </div>
                <div className="check-badge">
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Activity summary */}
          <div className="col-lg-6">
            <div className="card-lite p-3">
              <h6>Your Activity Summary</h6>
              <table className="w-100 text-center act-table mb-2">
                <tbody>
                  <tr className="head">
                    <td style={{ width: '33.33%' }}>
                      1<br />
                      <span className="fw-normal text-muted small">Pending Invitations</span>
                    </td>
                    <td style={{ width: '33.33%' }}>
                      0<br />
                      <span className="fw-normal text-muted small">Accepted Invitations</span>
                    </td>
                    <td style={{ width: '33.33%' }}>
                      6 <span className="badge align-top small" style={{ backgroundColor: '#cef8e5' }}>NEW</span><br />
                      <span className="fw-normal text-muted small">Recent Visitors</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-100 text-center act-table mb-2">
                <tbody>
                  <tr className="head">
                    <td style={{ width: '33.33%' }}>
                      <span className="text-primary fw-semibold">Only Premium Members</span> can avail these benefits <i className="fa fa-lock" aria-hidden="true" style={{ color: '#d61962' }}></i>
                    </td>
                    <td style={{ width: '33.33%' }}>
                      0<br />
                      <span className="fw-normal text-muted small">Contacts Viewed</span>
                    </td>
                    <td style={{ width: '33.33%' }}>
                      6<br />
                      <span className="fw-normal text-muted small">Chats initiated</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />
              <p className="small mb-0"><strong>Improve your Profile</strong></p>
            </div>
          </div>

          {/* Ad */}
          <div className="col-lg-3">
            <div className="card-lite p-0 overflow-hidden">
              <img src="images/addbanner.jpg" className="w-100" alt="Ad Banner" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashProfile
