import Forum from './Forum';
import questionsConfig from './questions/questions.config';
import usersConfig from './users/users.config';
import forumHomeConfig from './home/forumHome.config';

const childrenConfig = [questionsConfig, usersConfig, forumHomeConfig];

export default {
  path: 'Forum/',
  element: <Forum />,
  public: true,
  children: childrenConfig,
};
