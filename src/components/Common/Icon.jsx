import styled from "styled-components";

export default function Icon({ onClick, name, size, badge, auth }) {
  return (
    <Container onClick={onClick} size={size}>
      <ion-icon name={name}></ion-icon>
      {auth && (
        <Auth>
          <ion-icon name="pricetags"></ion-icon>
        </Auth>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
    position: relative;

    cursor: pointer;
    width: fit-content;
  }

  ion-icon {
    font-size: ${({ size }) => (size ? size + "px" : "30px")};
  }
`;

const Auth = styled.div`
  & {
    position: absolute;

    width: fit-content;
    height: fit-content;

    bottom: 8px;
    right: 0px;
  }
  ion-icon {
    font-size: 18px;
    color: #82e6a0;
  }
`;
