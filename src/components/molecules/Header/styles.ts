import styled from "@emotion/styled";

export const Wrapper = styled.header({
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
