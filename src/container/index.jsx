import React, { Component } from 'react';

import Todo from '../components/Todo';
import Completed from '../components/Completed';

class MainContainer extends Component {
  state = {
    completedItems: [{
      id: 1,
      content: 'Talk about why we use React'
    },],
    todoItems: [
  
      {
        id: 2,
        content: 'Talk about how JSX and React works'
      },
      {
        id: 3,
        content: 'Setup the react repo from scratch'
      },
      {
        id: 4,
        content: 'Sketch the components structure'
      },
      {
        id: 5,
        content: 'Start coding the components'
      },
      {
        id: 6,
        content: 'Add the drag, drop and draggover events'
      },
      {
        id: 7,
        content: 'Confirm that everything works as expected'
      },
      {
        id: 8,
        content: 'Drink water and congratulate yourself'
      },
      {
        id: 9,
        content: 'NB: prevent default for draggover so that the drop event works'
      },
      {
        id: 10,
        content: 'NB: Never debug your code while standing LOL'
      },
    ],
    draggedItem: null,
  }

  handleDrag = (item) => (event) => {
    this.setState({
      draggedItem: item,
    });
  }

  handleDrop = (event) => {
    event.preventDefault();
    
    const { draggedItem, completedItems, todoItems } = this.state;
    const items = [ ...completedItems, draggedItem ];

    const removedItemIndex = todoItems
      .findIndex((item) => item.id === draggedItem.id);
    
      todoItems.splice(removedItemIndex, 1);
      this.setState({
        completedItems: items,
        todoItems,
        draggedItem: null,
      });
  }

  handleDraggover = (event) => {
    event.preventDefault();
  }
  
  render( ) {
    const { todoItems, completedItems } = this.state;
    return (
      <div className="main">
        <Todo
          todoItems={todoItems}
          handleDrag={this.handleDrag}
          />
        <Completed 
          handleDrag={this.handleDrag}
          handleDrop={this.handleDrop}
          handleDragover={this.handleDraggover}
          completedItems={completedItems} />
      </div>
    );
  }
}

export default MainContainer;
