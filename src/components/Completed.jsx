import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Completed extends Component {
  render() {
    const { completedItems, handleDrop, handleDragover, handleDrag } = this.props;
    return(
      <div className="completed"
      >
        <h3>Completed</h3>
        <div className="items"
          onDrop={handleDrop}
          onDragOver={handleDragover}
          onDragEnter={handleDragover}
        >
          {completedItems.map((item) => (<TodoItem key={item.id} item={item} handleDrag={handleDrag} />))}
        </div>
    </div>
    );
  }
}

export default Completed;
