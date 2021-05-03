import styled from "styled-components";

interface ToolItemTagProps {
  isHighlight: boolean;
}

export const Container = styled.div`
  section {
    display: flex;
    margin-top: 3.2rem;

    form {
      display: flex;

      > div {
        width: 100%;
        display: flex;

        div + div {
          margin-left: 8px;
        }

        @media (max-width: 640px) {
          flex-direction: column;

          div + div {
            margin-left: 0;
            margin-top: 8px;
          }
        }
      }
    }

    button {
      max-width: 120px;
      margin-left: auto;
    }
  }

  ul {
    list-style: none;

    margin-top: 3.2rem;
    padding: 0 0 3.2rem;
  }
`;

export const ToolItem = styled.li`
  border: 1px solid #fff8ec;
  padding: 0.8rem 1.6rem;

  background: #fff8ec;
  color: #12db89;

  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: 0;

      font-weight: 600;
      font-size: 1.6rem;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 8px;
      }
    }
  }

  p {
    margin: 0.8rem 0 1.6rem;
  }

  & + li {
    margin-top: 2.4rem;
  }
`;

export const ToolItemTags = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ToolItemTag = styled.strong<ToolItemTagProps>`
  border-radius: 5px;
  padding: 2px;

  ${props =>
    props.isHighlight && {
      background: "#353372",
    }}
`;
