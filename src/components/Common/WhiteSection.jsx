import styled from "styled-components";

export default function WhiteSection({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  & {
    flex-direction: column;

    color: var(--dark-txt);

    line-height: 30px;

    width: 100vw;

    padding: 0px 15px;
    padding-bottom: 30px;

    @media (min-width: 600px) {
      padding: 0px 15vw;
    }
  }

  img {
    object-fit: cover;

    width: 100%;
  }
`;
