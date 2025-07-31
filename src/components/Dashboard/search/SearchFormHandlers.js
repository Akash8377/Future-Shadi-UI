import { useState } from 'react';
import axios from 'axios';
import config from '../../../config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useSearchFormHandlers = (isAdvanced = false) => {
  const userInfo=useSelector((state) => state.user.userInfo);
   const navigate = useNavigate();
  // Common initial values
  const commonInitialValues = {
    profileId: '',
    ageFrom: '20',
    ageTo: '26',
    heightFrom: '5ft 0in',
    heightTo: '5ft 11in',
    maritalStatus: 'Never Married',
    religion: 'Hindu',
    motherTongue: ['English', 'Hindi', 'Haryanavi'],
    community: 'Jat',
    country: 'india',
    state: 'Doesn\'t Matter',
    visibleToAll: true,
    protectedPhoto: false,
    filterMeOut: true,
    iFilteredOut: false
  };

  const initialFormData = {
    ...commonInitialValues,
    // Advanced Search specific fields
    advanceProfileId: '',
    advanceAgeFrom: '20',
    advanceAgeTo: '26',
    advanceHeightFrom: '5ft 0in',
    advanceHeightTo: '5ft 11in',
    advanceMaritalStatus: ['Never Married'],
    advanceReligion: ['Hindu'],
    advanceMotherTongue: ['English', 'Hindi', 'Haryanavi'],
    advanceCommunity: ['Jat'],
    advanceCountry: ['india'],
    advanceState: ['Open for All'],
    advanceResidencyStatus: ['Open for All'],
    advanceCountryGrew: ['Open for All'],
    advanceQualification: ['Open for All'],
    advanceEducationArea: ['Open for All'],
    advanceWorkingWith: ['Open for All'],
    advanceProfessionArea: ['Open for All'],
    advanceAnnualIncome: ['Open for All'],
    advanceDiet: ['Open for All'],
    advanceKeywords: '',
    advanceChatAvailable: true,
    advanceVisibleToAll: true,
    advanceProtectedPhoto: false,
    advanceProfileManagedBy: ['Open for All'],
    advanceFilterMeOut: true,
    advanceIFilteredOut: false
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  // Generic handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Generic handler for multi-select changes
  const handleMultiSelectChange = (selectId, fieldName) => {
    const selectElement = document.getElementById(selectId);
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      [fieldName]: selectedOptions
    }));
  };

  // Generic handler for checkbox group changes (used for diet and profile managed by)
  const handleCheckboxGroupChange = (fieldName, value, checked) => {
    setFormData(prev => {
      let newValues = [...prev[fieldName]];
      
      if (value === 'Doesn\'t Matter') {
        newValues = checked ? ['Doesn\'t Matter'] : [];
      } else {
        if (checked) {
          newValues = newValues.filter(item => item !== 'Doesn\'t Matter');
          newValues.push(value);
        } else {
          newValues = newValues.filter(item => item !== value);
        }
        
        if (newValues.length === 0) {
          newValues = ['Doesn\'t Matter'];
        }
      }
      
      return { ...prev, [fieldName]: newValues };
    });
  };

  // Specific handlers that use the generic checkbox group handler
  const handleDietChange = (e) => {
    handleCheckboxGroupChange('advanceDiet', e.target.value, e.target.checked);
  };

  const handleProfileManagedByChange = (e) => {
    handleCheckboxGroupChange('advanceProfileManagedBy', e.target.value, e.target.checked);
  };

  // Format search data for API request
const formatSearchData = (isAdvanced) => {
  const prefix = isAdvanced ? 'advance' : '';
  
  const getFieldValue = (field) => {
    const fieldName = isAdvanced ? `advance${field.charAt(0).toUpperCase() + field.slice(1)}` : field;
    return formData[fieldName];
  };

  const formatValue = (value, isArrayField = false) => {
    if (value === 'Open for All' || value === null || value === undefined) return null;
    if (Array.isArray(value)) {
      return isArrayField ? value : value[0]; // Return array only for specific fields
    }
    return isArrayField ? [value] : value; // Convert to array if needed
  };

  return {
    searchType: isAdvanced ? 'Advanced' : 'Basic',
    looking_for: userInfo.looking_for === 'Bride' ? 'Groom' : 'Bride',
    profileId: formatValue(getFieldValue('profileId')),
    ageFrom: formatValue(getFieldValue('ageFrom')),
    ageTo: formatValue(getFieldValue('ageTo')),
    heightFrom: formatValue(getFieldValue('heightFrom')),
    heightTo: formatValue(getFieldValue('heightTo')),
    maritalStatus: formatValue(getFieldValue('maritalStatus')),
    religion: formatValue(getFieldValue('religion')),
    motherTongue: formatValue(getFieldValue('motherTongue'), true), // true indicates array field
    community: formatValue(getFieldValue('community')),
    country: formatValue(getFieldValue('country')),
    state: formatValue(getFieldValue('state')),
    // Advanced-only fields
    residencyStatus: isAdvanced ? formatValue(getFieldValue('residencyStatus')) : null,
    countryGrew: isAdvanced ? formatValue(getFieldValue('countryGrew')) : null,
    qualification: isAdvanced ? formatValue(getFieldValue('qualification')) : null,
    educationArea: isAdvanced ? formatValue(getFieldValue('educationArea')) : null,
    workingWith: isAdvanced ? formatValue(getFieldValue('workingWith')) : null,
    professionArea: isAdvanced ? formatValue(getFieldValue('professionArea')) : null,
    annualIncome: isAdvanced ? formatValue(getFieldValue('annualIncome')) : null,
    diet: isAdvanced ? formatValue(getFieldValue('diet'), true) : null,
    keywords: isAdvanced ? formatValue(getFieldValue('keywords')) : null,
    page: 1,
    limit: 20
  };
};

  // Search profiles using Axios
  const searchProfiles = async (searchParams) => {
    try {
      console.log("searchParams",searchParams)
      const response = await axios.get(`${config.baseURL}/api/search/search-profiles`, {
        params: searchParams
      });
      return response.data;
    } catch (error) {
      console.error('Error searching profiles:', error);
      throw error;
    }
  };

  // Handle form submission
 const handleSubmit = async (e, isAdvanced = false) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const searchData = formatSearchData(isAdvanced);
      console.log("Search Data from Search Form", searchData);
      const results = await searchProfiles(searchData);
      
      // Navigate to results page with search data and initial results
      navigate('/search-results', {
        state: {
          searchData,
          initialResults: results
        }
      });
      
      return results;
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = (isAdvanced = false) => {
    setFormData(isAdvanced ? {
      ...initialFormData,
      // Preserve advanced fields if needed
    } : {
      ...initialFormData,
      // Reset to basic fields
      ...commonInitialValues
    });
  };

  return {
    formData,
    loading,
    searchResults,
    handleChange,
    handleMultiSelectChange,
    handleDietChange,
    handleProfileManagedByChange,
    handleSubmit,
    resetForm
  };
};

export default useSearchFormHandlers;