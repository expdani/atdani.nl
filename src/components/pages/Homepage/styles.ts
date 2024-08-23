import styled from "@emotion/styled";

export const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  height: "100vh",
  margin: "0 auto",
  boxSizing: "border-box",
  backgroundColor: "orange",
});

export const ContentWrapper = styled.div({
  display: "flex",
  maxWidth: "85.375rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
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
  backgroundColor: "rgba(147, 197, 253, 0.6)",
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
