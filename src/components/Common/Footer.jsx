import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";
import Logo from "./Logo";
import SubmitButton from "./SubmitButton";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />

      <Icons>
        <Icon
          onClick={() => {
            navigate("/");
          }}
          name={"logo-instagram"}
        />
        <Icon
          onClick={() => {
            navigate("/notifications");
          }}
          name={"logo-twitter"}
        />
        <Icon
          onClick={() => {
            navigate("/orders");
          }}
          name={"logo-facebook"}
        />
        <Icon
          onClick={() => {
            navigate("/cart");
          }}
          name={"logo-youtube"}
        />
      </Icons>

      <div>
        <SubmitButton onClick={() => {}}>Fale comigo</SubmitButton>
      </div>
      <div>
        <SubmitButton
          onClick={() => {
            window.location.href =
              "https://www.doctoralia.com.br/melina-dias-torres/hepatologista-medico-clinico-geral-internista/rio-de-janeiro";
          }}
        >
          Agendar consulta
        </SubmitButton>
      </div>
      <Rights>Todos os direitos reservados © 2022 Dra. Melina Torres</Rights>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: space-between;
    align-items: flex-start;

    padding: 10px 15px;
    padding-bottom: 0px;

    background: var(--pink);

    width: 100vw;
  }

  & > div {
    margin-bottom: 10px;
  }

  & > div:last-child {
    margin-bottom: 0px;
  }
`;

const Icons = styled.div`
  & {
    justify-content: flex-start;
  }

  & > div {
    margin: 5px;
  }
`;

const Rights = styled.div`
  & {
    justify-content: flex-start;
    font-size: 14px;

    height: 50px;

    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
