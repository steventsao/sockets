"use strict";
const React = require("react");
const lodash_1 = require("lodash");
class SearchList extends React.Component {
    renderRows(userNames) {
        return lodash_1.map(userNames, (userName, i) => React.createElement("li", { key: i }, userName));
    }
    render() {
        return (React.createElement("ul", null, this.renderRows(this.props.userName)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlYXJjaExpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTZCO0FBSzdCLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUEwQjtJQUN2RCxVQUFVLENBQUMsU0FBUztRQUNsQixNQUFNLENBQUMsWUFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssNEJBQUksR0FBRyxFQUFFLENBQUMsSUFBRyxRQUFRLENBQU0sQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFDRCxNQUFNO1FBQ0osTUFBTSxDQUFDLENBQ0wsZ0NBQ0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUNsQyxDQUNOLENBQUM7SUFDSixDQUFDO0NBQ0Y7O0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=