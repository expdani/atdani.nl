import type { FC } from "react";
import { Row, Col } from "react-grid-system";
import { motion } from "framer-motion";
import { Name, StyledContainer, Wrapper } from "./styles";
import BannerScene from "~/components/atoms/Three/BannerScene";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Banner: FC = () => {
  const name = "Dani Verhaar";

  return (
    <Wrapper>
      <StyledContainer fluid md>
        <Row align="center" style={{ height: "100%" }}>
          <Col md={6}>
            <Name>
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </Name>
          </Col>
          <Col md={6} style={{ height: "100%" }}>
            <BannerScene />
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default Banner;
