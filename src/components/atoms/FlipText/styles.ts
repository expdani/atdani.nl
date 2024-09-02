import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { type Colors } from "~/theme/default/colors";

export const Wrapper = styled(motion.div)<{ color: keyof Colors }>((props) => ({
  position: "relative",
  display: "block",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontSize: "clamp(2rem, 6vw, 5rem)",
  fontWeight: 900,
  lineHeight: 1,
  color: props.theme.colors[props.color],
}));

export const StyledSpan = styled(motion.span)({
  display: "inline-block",
});

export const AbsoluteContainer = styled.div({
  position: "absolute",
  inset: 0,
});
