import React from 'react';
import {Formik, Field} from 'formik';

import {theme} from '../../styles';
import {FlexImageBackground, IconTextButton, Title, InputField, SecondaryButton, LeftArrow} from '../../components';
import {loginImage} from '../../assets';
import {IStackNavigationProps} from '../../navigation';

import {Container, InputContainer} from './Login';

interface IRegistrationProps extends IStackNavigationProps{
}

export const Registration: React.FC<IRegistrationProps> = props => {
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
        <Title text="Create Account" color={theme.colors.white}/>
        <Formik
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
          }}
          onSubmit={() => {}}
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
              <Field
                name="repeatPassword"
                placeholder="Repeat password"
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
                value={values.repeatPassword}
                component={InputField}
              />
              <SecondaryButton text="Submit" onPress={handleSubmit} color={theme.colors.white}/>
            </InputContainer>
          )}
        </Formik>
      </Container>
    </FlexImageBackground>
  );
};
