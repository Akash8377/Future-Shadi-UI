const Pagination = () => (
  <nav aria-label="Pagination example">
    <ul className="pagination justify-content-center custom-pagination">
      <li className="page-item disabled">
        <a className="page-link prev-next-arrow" href="#" tabIndex="-1">← Prev</a>
      </li>
      {[1, 2, 3, 4, 5, 6, 7].map(num => (
        <li key={num} className={`page-item ${num === 1 ? 'active' : ''}`}>
          <a className="page-link" href="#">{num}</a>
        </li>
      ))}
      <li className="page-item">
        <a className="page-link prev-next-arrow" href="#">→ Next</a>
      </li>
    </ul>
  </nav>
);
export default Pagination;