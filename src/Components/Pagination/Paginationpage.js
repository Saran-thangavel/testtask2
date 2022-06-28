import React from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useState, useEffect } from "react";

function Paginationpage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getComments = () => {
      axios
        .get("https://fakestoreapi.com/products?_page=1&_limit=5")
        .then((response) => {
          console.log(response);
          setItems(response.data);
        });
    };
    getComments();
  }, []);

  console.log(items);

  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      ></ReactPaginate>
    </div>
  );
}

export default Paginationpage;
