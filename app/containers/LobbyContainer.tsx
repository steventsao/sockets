import * as React from 'react';

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