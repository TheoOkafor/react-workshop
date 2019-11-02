import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  render() {

    const { todoItems, handleDrag } = this.props;
    return(
      <div className="todo">
      <h3>TODO</h3>
      <div className="items">
        {todoItems.map((item) => (<TodoItem handleDrag={handleDrag} key={item.id} item={item} />))}
      </div>
  </div>
    );
  }
}

export default Todo;
