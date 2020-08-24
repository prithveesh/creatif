import React from 'react';
import Head from '../src/components/head';
import Nav from '../src/components/nav';
import Link from 'next/link';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Contact Us!</h1>
    </div>
  </div>
);

export default Home;
