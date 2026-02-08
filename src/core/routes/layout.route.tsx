import HomePage from '../../pages/Home';
import UsersPage from '../../pages/Users';

export const layoutRoute = {
  path: '/',
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'users',
      element: <UsersPage />,
    },
  ],
};
