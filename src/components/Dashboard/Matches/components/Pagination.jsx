const Pagination = ({ totalProfiles, profilesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProfiles / profilesPerPage);
  if (totalPages <= 1) return null;
 
  const handlePageClick = (num) => {
    if (num !== currentPage) {
      setCurrentPage(num);
    }
  };
 
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
 
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
 
  return (
    <nav aria-label="Pagination example">
      <ul className="pagination justify-content-center custom-pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link prev-next-arrow" onClick={handlePrev}>← Prev</button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
          <li key={num} className={`page-item ${num === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(num)}>{num}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link prev-next-arrow" onClick={handleNext}>→ Next</button>
        </li>
      </ul>
    </nav>
  );
};
 
export default Pagination;