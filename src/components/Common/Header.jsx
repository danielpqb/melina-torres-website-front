import styled from "styled-components";

import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  return (
    <Container>
      <Logo></Logo>

      <Icon onClick={() => {}} name={"menu"} />
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 60px;
    justify-content: space-between;

    background: var(--pink);

    width: 100vw;

    padding: 0px 15px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
  }
`;
