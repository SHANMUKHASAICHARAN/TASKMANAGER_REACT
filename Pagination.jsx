import React from "react";

function Pagination({ totalTasks, tasksPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (totalPages <= 1) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
