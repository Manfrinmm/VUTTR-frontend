import styled from "styled-components";

export const Content = styled.section`
  p {
    margin: 16px 0 24px;
  }

  div {
    display: flex;

    margin-left: auto;

    max-width: 240px;

    button + button {
      margin-left: 24px;
      background: #f95e5a;

      &:hover {
        background: #cc4c4c;
      }
    }
  }
`;
