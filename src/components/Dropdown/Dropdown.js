import React, { Component } from 'react';
import EventList from '../EventBoard/EventList/EventList';
class Dropdown extends Component {
  state = { visible: false };
  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  render() {
    const { events } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {visible ? 'hide' : 'show'}
        </button>
        <div>{visible && <EventList items={events} />}</div>
      </div>
    );
  }
}
export default Dropdown;
