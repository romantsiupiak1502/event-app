import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styled } from '../styles';

import { QuaternaryText } from "./Text";

interface IButtonStyledProps {
  backgroundColor?: string,
}

const ButtonStyled = styled(TouchableOpacity)<IButtonStyledProps>`
  border: 2px solid #FFFFFF;
  border-radius: 32px;
  padding: 8px 40px;
  background-color: ${ ({ backgroundColor }) => backgroundColor ? backgroundColor : 'transparent'};
`;

interface IButtonProps {
  text: string,
  onPress: () => void,
  color: string,
  backgroundColor?: string,
}

export const Button: React.FC<IButtonProps> = props => {
  const { text, onPress, color, backgroundColor } = props;
  return (
    <ButtonStyled onPress={onPress} backgroundColor={backgroundColor}>
      <QuaternaryText text={text} color={color}/>
    </ButtonStyled>
  );
};

const SecondaryButtonStyled = styled(TouchableOpacity)<IButtonStyledProps>`
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 16px;
  align-items: center;
  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const SecondaryButton: React.FC<IButtonProps> = props => {
  const { text, onPress, color } = props;
  return (
      <SecondaryButtonStyled onPress={onPress}>
        <QuaternaryText text={text} color={color}/>
      </SecondaryButtonStyled>
  );
};
