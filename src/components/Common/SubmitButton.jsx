import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function SubmitButton({ children, disabled, onClick }) {
  return (
    <Container onClick={onClick}>
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>{children}</>
      )}
    </Container>
  );
}

const Container = styled.button`
  & {
    cursor: pointer;
    background: var(--pink-em);
    height: 50px;
    border-radius: 25px;

    font-weight: 700;
    font-size: 20px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
