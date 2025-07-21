import React from 'react'

const AboutMyself = () => {
  return (
    <div>
      <div className="section-title">
        Basics & Lifestyle{" "}
        <a href="#" className="small float-end">
          Edit
        </a>
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Age</td>
                <td>: 25</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>: 19 OCT 1999</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>: Never Married</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>: 5.11</td>
              </tr>
              <tr>
                <td>Grow Up</td>
                <td>: India</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Diet</td>
                <td>: Veg</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>: Enter Here</td>
              </tr>
              <tr>
                <td>Health Information</td>
                <td>: Not Specified</td>
              </tr>
              <tr>
                <td>Disability</td>
                <td>: None</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mini-section-title">Religious Background</h6>
            <a href="#" className="mini-edit-link text-primary">
              Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
            </a>
          </div>

          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Religion</td>
                <td>: Hindu</td>
              </tr>
              <tr>
                <td>Community</td>
                <td>: Jat</td>
              </tr>
              <tr>
                <td>Sub community</td>
                <td>: Not Specified</td>
              </tr>
              <tr>
                <td>
                  Gothra / Gothram&nbsp;
                  <i className="bi bi-question-circle text-secondary"></i>
                </td>
                <td>: Not Specified</td>
              </tr>
              <tr>
                <td>Mother Tongue</td>
                <td>: Hindi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mini-section-title">Astro Details</h6>
            <a href="#" className="mini-edit-link text-primary">
              Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
            </a>
          </div>

          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>
                  Manglik/Chevvai dosham&nbsp;
                  <i className="bi bi-question-circle text-secondary"></i>
                </td>
                <td>: Don't Know</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>: 19‑Oct‑1999</td>
              </tr>
              <tr>
                <td>Time of Birth</td>
                <td>
                  : <a href="#">Enter Now</a>
                </td>
              </tr>
              <tr>
                <td>City of Birth</td>
                <td>
                  : <a href="#">Enter Now</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-title">
        {" "}
        Family Details{" "}
        <a href="#" className="small float-end">
          Edit
        </a>
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Mother's Details</td>
                <td>: Enter Now</td>
              </tr>
              <tr>
                <td>Father's Details</td>
                <td>: Enter Now</td>
              </tr>
              <tr>
                <td>Family Location</td>
                <td>: Faridabad, Haryana,India</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>No OF Sisters</td>
                <td>: Enter Now</td>
              </tr>
              <tr>
                <td>No OF Sisters</td>
                <td>: Enter Here</td>
              </tr>
              <tr>
                <td>Family Financial Status</td>
                <td>: Enter Here</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-title">
        {" "}
        Education & Career{" "}
        <a href="#" className="small float-end">
          Edit
        </a>
      </div>
      <div className="row py-3 border-top">
        <div className="col-md-6 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Highest Qualification</td>
                <td>: B.tech</td>
              </tr>
              <tr>
                <td>College</td>
                <td>: Aktu</td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>: 10Lakh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6 border-start ps-md-4 mt-4 mt-md-0">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>Working With</td>
                <td>: Private Company</td>
              </tr>
              <tr>
                <td>Working as</td>
                <td>: Finance</td>
              </tr>
              <tr>
                <td>Employer Name</td>
                <td>: HDFC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section-title">Hobbies & Interets</div>
      <div className="row py-3 border-top">
        <div className="col-md-12 pe-md-4">
          <table className="table table-borderless table-sm mini-data mb-0">
            <tbody>
              <tr>
                <td>
                  Adding Hobbies & Interets <a href="#">Add Here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row py-3 border-top"></div>
      <div className="text-end">
        <button className="btn btn-link back-to-top">
          {" "}
          Back to Top <i className="fa fa-angle-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default AboutMyself
