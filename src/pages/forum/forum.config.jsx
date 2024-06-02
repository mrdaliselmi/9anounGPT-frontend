import Forum from './Forum';
import questionsConfig from './questions/questions.config';
import usersConfig from './users/users.config';
import forumHomeConfig from './home/forumHome.config';
import tagsViewConfig from './tags/tagsView.config';

const childrenConfig = [
  questionsConfig,
  usersConfig,
  forumHomeConfig,
  tagsViewConfig,
];

export default {
  path: 'Forum/',
  element: <Forum />,
  public: true,
  children: childrenConfig,
};
