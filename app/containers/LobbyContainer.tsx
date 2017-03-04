import * as React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Nav'


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
let initialState = {
}

class Lobby extends React.Component<ILobbyProps, ILobbyState> {
    constructor() {
        super();
        this.state = initialState;
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