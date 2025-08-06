export function timeAgo(dateString) {
  if (!dateString) return "Unknown";

  // Try to parse the custom format "01 August 2025 at 3:28 pm"
  const parsed = parseCustomDate(dateString);
  if (!parsed) return "Invalid date";

  const now = new Date();
  const diffMs = now - parsed;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return "Just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

function parseCustomDate(dateStr) {
  try {
    const [datePart, timePart] = dateStr.split(" at ");
    if (!datePart || !timePart) return null;

    const date = new Date(`${datePart} ${timePart}`);
    return isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}
