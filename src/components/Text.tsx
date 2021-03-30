import React from 'react';
import { Text } from 'react-native';

import { styled } from '../styles';

interface ITextColorProps {
  color?: string;
}

const TitleText = styled(Text)<ITextColorProps>`
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: bold;
  text-align: center;
  color: ${ ({ color, theme }) => color ? color : theme.colors.black }
`;

const ButtonTextStyled = styled(Text)<ITextColorProps>`
  font-size: 20px;
  color: ${ ({ color, theme }) => color ? color : theme.colors.black }
`;

interface ITextProps {
  text: string,
  color?: string,
}

export const Title: React.FC<ITextProps> = props => {
  const { text, color } = props;
  return <TitleText color={color}>{text}</TitleText>
};

export const QuaternaryText: React.FC<ITextProps> = props => {
  const { text, color } = props;
  return(
    <ButtonTextStyled color={color}>{text}</ButtonTextStyled>
  );
};

const TertiaryTextStyled = styled(Text)<ITextColorProps>`
  font-size: 24px;
  color: ${ ({ color, theme }) => color ? color : theme.colors.black }
`;

export const TertiaryText: React.FC<ITextProps> = props => {
  const {text, color} = props;

  return (
      <TertiaryTextStyled color={color}>{text}</TertiaryTextStyled>
  );
};

