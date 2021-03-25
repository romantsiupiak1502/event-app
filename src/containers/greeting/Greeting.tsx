import React from "react";
import { ImageBackground, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { greetingImage } from "../../assets";
import { Title, Button } from "../../components";
import { theme, styled } from "../../styles";

const WrapperImg = styled(ImageBackground)`
  flex: 1;
  justify-content: flex-end;
`;

const Container = styled(View)`
  background-color: ${ ({ theme }) => theme.colors.primary };
  align-items: center;
  flex: 0.3;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const ContentContainer = styled(View)`
  margin-left: 40px;
  margin-right: 40px;
  height: 100%;
`;

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type IStackNavigatorType = {
  Greeting: undefined,
  Login: undefined,
  Registration: undefined,
};

interface IGreetingProps {
  navigation: StackNavigationProp<IStackNavigatorType>;
}

export const Greeting: React.FC<IGreetingProps> = props => {
  return (
    <WrapperImg source={greetingImage}>
      <Container>
        <ContentContainer>
          <Title text={"Be together, anytime, anywhere"} color={theme.colors.white}/>
          <ButtonContainer>
            <Button
              text="Sign in"
              color={theme.colors.white}
              onPress={() => props.navigation.navigate("Login")}
            />
            <Button
              text="Sign up"
              color={theme.colors.black}
              backgroundColor={theme.colors.white}
              onPress={() => props.navigation.navigate("Registration")}
            />
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </WrapperImg>
  );
};
