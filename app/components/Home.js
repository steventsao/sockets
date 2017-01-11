"use strict";
const SearchBox_1 = require("./SearchBox");
const SearchList_1 = require("./SearchList");
const React = require("react");
const actions = require("../actions/actions");
class Home extends React.Component {
    render() {
        return (
        // Refactor Searchbox so it takes the dispatch method through connect()
        React.createElement("div", null,
            React.createElement(SearchBox_1.default, { startSearch: actions.startSearch, dispatch: this.props.dispatch, receiveViews: actions.receiveViews }),
            React.createElement(SearchList_1.default, { userName: this.props.searchList })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhvbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQ0FBb0M7QUFDcEMsNkNBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQiw4Q0FBOEM7QUFROUMsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUFvQjtJQUMzQyxNQUFNO1FBQ0osTUFBTSxDQUFDO1FBQ0wsdUVBQXVFO1FBQ3ZFO1lBQ0Usb0JBQUMsbUJBQVMsSUFBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEdBQUc7WUFDakgsb0JBQUMsb0JBQVUsSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FDMUMsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGOztBQUVELGtCQUFlLElBQUksQ0FBQyJ9