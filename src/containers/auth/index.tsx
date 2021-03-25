import React from 'react';
import { useSelector } from 'react-redux';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthoriziedRoot';

export const Root = () => {

  return false ? <AuthorizedRoot /> : <UnauthorizedRoot />
};
