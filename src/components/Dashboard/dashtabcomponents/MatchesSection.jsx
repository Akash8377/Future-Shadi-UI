import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUsersByLookingForQuery } from "./slice/matchSlice";
import calculateAge from "../../Common/commonfunctions";
import config from "../../../config";


const MatchCard = ({ data, showAll }) => {
  return (
    <>
      {data.slice(0, showAll ? data.length : 2).map((match, i) => (
        <div className="match-row d-flex align-items-center mb-3" key={i}>
          <img src={match.profile_image ? `${config.baseURL}/uploads/profiles/${match.profile_image}` : "images/womenpic.jpg"} alt={match.name} style={{ width: 60, height: 60, borderRadius: "50%" }} />
          <div className="flex-grow-1 ms-3">
            <span className="name-line fw-bold">{match.first_name} {match.last_name}</span>
            {/* {match.isVip && (
              <span className="vip-badge ms-1 text-danger">
                <i className="fa fa-diamond" aria-hidden="true"></i> +
              </span>
            )} */}
            {/* {match.isCrown && (
              <span className="crown-badge ms-1 text-warning">
                <i className="fa fa-diamond" aria-hidden="true"></i>
              </span>
            )} */}
            {match.isNew && <span className="new-pill ms-1 badge bg-success">New</span>}
            <br />   
             {calculateAge(match.birth_day, match.birth_month, match.birth_year)} years, {match.height}, {match.language}, {match.city}
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
   const user = useSelector((state) => state.user.userInfo)

    const searchFor = user?.looking_for === "Bride" ? "Groom" : "Bride";
    const { data, isLoading, isError } = useGetUsersByLookingForQuery(searchFor);
    const [premiumMatches, setPremiumMatches] = useState([]);
    const [newMatches, setNewMatches] = useState([]);
    const [showPremiumAll, setShowPremiumAll] = useState(false);
    const [showNewAll, setShowNewAll] = useState(false);


    useEffect(() => {
      if (data?.success && Array.isArray(data.users)) {
        const updatedUsers = data.users.map((user) => ({
          ...user,
          language: user.language || "Hindi", 
          isNew: user.isNew || true,                        
          isCrown: user.isCrown || true,  
          isVip: user.isVip || true                     
        }));

        setPremiumMatches(updatedUsers);
        setNewMatches(updatedUsers);
      }
    }, [data]);


  if (isLoading) return <p>Loading matches...</p>;
  if (isError) return <p>Error loading matches.</p>;

  // console.log(premiumMatches, "premiumMatches");

  return (
    <div className="row g-4 mt-4">
      {/* Premium Matches */}
      <div className="col-lg-6">
        <div className="card-lite p-3">
          <h6>
            Premium Matches <span className="badge bg-danger ms-1">{premiumMatches?.length}</span>
          </h6>
          <div className="match-card" id="premiumMatches">
            <MatchCard data={premiumMatches} showAll={showPremiumAll} />
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
            New Matches <span className="badge bg-danger ms-1">{newMatches?.length}</span>
          </h6>
          <div className="match-card" id="newMatches">
            <MatchCard data={newMatches} showAll={showNewAll} />
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
