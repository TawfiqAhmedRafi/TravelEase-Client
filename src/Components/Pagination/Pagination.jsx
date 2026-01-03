import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [...Array(totalPages).keys()].map((p) => p + 1);

  return (
    <div className="flex justify-center mt-10">
      <div className="join gap-1 bg-base-200 p-2 rounded-full shadow-lg">
        {/* Previous */}
        <button
          className="join-item btn btn-sm rounded-full
                     bg-base-300 hover:bg-primary hover:text-primary-content
                     disabled:opacity-40 disabled:hover:bg-base-300
                     transition-all duration-200"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          «
        </button>

        {/* Page Numbers */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`join-item btn btn-sm rounded-full min-w-9
              transition-all duration-200
              ${
                p === page
                  ? "bg-secondary text-secondary-content shadow-md scale-105"
                  : "bg-base-300 hover:bg-accent hover:text-accent-content"
              }
            `}
          >
            {p}
          </button>
        ))}

        {/* Next */}
        <button
          className="join-item btn btn-sm rounded-full
                     bg-base-300 hover:bg-primary hover:text-primary-content
                     disabled:opacity-40 disabled:hover:bg-base-300
                     transition-all duration-200"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
