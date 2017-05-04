import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div style={{ padding: 30 }}>
      <h1>Index page</h1>
      <Link to="/examples" style={{ display: 'block' }}>Examples</Link>
      <Link to="/doesnotexist" style={{ display: 'block' }}>Page that does not exist</Link>
    </div>
  )
};

export default IndexPage;
