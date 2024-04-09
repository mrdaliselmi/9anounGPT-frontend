import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './config.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';

function Routing() {
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
                ) : (
                  <ProtectedRoute>{route.element}</ProtectedRoute>
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
                      <ProtectedRoute>{childRoute.element}</ProtectedRoute>
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
                <ProtectedRoute>{route.element}</ProtectedRoute>
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
