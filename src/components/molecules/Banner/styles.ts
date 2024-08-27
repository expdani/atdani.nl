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
