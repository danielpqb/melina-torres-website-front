import styled from "styled-components";

import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function Home() {
  return (
    <Container>
      <Header />

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    padding-top: 60px;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
