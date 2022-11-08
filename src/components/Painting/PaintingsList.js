import Painting from './Painting';
import React, { Component } from 'react';
class PaintingsList extends Component {
  static defaultProps = { initialValue: 1 };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = evt => {
    console.log(evt);
    this.setState(prevState => {
      evt.preventDefault();

      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    const { value } = this.state;
    const { items } = this.props;
    return (
      <div>
        {items.map(item => (
          <Painting
            key={item.id}
            item={item}
            value={value}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}
export default PaintingsList;
