import  { useState, useRef } from 'react';

const DraggableComponent = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef();


  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop } = ref.current;

    setOffset({ x: clientX - offsetLeft, y: clientY - offsetTop });
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    let {offsetLeft,offsetTop} = ref.current
    const height = ref.current.getBoundingClientRect().height
    const {innerWidth,innerHeight} = window
 
   if(offsetTop > innerHeight - height - 5){
       setDragging(false)
   }

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