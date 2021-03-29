import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {Formik, Field} from 'formik';

import {styled, theme} from '../../styles';
import {FlexImageBackground, IconTextButton, Title, InputField, SubmitButton} from '../../components';
import {loginImage, LeftArrow} from '../../assets';

import {IStackNavigatorType} from './Greeting';

export const Container = styled(View)`
  align-items: center;
`;

export const InputContainer = styled(View)`
  width: 90%;
  margin-top: 16px;
`;

interface ILoginProps {
  navigation: StackNavigationProp<IStackNavigatorType>;
}

export const Login: React.FC<ILoginProps> = props => {
  const {navigation} = props;

  return (
    <FlexImageBackground source={loginImage}>
      <IconTextButton
        icon={<LeftArrow stroke={theme.colors.white}/>}
        text="Back"
        color={theme.colors.white}
        onPress={() => navigation.navigate("Greeting")}
      />
      <Container>
        <Title text="Welcome back" color={theme.colors.white}/>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={() => {
          }}
        >
          {({handleSubmit, values, handleChange, handleBlur}) => (
            <InputContainer>
              <Field
                name="email"
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                component={InputField}
              />
              <Field
                name="password"
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                component={InputField}
              />
              <SubmitButton text="Submit" onPress={handleSubmit} color={theme.colors.white}/>
            </InputContainer>
          )}
        </Formik>
      </Container>
    </FlexImageBackground>
  );
};
