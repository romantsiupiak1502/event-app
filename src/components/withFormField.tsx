import * as React from 'react';
import { FieldProps, FormikHandlers, FormikProps, getIn } from 'formik';
import { View } from 'react-native';

import { styled, theme } from '../styles';

import { DefaultText } from './Text';

export interface IFormFieldProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
}

export interface IFormComponent<Values = any, Value = any> {
  className?: string;
  isInvalid?: boolean;
  name: string;
  setFocus: (val: boolean) => void;
  setFieldValue: FormikProps<Values>['setFieldValue'];
  setTouched: FormikProps<Values>['setTouched'];
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: Value;
  disabled?: boolean;
  onFocus?: (e: any) => void;
}

interface IWrapperProps {
  hasLabel: boolean;
  disabled?: boolean;
  isInvalid?: boolean;
  isFocused: boolean;
}

const Wrapper = styled(View)<IWrapperProps>`
  width: 100%;
  ${ ({ disabled, isInvalid, isFocused, hasLabel }) =>
  hasLabel &&
  ` 
      position: relative;
      .label {
        position: absolute;
        top: 0;
        left: 0;
        colors: ${ isInvalid ? theme.colors.red : isFocused ? theme.colors.primary : theme.colors.gray };
        ${ disabled && 'opacity: 0.5;' }
      }
      ${ !disabled &&
  !isInvalid &&
  !isFocused &&
  `
        .field-component:hover ~ .label {
          colors: ${ theme.colors.black };
        }
      ` }
      .field-component:focus ~ .label {
        colors: ${ theme.colors.primary };
      }
    ` }
  }
`;

interface IWithFormFieldProps extends IFormFieldProps, FieldProps {
}

export const withFormField = <OriginalProps extends {}>(Component: React.ComponentType<IFormComponent | OriginalProps>) => (props: IWithFormFieldProps) => {
  const {
    field,
    form,
    label,
    hint,
    ...rest
  } = props;
  const [isFocused, setFocus] = React.useState(false);
  const isInvalid = getIn(form.errors, field.name) && getIn(form.touched, field.name);

  return (
    <Wrapper
      hasLabel={ label !== undefined }
      disabled={ props.disabled }
      isInvalid={ isInvalid }
      isFocused={ isFocused }
    >
      <Component
        isInvalid={ isInvalid }
        setFocus={ setFocus }
        setFieldValue={ form.setFieldValue }
        setTouched={ form.setTouched }
        { ...field }
        { ...rest }
      />
      { label && <DefaultText text={label} color={theme.colors.gray}/> }
      { !isInvalid && hint && <DefaultText text={hint} color={theme.colors.gray}/> }
      { form.errors[field.name] && form.touched[field.name] && (
        <View>
          <DefaultText text={form.errors[field.name]?.toString() || ''} color={theme.colors.red} />
        </View>
      ) }
    </Wrapper>
  );
};
