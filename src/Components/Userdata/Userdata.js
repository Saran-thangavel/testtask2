import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function Userdata() {
  const [result, setresult] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const params = useParams();

  const showDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setresult(response.data);
      });
  };

  useEffect(() => {
    showDetail();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {result.map((value) => {
        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{value.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Card.Img variant="top" src={value.image} />
              <p>{value.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        );
      })}
    </Container>
  );
}

export default Userdata;
