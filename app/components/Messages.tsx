import * as React from 'react';
import * as Redux from 'redux';

interface IMessages {
  messages: string[];
}
class Messages extends React.Component<IMessages, any> {
  renderMessages(messages) {
    return messages.map((message, i) => (
      // todo use another type for Ids since indices can be re-ordered.
      <li className="list-group-item" key={i}>
        {message}
      </li>
    ));
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderMessages(this.props.messages)}
      </ul>
    );
  }

}


export default Messages;