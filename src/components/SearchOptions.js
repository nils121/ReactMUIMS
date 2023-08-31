import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SearchOptions() {
  return (
    <Container>
      <Form style={{ marginTop: "50px" }}>
        <Row>
          <h3>Search Surgical Code</h3>
        </Row>
        <br />
        <Row>
          <h4>Search Code</h4>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surgical Code</Form.Label>
              <Form.Control type="surgicalCode" placeholder="Surgical Code" />
            </Form.Group>
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <Form.Label>ICD Version</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select version</option>
              <option value="1">ICD 10</option>
              <option value="2">ICD 20</option>
              <option value="3">ICD 30</option>
            </Form.Select>
          </Col>
        </Row>
        <br />

        <Row md={4}>
          <Col style={{ display: "flex", placeContent: "space-between" }}>
            <Button
              as="input"
              type="button"
              value="Input"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            />{" "}
            {/* <Button as="input" type="submit" value="Submit" size="sm" />{" "} */}
            <Button
              as="input"
              type="reset"
              value="Reset"
              style={{
                color: "#white",
                backgroundColor: "#00c791",
              }}
            />
          </Col>
        </Row>
      </Form>
      <br />
      <div>
        <Row>
          <h5>Surgical Code Search Result</h5>
        </Row>
        <br />
        <Row style={{ display: "flex" }}>
          <div
            style={{
              border: "1px grey solid",
              width: "8em",
              height: "2rem",
              borderRight: 0,
            }}
          >
            <a href="">12345</a>
          </div>
          <div
            style={{ border: "1px grey solid", width: "10em", height: "2rem" }}
          >
            Surgical Code 1
          </div>
        </Row>
        <Row style={{ display: "flex" }}>
          <div
            style={{
              border: "1px grey solid",
              width: "8em",
              height: "2rem",
              borderRight: 0,
            }}
          >
            <a href="">12645</a>
          </div>
          <div
            style={{ border: "1px grey solid", width: "10em", height: "2rem" }}
          >
            Surgical Code 2
          </div>
        </Row>
        <Row style={{ display: "flex" }}>
          <div
            style={{
              border: "1px grey solid",
              width: "8em",
              height: "2rem",
              borderRight: 0,
            }}
          >
            <a href="">12395</a>
          </div>
          <div
            style={{ border: "1px grey solid", width: "10em", height: "2rem" }}
          >
            Surgical Code 3
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default SearchOptions;
