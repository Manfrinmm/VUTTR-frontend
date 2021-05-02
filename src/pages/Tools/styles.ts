import styled from "styled-components";

export const Container = styled.div`
  section {
    form {
      display: flex;
      /* justify-content: space-between; */

      > div {
        width: 100%;
        display: flex;
      }

      button {
        margin-left: auto;
      }
    }
  }

  ul {
    margin-top: 32px;
    list-style: none;
    padding: 0;
  }
`;

export const ToolItem = styled.li`
  border: 1px solid #fff8ec;
  padding: 8px 16px;

  background: #fff8ec;
  color: #12db89;

  border-radius: 5px;

  & + li {
    margin-top: 16px;
  }
`;
