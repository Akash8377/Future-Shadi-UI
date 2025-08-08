import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RefineSearchSidebar from './RefineSearchSidebar';
import ProfileCard from '../Matches/components/ProfileCard';
import Pagination from '../Matches/components/Pagination';
import axios from 'axios';
import config from '../../../config';
import Header from '../Header';
import Footer from '../../Footer/Footer';
import { toast } from "../../Common/Toast";

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const profilesPerPage = 5;

  const user = useSelector((state) => state.user.userInfo);
  const lookingFor = user?.looking_for;
  const searchFor = lookingFor === 'Bride' ? 'Groom' : 'Bride';

  // Initialize filters from location state
  useEffect(() => {
    if (location.state?.searchData) {
      setFilters(location.state.searchData);
    }
    if (location.state?.initialResults && location.state?.initialResults?.length > 0) {
      setProfiles(location.state?.initialResults);
    }
  }, [location.state]);

  const fetchSearchResults = async (searchParams) => {
    console.log("Search Params", searchParams);
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.baseURL}/api/search/search-profiles-filter`,
        searchParams
      );
      setProfiles(response.data.data || []);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch results when filters change
  useEffect(() => {
    if (!isInitialMount) {
      if (filters && Object.keys(filters).length > 0) {
        fetchSearchResults(filters);
      }
    }
  }, [filters]);

  const handleRefineSearch = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    if(isInitialMount){
      setIsInitialMount(false)
    }
  };

  const handleConnectClick = (id) => {
    setProfiles(prev =>
      prev.map(profile =>
        profile.id === id ? { ...profile, showContactOptions: true } : profile
      )
    );
    toast.success("Request sent successfully")
  };

  // Pagination logic
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles?.slice(indexOfFirstProfile, indexOfLastProfile);
  
  return (
    <>
      <Header/>
      <div className="container mt-3 p-4">
        <div className="row">
          <div className="col-md-3">
            <RefineSearchSidebar 
              initialFilters={filters}
              onFilterChange={handleRefineSearch}
              searchType={filters?.searchType || 'Basic'}
            />
          </div>
          <div className="col-md-9">
            <h4>Search Results</h4>
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <>
                <div className="card border-0 shadow-sm mb-3">
                  {currentProfiles.length > 0 ? (
                    currentProfiles.map(profile => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        handleConnectClick={handleConnectClick}
                      />
                    ))
                  ) : (
                    <div className="p-4 text-muted">No profiles found matching your criteria.</div>
                  )}
                </div>
                {profiles.length > profilesPerPage && (
                  <Pagination
                    totalProfiles={profiles.length}
                    profilesPerPage={profilesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SearchResultsPage;