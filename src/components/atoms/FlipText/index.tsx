import React, { useEffect } from "react";
import { Wrapper, StyledSpan, AbsoluteContainer } from "./styles";
import { useAnimation } from "framer-motion";
import { type Colors } from "~/theme/default/colors";

const DURATION = 0.2;
const STAGGER = 0.02;

interface FlipTextProps {
  text: string;
  color?: keyof Colors;
}

export const FlipText = ({ text, color = "white" }: FlipTextProps) => {
  const controls = useAnimation();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    controls.start("hovered");
  }, [controls]);

  return (
    <Wrapper
      color={color}
      initial="initial"
      animate={controls}
      whileHover="hovered"
    >
      <div>
        {text.split("").map((l, i) => (
          <StyledSpan
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l === " " ? "\u00A0" : l}
          </StyledSpan>
        ))}
      </div>
      <AbsoluteContainer>
        {text.split("").map((l, i) => (
          <StyledSpan
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l === " " ? "\u00A0" : l}
          </StyledSpan>
        ))}
      </AbsoluteContainer>
    </Wrapper>
  );
};
