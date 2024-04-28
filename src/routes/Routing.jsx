import {
  useAuth,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectToken, setToken } from '@/app/state/user/userSlice.js';
import routes from './config.jsx';

function Routing() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const finaleRoute = (route) => {
    if (route.public) return route.element;
    if (!token) {
      const { getToken } = useAuth();
      getToken().then((res) => {
        res && dispatch(setToken(res));
      });
      return route.element;
    }
    return route.element;
  };

  return (
    <Routes>
      {routes.map((route) => {
        if (route.children) {
          const { path } = route;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.auth || route.public ? (
                  finaleRoute(route)
                ) : (
                  <div>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                    <SignedIn>{route.element}</SignedIn>
                  </div>
                )
              }
            >
              {route.children.map((childRoute) => (
                <Route
                  key={`${path}${childRoute.path}`}
                  path={childRoute.path}
                  element={
                    childRoute.auth || childRoute.public ? (
                      finaleRoute(childRoute)
                    ) : (
                      <div>
                        <SignedOut>
                          <RedirectToSignIn />
                        </SignedOut>
                        <SignedIn>{childRoute.element}</SignedIn>
                      </div>
                    )
                  }
                />
              ))}
            </Route>
          );
        }
        return (
          <Route
            path={route.path}
            element={
              route.auth || route.public ? (
                finaleRoute(route)
              ) : (
                <div>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                  <SignedIn>{route.element}</SignedIn>
                </div>
              )
            }
            key={route.path}
          />
        );
      })}
    </Routes>
  );
}

export default Routing;
