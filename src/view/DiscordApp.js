import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom'

import Home from './Home';

import '../style/view/DiscordApp.css';

function DiscordApp() {
    const path = useMatch('discordApp/*').pathnameBase;

    return (
        <Routes>
            <Route path={`${path}/bonjour`} element={<Home/> } />
            <Route path={`${path}/test2`} element={() => <div>test2</div> } />
        </Routes>
    )
}

export default DiscordApp;