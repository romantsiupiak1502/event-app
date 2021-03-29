import React from 'react';
import { TouchableOpacity } from "react-native";
import styled from 'styled-components';

interface IButtonStyledProps {
  backgroundColor?: string,
}

const ButtonStyled = styled(TouchableOpacity)<IButtonStyledProps>`
  border: 2px solid #FFFFFF;
  border-radius: 32px;
  padding: 8px 40px;
  background-color: ${ ({ backgroundColor }) => backgroundColor ? backgroundColor : 'transparent'};
`;

import { ButtonText } from "./Text";

interface IButtonStyledProps {
  text: string,
  onPress: () => void,
  color: string,
  backgroundColor?: string,
}

export const Button: React.FC<IButtonStyledProps> = props => {
  const { text, onPress, color, backgroundColor } = props;
  return (
    <ButtonStyled onPress={onPress} backgroundColor={backgroundColor}  color={''} text={''}>
      <ButtonText text={text} color={color}/>
    </ButtonStyled>
  );
};

const SubmitButtonStyled = styled(TouchableOpacity)<IButtonStyledProps>`
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 16px;
  align-items: center;
  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const SubmitButton: React.FC<IButtonStyledProps> = props => {
  const { text, onPress, color } = props;
  return (
    <SubmitButtonStyled onPress={onPress} color={''} text={''}>
      <ButtonText text={text} color={color}/>
    </SubmitButtonStyled>
  );
};
