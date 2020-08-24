import React from 'react';
import Link from 'next/link';
import Head from '../src/components/head';
import Nav from '../src/components/nav';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Capabilities!</h1>
    </div>
  </div>
);

export default Home;
