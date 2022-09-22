import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <First>Dra</First>
      <Second>Melina</Second>
    </Container>
  );
}

const Container = styled.div`
  & {
    cursor: pointer;

    position: relative;

    width: fit-content;

    justify-content: flex-start;

    min-width: 90px;
    min-height: 50px;
  }

  div {
    font-family: "Dancing Script";

    position: absolute;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

const First = styled.div`
  & {
    top: -12px;
    left: -27px;

    font-size: 20px;
  }
`;

const Second = styled.div`
  & {
    top: 9px;
    left: 3px;

    font-size: 30px;
  }
`;
