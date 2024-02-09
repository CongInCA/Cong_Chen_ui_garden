import React from "react";
import styled, { css } from "styled-components";

export type CardProps = {
  title: string;
  content: string;
  disabled?: boolean;
};

const CardContainer = styled.div<CardProps>`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  width: 300px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f0f0f0;
      color: #888888;
    `}
`;

const Card: React.FC<CardProps> = ({ title, content, disabled }) => {
  return (
    <CardContainer disabled={disabled}>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>
  );
};

export default Card;
export type { CardProps };
