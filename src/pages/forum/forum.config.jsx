import { Children } from 'react';
import Forum from './Forum';
import questionsConfig from './questions/questions.config';
import usersConfig from './users/users.config';

const childrenConfig = [questionsConfig, usersConfig];

export default {
  path: 'Forum/',
  element: <Forum />,
  public: true,
  children: childrenConfig,
};
