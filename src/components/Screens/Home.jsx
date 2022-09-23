import styled from "styled-components";

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import AboutMeSection from "../Common/AboutMeSection";
import WhiteSection from "../Common/WhiteSection";

export default function Home() {
  return (
    <Container>
      <Header />

      <AboutMeSection src={"imgs/foto-perfil.jpeg"} />

      <WhiteSection>
        During his residency, Dr. Mike decided to document his journey and share
        his medical learnings with the internet. Over the next few years, he
        garnered over 1 Billion views, making his platform one of the largest in
        health education. Leveraging his media presence and impact in the
        medical community, he covers the importance of health literacy while
        simultaneously battling misinformation in a practical, yet entertaining
        approach.
      </WhiteSection>
      <WhiteSection>
        During his residency, Dr. Mike decided to document his journey and share
        his medical learnings with the internet. Over the next few years, he
        garnered over 1 Billion views, making his platform one of the largest in
        health education. Leveraging his media presence and impact in the
        medical community, he covers the importance of health literacy while
        simultaneously battling misinformation in a practical, yet entertaining
        approach.
      </WhiteSection>

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
