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

interface ITextProps {
  text: string,
  color?: string,
}

export const Title: React.FC<ITextProps> = props => {
  const { text, color } = props;
  return <TitleText color={color}>{text}</TitleText>
};

const ButtonTextStyled = styled(Text)<ITextColorProps>`
  font-size: 20px;
  color: ${ ({ color, theme }) => color ? color : theme.colors.black }
`;

export const ButtonText: React.FC<ITextProps> = props => {
  const { text, color } = props;
  return(
    <ButtonTextStyled color={color}>{text}</ButtonTextStyled>
  );
};

const DefaultTextStyled = styled(Text)<ITextColorProps>`
  font-size: 24px;
  color: ${ ({ color, theme }) => color ? color : theme.colors.black }
`;

export const DefaultText: React.FC<ITextProps> = props => {
  const { text, color } = props;
  return (
    <DefaultTextStyled color={color}>{text}</DefaultTextStyled>
  );
}
