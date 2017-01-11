"use strict";
const React = require("react");
const axios_1 = require("axios");
class SearchBox extends React.Component {
    printClick() {
        this.props.dispatch(this.props.startSearch('randomUser'));
        axios_1.default.get('/channel', { params: { name: this.textInput } })
            .then(res => {
            console.log("Answer", res);
            this.props.dispatch(this.props.receiveViews(res.data.items, 1000));
        });
    }
    render() {
        return (React.createElement("div", { className: "input-group" },
            React.createElement("input", { className: "form-control", placeholder: "Search for...", ref: (input) => { this.textInput = input; } }),
            React.createElement("span", { className: "input-group-btn" },
                React.createElement("button", { className: "btn btn-default", type: "button", onClick: this.printClick.bind(this) },
                    "Search ",
                    this.userId))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VhcmNoQm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQStCO0FBRS9CLGlDQUEwQjtBQVExQixlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUlyRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxRCxlQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQUMsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsTUFBTTtRQUNKLE1BQU0sQ0FBQyxDQUNMLDZCQUFLLFNBQVMsRUFBQyxhQUFhO1lBQzFCLCtCQUFPLFNBQVMsRUFBQyxjQUFjLEVBQzdCLFdBQVcsRUFBQyxlQUFlLEVBQzNCLEdBQUcsRUFBRSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBSTtZQUNqRCw4QkFBTSxTQUFTLEVBQUMsaUJBQWlCO2dCQUMvQixnQ0FBUSxTQUFTLEVBQUMsaUJBQWlCLEVBQ2pDLElBQUksRUFBQyxRQUFRLEVBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7b0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQ1YsQ0FDSixDQUNILENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjs7QUFFRCxrQkFBZSxTQUFTLENBQUMifQ==