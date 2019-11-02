import React from 'react';

const TodoItem = ({ item, handleDrag }) => (
  <div className="item" draggable onDrag={handleDrag(item)} >
    <span>{item.id}</span>
    {item.content}
  </div>
);

export default TodoItem;
