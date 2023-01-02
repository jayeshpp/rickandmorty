import { useState } from "react";
import "./style.scss";

const Pagination = ({
  totalRecords,
  perPage,
  activePage,
  handlePagination,
}) => {
  const [currentPage, setCurrentPage] = useState(activePage || 1);
  console.log(currentPage * perPage,'currentPage * perPage');
  return (
    <div className="pagination">
      <button
        className="button button--prev"
        onClick={() => {
          setCurrentPage(p => p - 1);
          handlePagination(currentPage - 1);
        }}
        disabled={currentPage < 2}
      >
        Prev
      </button>
      <button
        className="button button--next"
        onClick={() => {
          setCurrentPage(p => p + 1);
          handlePagination(currentPage + 1);
        }}
        disabled={currentPage * perPage >= totalRecords}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
