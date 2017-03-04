import * as React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Nav'


interface ILobbyProps {
}

interface ILobbyState {
}

class Lobby extends React.Component<ILobbyProps, ILobbyState> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Lobby-container">
                HELLO THIS IS LOBBY
            </div>
        );
    }
};

export default (Lobby);