import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  > section {
    background: #fff;
    padding: 32px 40px;

    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 5px;

    max-width: 600px;
    width: 100%;
  }
`;
