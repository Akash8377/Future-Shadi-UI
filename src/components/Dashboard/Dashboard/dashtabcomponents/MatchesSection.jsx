import React, { useState } from "react";

const matchesData = {
  premium: [
    {
      name: "Isha B",
      age: "27 yrs",
      height: "5'4\"",
      language: "Hindi",
      city: "Ghaziabad",
      profession: "Software Professional (Other…)",
      isVip: true,
    },
    {
      name: "Khushboo S",
      age: "25 yrs",
      height: "5'2\"",
      language: "Brij",
      city: "Agra",
      profession: "Not Specified",
      isVip: true,
    },
    {
      name: "Sanjica K",
      age: "26 yrs",
      height: "5'4\"",
      language: "Punjabi",
      city: "Bengaluru",
      profession: "Law Enforcement Employee",
      isVip: true,
    },
    {
      name: "Komal R",
      age: "26 yrs",
      height: "5'7\"",
      language: "Hindi",
      city: "Delhi",
      profession: "Teacher",
      isVip: true,
    },
    {
      name: "Reshu P",
      age: "26 yrs",
      height: "5'3\"",
      language: "Hindi",
      city: "Haridwar",
      profession: "Not working",
      isVip: true,
    },
  ],
  newMatches: [
    {
      name: "Kanika M",
      age: "26 yrs",
      height: "5'4\"",
      language: "Hindi",
      city: "Gurugram",
      profession: "Not Specified",
      isCrown: true,
    },
    {
      name: "Aasha H",
      age: "23 yrs",
      height: "5'0\"",
      language: "Hindi",
      city: "Noida",
      profession: "Software Developer / Programmer",
      isNew: true,
    },
    {
      name: "Riya M",
      age: "24 yrs",
      height: "5'7\"",
      language: "Hindi",
      city: "Delhi",
      profession: "Not Specified",
    },
    {
      name: "Manu S",
      age: "23 yrs",
      height: "5'3\"",
      language: "Hindi",
      city: "Rohtak",
      profession: "Not working",
    },
    {
      name: "Jyoti S",
      age: "25 yrs",
      height: "5'4\"",
      language: "Hindi",
      city: "Bharatpur",
      profession: "Medical / Healthcare Professional",
    },
  ],
};

const MatchCard = ({ data, showAll }) => {
  return (
    <>
      {data.slice(0, showAll ? data.length : 2).map((match, i) => (
        <div className="match-row d-flex align-items-center mb-3" key={i}>
          <img src="images/womenpic.jpg" alt={match.name} style={{ width: 60, height: 60, borderRadius: "50%" }} />
          <div className="flex-grow-1 ms-3">
            <span className="name-line fw-bold">{match.name}</span>
            {match.isVip && (
              <span className="vip-badge ms-1 text-danger">
                <i className="fa fa-diamond" aria-hidden="true"></i> +
              </span>
            )}
            {match.isCrown && (
              <span className="crown-badge ms-1 text-warning">
                <i className="fa fa-diamond" aria-hidden="true"></i>
              </span>
            )}
            {match.isNew && <span className="new-pill ms-1 badge bg-success">New</span>}
            <br />
            {match.age}, {match.height}, {match.language}, {match.city}
            <br />
            {match.profession}
          </div>
          <a href="#" className="btn-connect text-decoration-none text-center">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
            <br />
            <span className="small">Connect Now</span>
          </a>
        </div>
      ))}
    </>
  );
};

const MatchesSection = () => {
  const [showPremiumAll, setShowPremiumAll] = useState(false);
  const [showNewAll, setShowNewAll] = useState(false);

  return (
    <div className="row g-4 mt-4">
      {/* Premium Matches */}
      <div className="col-lg-6">
        <div className="card-lite p-3">
          <h6>
            Premium Matches <span className="badge bg-danger ms-1">{matchesData.premium.length}</span>
          </h6>
          <div className="match-card" id="premiumMatches">
            <MatchCard data={matchesData.premium} showAll={showPremiumAll} />
            <span
              className="view-all-link text-primary cursor-pointer"
              onClick={() => setShowPremiumAll(!showPremiumAll)}
            >
              {showPremiumAll ? "View Less" : "View All"}
            </span>
          </div>
        </div>
      </div>

      {/* New Matches */}
      <div className="col-lg-6">
        <div className="card-lite p-3">
          <h6>
            New Matches <span className="badge bg-danger ms-1">{matchesData.newMatches.length}</span>
          </h6>
          <div className="match-card" id="newMatches">
            <MatchCard data={matchesData.newMatches} showAll={showNewAll} />
            <span
              className="view-all-link text-primary cursor-pointer"
              onClick={() => setShowNewAll(!showNewAll)}
            >
              {showNewAll ? "View Less" : "View All"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesSection;
