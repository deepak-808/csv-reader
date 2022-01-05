import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ postPerpage, totalPosts, paginate }) => {
  const pageNumber = Math.ceil(totalPosts / postPerpage);
  return (
    <ReactPaginate
      pageCount={pageNumber}
      previousLabel={"Previous"}
      nextLabel={"Next"}
      marginPagesDisplayed={6}
      onPageChange={paginate}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
