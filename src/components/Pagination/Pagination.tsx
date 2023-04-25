import React, { useState } from "react";
import {
  PaginationButton,
  PaginationButtonContainer,
} from "./Pagination.styled";

interface PaginationProps {
  isLastPage: boolean;
  onPaginationClick: (pageNumber: number) => void;
}

const FIRST_PAGE = 1;

export const Pagination: React.FC<PaginationProps> = ({
  isLastPage,
  onPaginationClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    onPaginationClick(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    onPaginationClick(currentPage + 1);
  };

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
