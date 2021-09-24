import React, { useEffect } from "react";
import "./Pagination.css";

export default function Pagination({
  totalDogs,
  dogsPerPage,
  currentPage,
  paginateNumber,
}) {
  const lastPage = Math.ceil(totalDogs / dogsPerPage);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <div>
      <ul className="ul-list">
        {currentPage > 1 ? (
          <>
            <li>
              <button onClick={() => paginateNumber(currentPage - 1)}>
                &laquo;
              </button>
            </li>
            <li>
              <button onClick={() => paginateNumber(1)}>{1}</button>
            </li>
            <li>
              <button disabled>...</button>
            </li>
          </>
        ) : null}
        <li>
          <button>{currentPage}</button>
        </li>
        {currentPage === lastPage ? null : (
          <>
            <li>
              <button disabled>...</button>
            </li>
            <li>
              <button onClick={() => paginateNumber(lastPage)}>
                {lastPage}
              </button>
            </li>
            <li>
              <button onClick={() => paginateNumber(currentPage + 1)}>
                &raquo;
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
