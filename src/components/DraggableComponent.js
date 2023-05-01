import  { useState, useRef } from 'react';

const DraggableComponent = ({ children }) => {
  const ref = useRef();
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const {innerWidth,innerHeight} = window
  const height = ref.current.getBoundingClientRect().height

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop } = ref.current;

    if(offsetTop > innerHeight - height - 5){
        offsetTop = innerHeight - height
       }

    setOffset({ x: clientX - offsetLeft, y: clientY - offsetTop });
    setDragging(true);
  };

  const handleMouseMove = (e) => {

    if (dragging) {
      const { clientX, clientY } = e;
      setPosition({ x: clientX - offset.x, y: clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', left: position.x, top: position.y, zIndex: '4' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;