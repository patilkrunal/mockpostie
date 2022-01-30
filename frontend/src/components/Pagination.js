import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Pagination.css";

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let paginationGroup = [];
    for (let i = start + 1; i <= start + pageLimit && i <= pages; i++) {
      paginationGroup.push(i);
    }
    return paginationGroup;
  };

  return (
    <div>
        <Card>
          <Card.Header>
            <h3>{title}</h3>
          </Card.Header>
          <ListGroup variant="flush">
            {getPaginatedData().map((d, idx) => (
              <ListGroup.Item key={idx}>
                <RenderComponent key={idx} data={d} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>

      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
