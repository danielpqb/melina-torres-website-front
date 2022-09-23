import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  const [color, setColor] = useState("var(--pink)");

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const listenScrollEvent = () => {
    window.scrollY > 0 ? setColor("white") : setColor("var(--pink)");
  };

  return (
    <Container color={color} inv={true}>
      <Logo />

      <Icon onClick={() => {}} name={"menu"} />
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 60px;
    justify-content: space-between;

    background: ${({ color }) => color};

    width: 100vw;

    padding: 0px 15px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
  }

  & * {
    filter: ${({ color }) =>
      color === "white" ? "contrast(0)" : "brightness(1)"};
  }
`;
