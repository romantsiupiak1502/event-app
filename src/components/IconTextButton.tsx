import React from "react";
import { TouchableOpacity } from "react-native";

import { styled } from "../styles";

import { ButtonText } from "./Text";

const IconTextButtonStyled = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

interface IIconTextButtonProps {
  icon: React.ReactElement,
  text: string,
  onPress: () => void,
}

export const IconTextButton: React.FC<IIconTextButtonProps> = props => {
  const { icon, text, onPress } = props;
  return (
    <IconTextButtonStyled onPress={onPress}>
      {icon}
      <ButtonText text={text} />
    </IconTextButtonStyled>
  );
};
