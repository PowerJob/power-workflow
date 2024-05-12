import React from 'react';

import { BrowserRouter as Router, Routes as RouteP } from 'react-router-dom';
import routes from './routes';
import RouteMap from './RouteMap';


const RouteWatch = () => {
  return (
    <div>
      <Router>
        <RouteP>
          {RouteMap(routes)}
        </RouteP>
      </Router>
    </div>
  );
}

export default RouteWatch;
