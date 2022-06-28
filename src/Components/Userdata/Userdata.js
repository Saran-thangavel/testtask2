import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";

function Userdata() {
  const params = useParams();
  const [singleItem, setSingleItem] = useState({});

  const fetchSingleUser = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setSingleItem(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card
            style={{
              width: "18rem",
              marginTop: "5%",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <Card.Body>
              <Card.Img variant="top" src={singleItem.image} />
              <hr></hr>
              <Card.Text>{singleItem.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Userdata;
