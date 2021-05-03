import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100%;

  border-radius: 5px;
  border: 0;

  color: #fff;
  text-align: center;
  font-size: 1.8rem;

  background: #ffbb43;

  transition: background-color 0.2s;

  &:hover {
    background: #e6a83c;
  }
`;
