import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import Menu from '../components/Nav';
import * as actions from '../actions/actions';
import axios from 'axios';

interface ILobbyProps {
    users: any[];
    isOpen: boolean;
    onCreateUserButtonClick: (username: string)=> Redux.Action
}

interface ILobbyState {
    username: string;
}

const mapStateToProps = (state) => {
    return {
        users: state.fetchReducer.users,
        isOpen: state.burgerMenu.isOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateUserButtonClick: (username) => {
            dispatch(actions.createUserStart(username));
            axios.post('user/create', { username })
                .then((response) => {
                    console.log(response);
                    dispatch(actions.createUserSuccess(response.data));
                })
                .catch((err) => {
                    dispatch(actions.createUserErr(err));
                });
        }
    };
};

let initialState = {
    username: ''
};

let setUserName = (username)=> (
    { username }
)

let setToInitialState = (state, props)=> (
    initialState
)

class Lobby extends React.Component<ILobbyProps, ILobbyState> {
// <Menu  className="nav-button"
//     isOpen={this.props.isOpen}></Menu>
    constructor() {
        super();
        this.state = initialState;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCreateUserButtonClick(this.state.username);
        this.setState(setToInitialState);
    }

    handleUserInputChange(e) {
        this.setState(setUserName(e.target.value));
    }

    render() {
        return (
            <div>
                <div className="center">
                    <h1> Login to your account </h1>
                    <form className="login-form">
                        <input type="text"
                               name="user"
                               value={this.state.username}
                               placeholder="Username"
                               onChange={this.handleUserInputChange.bind(this)} />
                        <input type="password"
                               name="pass"
                               placeholder="Password" />
<<<<<<< eaf7cadf21785876f2112137f4ecb59071953fe5
                        <button type="submit"
                                name="login"
                                value="Login"
                                onClick={this.handleSubmit.bind(this)} >
                            Login
                        </button>
=======
                        <input type="submit"
                               name="login"
                               value="Login"
                               onClick={this.handleSubmit.bind(this)} />
>>>>>>> Simple form that can create user with just username
                    </form>
                </div>
                {this.props.users}
            </div>
        );
    }
};

export default connect(mapStateToProps,  mapDispatchToProps)(Lobby);