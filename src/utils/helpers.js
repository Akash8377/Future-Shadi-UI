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