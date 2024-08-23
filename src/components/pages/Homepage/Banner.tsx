import type { FC } from "react";
import { Container, Row, Col } from "react-grid-system";

const Banner: FC = () => {
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "orange" }}>
      <Row align="center" style={{ height: "100%" }}>
        <Col md={6}>
          <h1 style={{ color: "white", fontWeight: 800 }}>Dani Verhaar</h1>
        </Col>
        <Col md={6}>{/* Right side content */}</Col>
      </Row>
    </Container>
  );
};

export default Banner;
