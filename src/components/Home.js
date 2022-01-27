import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="w-full h-[100vh] flex items-center justify-center"><Link to="/employer-dashboard" className="block bg-green px-5 py-3 text-white font-primary">Login</Link></div>
  );
}

export default Home;
