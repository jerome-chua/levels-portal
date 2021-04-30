import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Token as RBTToken } from 'react-bootstrap-typeahead';

const ItemTypes = {
  TOKEN: 'TOKEN',
};

export default function Token({ index, onMove, ...props }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.TOKEN,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect(); // Determine rectangle on screen
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2; // Get horizontal middle
      const clientOffset = monitor.getClientOffset(); // Get pixels to the top
      const hoverClientX = clientOffset.x - hoverBoundingRect.left; // Get pixels to the top

      // Drag right
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      // Drag left
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Time to actually perform the action
      onMove(dragIndex, hoverIndex);
      // Mutate the monitor item
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TOKEN,
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <span ref={ref} style={{ opacity }}>
      <RBTToken {...props} />
    </span>
  );
}
