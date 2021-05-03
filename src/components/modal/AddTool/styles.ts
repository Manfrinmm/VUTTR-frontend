import styled from "styled-components";

export const Content = styled.section`
  form {
    margin: 24px 0;

    div + div {
      margin-top: 8px;
    }
  }

  > div {
    display: flex;

    margin-left: auto;

    max-width: 240px;

    button + button {
      margin-left: 24px;

      background: #0dcb7d;

      &:hover {
        background: #10b26c;
      }
    }
  }
`;
