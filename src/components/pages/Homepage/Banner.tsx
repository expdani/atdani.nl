import type { FC } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Name, StyledContainer, Wrapper } from "./styles";

const Banner: FC = () => {
  return (
    <Wrapper>
      <StyledContainer fluid md>
        <Row align="center" style={{ height: "100%" }}>
          <Col md={6}>
            <Name>Dani Verhaar</Name>
          </Col>
          <Col md={6}>{/* Right side content */}</Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default Banner;
