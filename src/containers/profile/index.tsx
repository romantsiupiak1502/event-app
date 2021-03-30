import React from 'react';
import {Profile} from './Profile';

import {profileImage} from '../../assets';

export const ProfileContainer = () => {
    const user = {id: 1, name: "Jane Foster", photo: profileImage, posts: "58", followers: "5k", following: '1028'}

    return <Profile user={user}/>
};
