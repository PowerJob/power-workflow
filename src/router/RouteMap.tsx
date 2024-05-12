import React from 'react';
import { Route } from 'react-router-dom';
import RouterGuard from './RouteGruid';


const RouteMap = (routes: any[]) => (
  routes && routes.map((route, index) => {
    // let exact: boolean = route.exact ? route.exact : false;
    return (
      <Route key={index} path={route.path} element={<RouterGuard {...route} />}>
        {
          route.routes && RouteMap(route.routes)
        }
      </Route>
    )
  })
)

export default RouteMap;
