import styled, { css } from "styled-components";

interface IContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  input {
    margin-right: 4px;
    padding: 8px 16px;

    /* height: 50px; */

    border: 1px solid ${props => props.isErrored && "#F95E5A"};
    border-radius: 5px;

    ${props =>
      props.isErrored &&
      css`
        background: #feefee;
        color: #f95e5a;
      `}

    font-size: 2rem;

    &::placeholder {
      opacity: 0.6;
    }
  }
`;

export const Error = styled.span`
  color: #f95e5a;
  font-weight: 500;
  font-size: 1.8rem;

  margin-top: 4px;

  margin-left: auto;
`;
