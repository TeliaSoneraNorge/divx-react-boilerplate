import React from 'react';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="layout-section layout-narrow">
        <p className="error-type">Error 404</p>
        <h1 className="error-title">
          The page you are looking for can not be found
        </h1>
        <p className="error-text">
          Do you suspect that this is a problem with the site?
          Please contact the support team who will be very happy to assist you.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
