import { Routes, Route } from 'react-router-dom';
import { RedirectToSignIn, useUser } from '@clerk/clerk-react';
import routes from './config.jsx';

function Routing() {
  const { isSignedIn, user } = useUser();
  const finaleRoute = (route) => {
    if (route.public) return route.element;
    // add logic for redirection and protected routes
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
                ) : isSignedIn ? (
                  route.element
                ) : (
                  <RedirectToSignIn />
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
                    ) : isSignedIn ? (
                      childRoute.element
                    ) : (
                      <RedirectToSignIn />
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
              ) : isSignedIn ? (
                route.element
              ) : (
                <RedirectToSignIn />
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
