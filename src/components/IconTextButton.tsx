import React from 'react';
import {TouchableOpacity} from 'react-native';

import {styled} from '../styles';

import {ButtonText} from './Text';

const IconTextButtonStyled = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

interface IIconTextButtonProps {
    icon: React.ReactElement,
    text: string,
    color?: string;
    onPress: () => void,
}

export const IconTextButton: React.FC<IIconTextButtonProps> = props => {
    const {icon, text, color, onPress} = props;
    return (
        <IconTextButtonStyled onPress={onPress}>
            {icon}
            <ButtonText text={text} color={color}/>
        </IconTextButtonStyled>
    );
};
