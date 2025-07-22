export function camelCaseToNormalText(camelCaseStr) {
  // Handle empty or non-string input
  if (typeof camelCaseStr !== 'string' || camelCaseStr.length === 0) {
    return camelCaseStr;
  }

  // Add space before capital letters and trim
  const withSpaces = camelCaseStr.replace(/([A-Z])/g, ' $1').trim();
  
  // Capitalize the first letter of each word
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Adding 1 because getMonth() returns 0-11
    const currentDay = today.getDate();

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}