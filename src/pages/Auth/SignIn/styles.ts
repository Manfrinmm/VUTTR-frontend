import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 75%;

  margin: auto;
  padding: 24px;

  section {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    max-width: 512px;
    width: 100%;
    /* width: minmax(320px, 640px); */
    padding: 32px;

    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 20px 25px #0000001a;
  }

  form {
    max-width: 320px;
    width: 100%;

    > div + div {
      margin-top: 8px;
    }

    button {
      margin-top: 16px;
    }
  }

  footer {
    margin-top: 32px;

    text-align: center;
  }
`;
