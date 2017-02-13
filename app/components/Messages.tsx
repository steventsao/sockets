import * as React from 'react';
import * as Redux from 'redux';

interface IMessagesProps {
  messages: string[];
}
interface IMessagesState {}

class Messages extends React.Component<IMessagesProps, IMessagesState> {
  renderMessages(messages) {
    return messages.map((message, i) => (
      // todo use another type for Ids since indices can be re-ordered.
      <li className="messages center" key={i}>
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