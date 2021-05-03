import styled, { css } from "styled-components";

interface IContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;

  textarea {
    margin-top: 4px;
    padding: 8px 16px;

    min-height: 50px;
    max-height: 100px;

    border: 1px solid ${props => props.isErrored && "#F95E5A"};
    border-radius: 5px;

    resize: vertical;

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
