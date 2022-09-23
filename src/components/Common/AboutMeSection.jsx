import styled from "styled-components";

export default function AboutMeSection({ src }) {
  return (
    <Container>
      <Text>
        <div>
          <ColoredBG></ColoredBG>
          Sobre mim
        </div>
        <div>
          With over 22 million social media followers, Dr. Mikhail Varshavski,
          commonly known as "Doctor Mike," is a multifaceted board-certified
          family medicine physician, media personality, educator, writer, and
          philanthropist.
        </div>
      </Text>

      <div>
        <img src={src} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    background: var(--pink);

    width: 100vw;

    margin-bottom: 30px;
  }

  img {
    object-fit: cover;

    width: 100%;
  }

  div {
    line-height: 30px;
  }

  @media (min-width: 600px) {
    img {
      position: absolute;

      max-width: 300px;
      max-height: 300px;
    }
  }
`;

const Text = styled.div`
  & {
    flex-direction: column;

    align-items: flex-start;

    padding: 30px 15px;

    z-index: 1;

    @media (min-width: 600px) {
      height: 600px;
    }
  }

  & > div {
    justify-content: flex-start;
    font-size: 20px;
    height: fit-content;
  }

  & > div:nth-child(1) {
    position: relative;

    margin-bottom: 10px;
  }
`;

const ColoredBG = styled.div`
  & {
    position: absolute;

    background: var(--pink-em);
    border-radius: 50px 0px 50px 0px;

    width: 140px;
    height: 30px;

    top: 0px;
    left: -12px;

    z-index: -1;
  }
`;
