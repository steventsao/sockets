import * as React from 'react';
import { connect } from 'react-redux';

interface ILobbyProps {
}

interface ILobbyState {
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);