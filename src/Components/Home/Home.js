import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";
import {
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
  Container,
  Nav,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

function Home() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState([]);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {loading ? (
        <Spinner
          animation="border"
          variant="success"
          style={{ marginTop: "20%" }}
        />
      ) : (
        <Container>
          <ToastContainer transition={Slide} autoClose={5000}></ToastContainer>
          <Row>
            {currentItems.map((value, index) => {
              return (
                <Col lg={4} md={5} sm={4} key={index}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "18rem",
                      marginTop: "5%",
                      marginLeft: "14%",
                      backgroundColor: "darkseagreen",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{`Id: ${value.id}`}</Card.Text>
                      <Nav.Link>
                        <Button
                          variant="primary"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={function () {
                            {
                              setShow(true);
                              setIndex(index);
                            }
                          }}
                        >
                          Know More
                        </Button>
                      </Nav.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            <Modal
              show={show}
              onHide={() => {
                setShow(false);
              }}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header>
                <Modal.Title>{currentItems[index]?.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  style={{
                    height: "250px",
                    width: "200px",
                    margin: "auto",
                    display: "block",
                  }}
                  alt="Image"
                  src={currentItems[index]?.image}
                />
              </Modal.Body>
              <Modal.Body style={{ justifyContent: "left" }}>
                {currentItems[index]?.description}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShow(false);
                  }}
                  style={{ marginRight: "45%" }}
                >
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>

          <div className="mt-5 ">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            ></ReactPaginate>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Home;
