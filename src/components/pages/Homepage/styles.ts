import styled from "@emotion/styled";
import { Container } from "react-grid-system";

export const Wrapper = styled.div({
  backgroundColor: "#1E201E",
  height: "100vh",
});

export const StyledContainer = styled(Container)({
  height: "100%",
});

export const Left = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  paddingLeft: "2rem",
});

export const Right = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "2rem",
});

export const Name = styled.h1({
  color: "white",
  fontWeight: 800,
  fontSize: "clamp(2rem, 6vw, 4rem)",
  margin: 0,
});

export const HeaderContainer = styled.header({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  height: "4rem",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: "0 8rem",
  backdropFilter: "blur(10px)",
});

export const LogoWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: "1024px",
  flexShrink: 0,
});
