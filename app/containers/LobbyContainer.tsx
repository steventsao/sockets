import * as React from 'react';
import { connect } from 'react-redux';

interface ILobbyProps {
    users: any[];
}

interface ILobbyState {
}

const mapStateToProps = (state) => {
    return {
        users: state.fetchReducer.users
    };
};

class Lobby extends React.Component<ILobbyProps, ILobbyState> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Lobby-container">
                Lobby
                {this.props.users}
            </div>
        );
    }
};

export default connect(mapStateToProps)(Lobby);