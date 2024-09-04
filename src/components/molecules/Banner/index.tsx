import { Row, Col } from "react-grid-system";
import { StyledContainer, Wrapper } from "./styles";
import { FlipText } from "~/components/atoms/FlipText";
import CatchMeBox from "./components/CatchMeBox";

const Banner = () => {
  return (
    <Wrapper>
      <StyledContainer fluid xl>
        <Row align="center" style={{ height: "100%" }}>
          <Col md={6} style={{ flex: 1 }}>
            <FlipText text="DANI VERHAAR" />
          </Col>
          <Col
            md={6}
            style={{
              flex: 1,
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
          >
            <CatchMeBox />
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default Banner;
