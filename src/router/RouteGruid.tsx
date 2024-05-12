import React from 'react';

const RouteGruid = ({ Component, ...props }) => {
  return (
    <div>
      {
        Component && <Component {...props} />
      }
    </div>
  );
}

export default RouteGruid;
