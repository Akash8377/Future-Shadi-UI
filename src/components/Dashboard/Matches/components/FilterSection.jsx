const FilterSection = ({ title, type, options, showMore }) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center p-2 bg-light">
        <strong className="text-dark small">{title}</strong>
        <span style={{ cursor: "pointer" }}>&#8722;</span>
      </div>
      <div className="p-2">
        {options.map((option, idx) => (
          <div className="form-check mt-2" key={idx}>
            <input
              className="form-check-input"
              type={type}
              name={title.replace(/\s+/g, "-")}
              id={`${title}-${idx}`}
              defaultChecked={idx === 0}
            />
            <label className="form-check-label" htmlFor={`${title}-${idx}`}>
              {option.label}
              {option.isNew && (
                <span
                  className="badge bg-warning rounded-pill ms-1"
                  style={{ fontSize: "10px" }}
                >
                  NEW
                </span>
              )}
              {option.count !== undefined && option.count !== null && (
                <> ({option.count})</>
              )}
            </label>
          </div>
        ))}

        {showMore && (
          <div className="more-button">
            <a href="#">
              More <i className="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
