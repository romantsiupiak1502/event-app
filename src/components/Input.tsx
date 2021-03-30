import React from 'react';
import { TextInput } from 'react-native';

import { styled } from '../styles';
import { IFormComponent, withFormField } from './withFormField';

const TextInputStyled = styled(TextInput)`
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  padding-left: 8px;
  background-color: ${ ({ theme }) => theme.colors.gray };
  opacity: 0.8;
  margin-top: 16px;
  color: ${ ({ theme }) => theme.colors.white }
  font-size: 16px;
`;

export const Input: React.FC<IFormComponent> = props => {
  return <TextInputStyled {...props}/>
}

export const InputField = withFormField(Input)
