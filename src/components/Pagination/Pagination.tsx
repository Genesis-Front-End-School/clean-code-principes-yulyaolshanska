import { FIRST_PAGE } from "constants/pagination";
import React, { useState } from "react";
import {
  PaginationButton,
  PaginationButtonContainer,
} from "./Pagination.styled";

interface PaginationProps {
  totalPageCount: number;
  onPaginationClick: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPageCount,
  onPaginationClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    onPaginationClick(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    onPaginationClick(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLastPage = currentPage === totalPageCount;

  return (
    <PaginationButtonContainer>
      <PaginationButton
        active={currentPage > FIRST_PAGE}
        disabled={currentPage <= FIRST_PAGE}
        onClick={handlePrevClick}
      >
        Prev
      </PaginationButton>
      <PaginationButton
        active={!isLastPage}
        disabled={isLastPage}
        onClick={handleNextClick}
      >
        Next
      </PaginationButton>
    </PaginationButtonContainer>
  );
};

export default Pagination;
