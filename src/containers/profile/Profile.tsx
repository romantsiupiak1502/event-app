import React from 'react';
import {ImageBackground, View} from 'react-native';

import {styled, theme} from '../../styles';
import {Title, TertiaryText, QuaternaryText, SecondaryButton} from '../../components';

const Wrapper = styled(ImageBackground)`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ProfileInfoContainer = styled(View)`
  width: 90%;
  flex: 0.4;
  padding: 16px;
  align-items: center;
  background-color: ${ ({ theme }) => theme.colors.rgbaBlack };
  border-top-left-radius: 16px;
`;

const UserNameContainer = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${ ({ theme }) => theme.colors.white };
`;

const InfoContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const UserInfo = styled(View)`
    align-items: center;
`;

type IUserType = {
    id: string,
    name: string,
    photo: HTMLImageElement,
    posts: string,
    followers: string,
    following: string,
}

interface IProfileProps {
    user: IUserType;
}

export const Profile: React.FC<IProfileProps> = props => {
    const { user } = props;

    return (
        <Wrapper source={user.photo}>
            <ProfileInfoContainer>
                <UserNameContainer>
                    <Title text={user.name}  color={theme.colors.white}/>
                </UserNameContainer>
                <InfoContainer>
                    <UserInfo>
                        <TertiaryText text={user.posts} color={theme.colors.white} />
                        <QuaternaryText text="posts" color={theme.colors.white} />
                    </UserInfo>
                    <UserInfo>
                        <TertiaryText text={user.followers} color={theme.colors.white} />
                        <QuaternaryText text="followers" color={theme.colors.white} />
                    </UserInfo>
                    <UserInfo>
                        <TertiaryText text={user.following} color={theme.colors.white} />
                        <QuaternaryText text="following" color={theme.colors.white} />
                    </UserInfo>
                </InfoContainer>
                <SecondaryButton text="Follow" onPress={()=>{}} color={theme.colors.white} />
            </ProfileInfoContainer>
        </Wrapper>
    );
};
