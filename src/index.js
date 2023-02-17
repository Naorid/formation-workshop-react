import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

import Layout from "./layouts/Layout";
import HomePage from './routes/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Publish from "./routes/Publish";
import Articles from "./routes/Articles";
import Weather from "./routes/Weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <main>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Publish />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Layout>
  </main>
  <Footer/>
</BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
