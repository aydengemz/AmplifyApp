
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AppPlayer from "./pages/AppPlayer.js";
import AppPost from "./pages/AppPost.js";
import AppTodo from "./pages/AppTodo.js";
import AppRest1 from "./pages/AppRest1";
import AppRest2 from "./pages/AppRest2"

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';



Amplify.configure(awsconfig);


function App({ signOut, user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="player" element={<AppPlayer />} />
          <Route path="todo" element={<AppTodo />} />
          <Route path="post" element={<AppPost />} />
          <Route path="api1" element={<AppRest1 />} />
          <Route path="api2" element={<AppRest2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);