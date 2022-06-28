import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { Container, Nav } from "react-bootstrap";
import { Row, Col, Card, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const params = useParams();
  const [result, setresult] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const showDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setresult(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ToastContainer transition={Slide} autoClose={5000}></ToastContainer>
      <Row>
        {data.map((value, index) => {
          return (
            <Col md={4} key={index}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "5%",
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
                      onClick={() => showDetail()}
                    >
                      Know More
                    </Button>
                    <div
                      class="modal fade"
                      id="myModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" id="myModal" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              {value.title}
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <Card.Img variant="top" src={value.image} />
                          </div>
                          <div class="modal-body">{value.description}</div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
