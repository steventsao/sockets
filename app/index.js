"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const redux_1 = require("redux");
const actions = require("./actions/actions");
const react_redux_1 = require("react-redux");
const createLogger = require("redux-logger");
const HomeContainer_js_1 = require("./containers/HomeContainer.js");
const defaultState = {
    isSearching: false,
    userIds: [],
};
const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (actions.START_SEARCH):
            return state;
        case (actions.RECEIVE_VIEWS):
            return Object.assign({}, state, { userIds: action.channelId, receivedAt: action.receivedAt });
        default:
            return state;
    }
};
const logger = createLogger();
const store = redux_1.createStore(mainReducer, redux_1.applyMiddleware(logger));
window.onload = () => {
    react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(HomeContainer_js_1.default, null)), document.getElementById('root'));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUFnQztBQUNoQyx5Q0FBbUM7QUFDbkMsaUNBQXFEO0FBQ3JELDZDQUE2QztBQUM3Qyw2Q0FBZ0Q7QUFDaEQsNkNBQThDO0FBQzlDLG9FQUEwRDtBQUUxRCxNQUFNLFlBQVksR0FBRztJQUNuQixXQUFXLEVBQUUsS0FBSztJQUNsQixPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBTTtJQUMvQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNoRztZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQzlCLE1BQU0sS0FBSyxHQUFHLG1CQUFXLENBQUMsV0FBVyxFQUFFLHVCQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUdoRSxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2Qsa0JBQU0sQ0FDSixvQkFBQyxzQkFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3BCLG9CQUFDLDBCQUFhLE9BQUcsQ0FDUixFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUM7QUFDSixDQUFDLENBQUMifQ==