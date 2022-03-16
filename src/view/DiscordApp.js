import React from 'react';
import { Routes, Route, useMatch, Outlet } from 'react-router-dom';

import Home from './Home';

import '../style/view/DiscordApp.css';

class DiscordApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };

        this.callAPI = this.callAPI.bind(this);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <>
                <h1>DiscordApp</h1>
                <span>{this.state.apiResponse ?? "non"}</span>
            </>
        )
    }

    callAPI() {
        fetch("http://localhost:8080/discordApp")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
}

export default DiscordApp;