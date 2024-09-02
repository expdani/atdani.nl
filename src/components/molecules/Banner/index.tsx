import { Row, Col } from "react-grid-system";
import { StyledContainer, Wrapper } from "./styles";
import BannerScene from "~/components/atoms/Three/BannerScene";
import { FlipText } from "~/components/atoms/FlipText";

const Banner = () => {
  return (
    <Wrapper>
      <StyledContainer fluid xl>
        <Row align="center" style={{ height: "100%" }}>
          <Col md={6} style={{ flex: 1 }}>
            <FlipText text="DANI VERHAAR" />
          </Col>
          <Col md={6} style={{ flex: 1 }}>
            <BannerScene />
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default Banner;
