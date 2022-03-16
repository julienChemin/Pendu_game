import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './view/Home';
import DiscordApp from './view/DiscordApp';

import './style/index.css';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />

              <Route path="/discordApp" element={<DiscordApp/>} >
                  <Route path=":action" />
              </Route>

              <Route path="/db" element={<DiscordApp/>} >
                  <Route path=":action" />
              </Route>
          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);